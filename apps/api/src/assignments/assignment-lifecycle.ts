import { AssignmentStatus } from '@challengepoint/db';
import { PrismaService } from '../prisma/prisma.service';

export type LifecycleStatus = 'PENDING' | 'ACCEPTED' | 'ACTIVE' | 'COMPLETED';

export type LifecycleCounts = Record<LifecycleStatus, number>;

export type PlayerLearningSummary = {
  lessons: LifecycleCounts;
  journeys: LifecycleCounts;
  recentCompletions: {
    lessons: number;
    journeys: number;
  };
};

export function createLifecycleCounts(): LifecycleCounts {
  return {
    PENDING: 0,
    ACCEPTED: 0,
    ACTIVE: 0,
    COMPLETED: 0,
  };
}

export function toStoredAssignmentStatus(
  status?: string | null,
): AssignmentStatus {
  switch (status) {
    case 'PENDING':
    case 'NEW':
      return AssignmentStatus.NEW;
    case 'ACCEPTED':
    case 'OPEN':
      return AssignmentStatus.OPEN;
    case 'ACTIVE':
    case 'IN_PROGRESS':
      return AssignmentStatus.IN_PROGRESS;
    case 'COMPLETED':
    case 'ARCHIVED':
      return AssignmentStatus.COMPLETED;
    default:
      return AssignmentStatus.NEW;
  }
}

export function toLifecycleStatus(status?: string | null): LifecycleStatus {
  switch (status) {
    case AssignmentStatus.NEW:
    case 'PENDING':
      return 'PENDING';
    case AssignmentStatus.OPEN:
    case 'ACCEPTED':
      return 'ACCEPTED';
    case AssignmentStatus.IN_PROGRESS:
    case 'ACTIVE':
      return 'ACTIVE';
    case AssignmentStatus.COMPLETED:
    case AssignmentStatus.ARCHIVED:
    case 'COMPLETED':
      return 'COMPLETED';
    default:
      return 'PENDING';
  }
}

export function deriveJourneyAssignmentStatus(
  lessonStatuses: Array<string | null | undefined>,
  currentStatus?: string | null,
): AssignmentStatus {
  const currentLifecycle = toLifecycleStatus(currentStatus);
  if (lessonStatuses.length === 0) {
    return toStoredAssignmentStatus(currentStatus);
  }

  const lifecycleStatuses = lessonStatuses.map((status) =>
    toLifecycleStatus(status),
  );

  if (lifecycleStatuses.every((status) => status === 'COMPLETED')) {
    return AssignmentStatus.COMPLETED;
  }

  if (
    lifecycleStatuses.some(
      (status) => status === 'ACTIVE' || status === 'COMPLETED',
    )
  ) {
    return AssignmentStatus.IN_PROGRESS;
  }

  if (currentLifecycle === 'ACCEPTED') {
    return AssignmentStatus.OPEN;
  }

  if (currentLifecycle === 'PENDING') {
    return AssignmentStatus.NEW;
  }

  return AssignmentStatus.OPEN;
}

function getCompletedAtUpdate(
  currentStatus: string | null | undefined,
  nextStatus: AssignmentStatus,
  currentCompletedAt: Date | null | undefined,
): Date | null | undefined {
  if (nextStatus === AssignmentStatus.COMPLETED) {
    return currentCompletedAt ?? new Date();
  }

  if (toLifecycleStatus(currentStatus) === 'COMPLETED') {
    return null;
  }

  return undefined;
}

