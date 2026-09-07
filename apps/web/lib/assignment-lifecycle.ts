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
    emoji: "🟥",
    color: "#F87171",
    textClass: "text-rose-600",
    bgClass: "bg-[#F87171]",
  },
  ACCEPTED: {
    label: "Accepted",
    shortLabel: "A",
    emoji: "🟨",
    color: "#FACC15",
    textClass: "text-yellow-600",
    bgClass: "bg-[#FACC15]",
  },
  ACTIVE: {
    label: "Active",
    shortLabel: "A",
    emoji: "🟩",
    color: "#4ADE00",
    textClass: "text-lime-600",
    bgClass: "bg-[#4ADE00]",
  },
  COMPLETED: {
    label: "Completed",
    shortLabel: "C",
    emoji: "🟩",
    color: "#16A34A",
    textClass: "text-green-700",
    bgClass: "bg-[#16A34A]",
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
