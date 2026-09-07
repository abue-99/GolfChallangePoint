export type LegacyAssignmentStatus =
  | "NEW"
  | "OPEN"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "ARCHIVED"
  | "OUTSTANDING"
  | "STARTED"
  | "FINISHED"
  | "REVIEWED";

export type LifecycleStatus =
  | "PENDING"
  | "ACCEPTED"
  | "ACTIVE"
  | "COMPLETED";

export type LifecycleCounts = Record<LifecycleStatus, number>;

export const LIFECYCLE_ORDER: LifecycleStatus[] = [
  "PENDING",
  "ACCEPTED",
  "ACTIVE",
  "COMPLETED",
];

export const LIFECYCLE_META: Record<
  LifecycleStatus,
  { label: string; shortLabel: string; emoji: string; color: string; textClass: string; bgClass: string }
> = {
  PENDING: {
    label: "Pending",
    shortLabel: "P",
    emoji: "🟧",
    color: "#F97316",
    textClass: "text-orange-600",
    bgClass: "bg-orange-500",
  },
  ACCEPTED: {
    label: "Accepted",
    shortLabel: "A",
    emoji: "🟨",
    color: "#EAB308",
    textClass: "text-yellow-600",
    bgClass: "bg-yellow-500",
  },
  ACTIVE: {
    label: "Active",
    shortLabel: "A",
    emoji: "🟦",
    color: "#3B82F6",
    textClass: "text-blue-600",
    bgClass: "bg-blue-500",
  },
  COMPLETED: {
    label: "Completed",
    shortLabel: "C",
    emoji: "🟩",
    color: "#22C55E",
    textClass: "text-green-600",
    bgClass: "bg-green-500",
  },
};

export function createLifecycleCounts(): LifecycleCounts {
  return {
    PENDING: 0,
    ACCEPTED: 0,
    ACTIVE: 0,
    COMPLETED: 0,
  };
}

export function normalizeLifecycleStatus(
  status?: string | null,
): LifecycleStatus {
  switch (status as LegacyAssignmentStatus | LifecycleStatus | undefined | null) {
    case "PENDING":
    case "NEW":
      return "PENDING";
    case "ACCEPTED":
    case "OPEN":
    case "OUTSTANDING":
      return "ACCEPTED";
    case "ACTIVE":
    case "IN_PROGRESS":
    case "STARTED":
      return "ACTIVE";
    case "COMPLETED":
    case "ARCHIVED":
    case "FINISHED":
    case "REVIEWED":
      return "COMPLETED";
    default:
      return "PENDING";
  }
}

export function isPendingLifecycleStatus(status?: string | null) {
  return normalizeLifecycleStatus(status) === "PENDING";
}

export function isAcceptedLifecycleStatus(status?: string | null) {
  return normalizeLifecycleStatus(status) === "ACCEPTED";
}

export function isActiveLifecycleStatus(status?: string | null) {
  return normalizeLifecycleStatus(status) === "ACTIVE";
}

export function isCompletedLifecycleStatus(status?: string | null) {
  return normalizeLifecycleStatus(status) === "COMPLETED";
}

export function sumLifecycleCounts(counts?: Partial<LifecycleCounts> | null) {
  return LIFECYCLE_ORDER.reduce(
    (sum, status) => sum + Number(counts?.[status] ?? 0),
    0,
  );
}