export async function syncJourneyAssignmentLifecycleForPlanIds(
  prisma: PrismaService,
  planIds: string[],
) {
  const uniquePlanIds = [...new Set(planIds.filter(Boolean))];
  if (uniquePlanIds.length === 0) return;

  const journeyAssignments = await prisma.journeyTemplateAssignment.findMany({
    where: { playerPlanId: { in: uniquePlanIds } },
    select: {
      id: true,
      playerPlanId: true,
      status: true,
      completedAt: true,
      isInTrainingQueue: true,
    },
  });

  if (journeyAssignments.length === 0) return;

  const lessonAssignments = await prisma.lessonAssignment.findMany({
    where: {
      block: {
        planId: { in: uniquePlanIds },
      },
    },
    select: {
      status: true,
      block: {
        select: {
          planId: true,
        },
      },
    },
  });

  const statusesByPlanId = new Map<string, string[]>();
  for (const lessonAssignment of lessonAssignments) {
    const planId = lessonAssignment.block?.planId;
    if (!planId) continue;
    const statuses = statusesByPlanId.get(planId) ?? [];
    statuses.push(lessonAssignment.status);
    statusesByPlanId.set(planId, statuses);
  }

  await Promise.all(
    journeyAssignments.map((assignment) => {
      const nextStatus = deriveJourneyAssignmentStatus(
        statusesByPlanId.get(assignment.playerPlanId) ?? [],
        assignment.status,
      );
      const shouldLeaveQueue = assignment.isInTrainingQueue;
      const completedAtUpdate = getCompletedAtUpdate(
        assignment.status,
        nextStatus,
        assignment.completedAt,
      );
      if (
        !shouldLeaveQueue &&
        nextStatus === assignment.status &&
        completedAtUpdate === undefined
      ) {
        return Promise.resolve(null);
      }

      return prisma.journeyTemplateAssignment.update({
        where: { id: assignment.id },
        data: {
          status: nextStatus,
          ...(completedAtUpdate !== undefined
            ? { completedAt: completedAtUpdate }
            : {}),
          ...(shouldLeaveQueue ? { isInTrainingQueue: false } : {}),
        },
      });
    }),
  );
}

export async function loadPlayerLearningSummaries(
  prisma: PrismaService,
  playerIds: string[],
): Promise<Record<string, PlayerLearningSummary>> {
  const recentCompletionThreshold = new Date(
    Date.now() - 90 * 24 * 60 * 60 * 1000,
  );
  const uniquePlayerIds = [...new Set(playerIds.filter(Boolean))];
  if (uniquePlayerIds.length === 0) return {};

  const summaries = Object.fromEntries(
    uniquePlayerIds.map((playerId) => [
      playerId,
      {
        lessons: createLifecycleCounts(),
        journeys: createLifecycleCounts(),
        recentCompletions: {
          lessons: 0,
          journeys: 0,
        },
      },
    ]),
  ) as Record<string, PlayerLearningSummary>;

  const [lessonAssignments, rawJourneyAssignments] = await Promise.all([
    prisma.lessonAssignment.findMany({
      where: { playerId: { in: uniquePlayerIds } },
      select: {
        playerId: true,
        status: true,
        completedAt: true,
        block: {
          select: {
            planId: true,
          },
        },
      },
    }),
    prisma.journeyTemplateAssignment.findMany({
      where: { playerId: { in: uniquePlayerIds } },
      select: {
        id: true,
        playerId: true,
        playerPlanId: true,
        status: true,
        isInTrainingQueue: true,
        completedAt: true,
      },
    }),
  ]);

  const uniquePlanIds = [
    ...new Set(
      rawJourneyAssignments.map((assignment) => assignment.playerPlanId),
    ),
  ];
  const validPlanIdSet = new Set(
    (
      await prisma.playerDevelopmentPlan.findMany({
        where: { id: { in: uniquePlanIds } },
        select: { id: true },
      })
    ).map((plan) => plan.id),
  );

  const invalidJourneyIds = rawJourneyAssignments
    .filter((assignment) => !validPlanIdSet.has(assignment.playerPlanId))
    .map((assignment) => assignment.id);

  if (invalidJourneyIds.length > 0) {
    await prisma.journeyTemplateAssignment.deleteMany({
      where: { id: { in: invalidJourneyIds } },
    });
  }

  const journeyAssignments = rawJourneyAssignments.filter((assignment) =>
    validPlanIdSet.has(assignment.playerPlanId),
  );

  const planLessonAssignments =
    uniquePlanIds.length === 0
      ? []
      : await prisma.lessonAssignment.findMany({
          where: {
            block: {
              planId: { in: [...validPlanIdSet] },
            },
          },
          select: {
            status: true,
            completedAt: true,
            block: {
              select: {
                planId: true,
              },
            },
          },
        });

  const journeyStatusesByPlanId = new Map<string, AssignmentStatus>();
  const planStatuses = new Map<string, string[]>();
  const planCompletionAtByPlanId = new Map<string, Date>();
  for (const assignment of planLessonAssignments) {
    const planId = assignment.block?.planId;
    if (!planId) continue;
    const statuses = planStatuses.get(planId) ?? [];
    statuses.push(assignment.status);
    planStatuses.set(planId, statuses);
    if (toLifecycleStatus(assignment.status) === 'COMPLETED') {
      const currentCompletedAt = planCompletionAtByPlanId.get(planId);
      if (
        assignment.completedAt &&
        (!currentCompletedAt || assignment.completedAt > currentCompletedAt)
      ) {
        planCompletionAtByPlanId.set(planId, assignment.completedAt);
      }
    }
  }

  await Promise.all(
    journeyAssignments.map((assignment) => {
      const nextStatus = deriveJourneyAssignmentStatus(
        planStatuses.get(assignment.playerPlanId) ?? [],
        assignment.status,
      );
      journeyStatusesByPlanId.set(assignment.playerPlanId, nextStatus);
      const completedAtUpdate = getCompletedAtUpdate(
        assignment.status,
        nextStatus,
        assignment.completedAt,
      );

      if (
        nextStatus === assignment.status &&
        !assignment.isInTrainingQueue &&
        completedAtUpdate === undefined
      ) {
        return Promise.resolve(null);
      }

      return prisma.journeyTemplateAssignment.update({
        where: { id: assignment.id },
        data: {
          status: nextStatus,
          ...(completedAtUpdate !== undefined
            ? { completedAt: completedAtUpdate }
            : {}),
          ...(assignment.isInTrainingQueue ? { isInTrainingQueue: false } : {}),
        },
      });
    }),
  );

  for (const assignment of journeyAssignments) {
    if (!assignment.playerId) continue;
    const lifecycleStatus = toLifecycleStatus(
      journeyStatusesByPlanId.get(assignment.playerPlanId) ?? assignment.status,
    );
    const completionAt =
      planCompletionAtByPlanId.get(assignment.playerPlanId) ??
      assignment.completedAt;
    summaries[assignment.playerId].journeys[lifecycleStatus] += 1;
    if (
      lifecycleStatus === 'COMPLETED' &&
      completionAt &&
      completionAt >= recentCompletionThreshold
    ) {
      summaries[assignment.playerId].recentCompletions.journeys += 1;
    }
  }

  const pendingJourneyPlanIds = new Set(
    journeyAssignments
      .filter(
        (assignment) =>
          toLifecycleStatus(
            journeyStatusesByPlanId.get(assignment.playerPlanId) ??
              assignment.status,
          ) === 'PENDING',
      )
      .map((assignment) => assignment.playerPlanId),
  );

  for (const assignment of lessonAssignments) {
    if (
      !assignment.playerId ||
      (assignment.block?.planId &&
        pendingJourneyPlanIds.has(assignment.block.planId))
    ) {
      continue;
    }
    const lifecycleStatus = toLifecycleStatus(assignment.status);
    summaries[assignment.playerId].lessons[lifecycleStatus] += 1;
    if (
      lifecycleStatus === 'COMPLETED' &&
      assignment.completedAt &&
      assignment.completedAt >= recentCompletionThreshold
    ) {
      summaries[assignment.playerId].recentCompletions.lessons += 1;
    }
  }

  return summaries;
}
