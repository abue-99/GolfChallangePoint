ALTER TABLE "lesson_assignments"
ADD COLUMN "completedAt" TIMESTAMP(3);

ALTER TABLE "journey_template_assignments"
ADD COLUMN "completedAt" TIMESTAMP(3);

UPDATE "lesson_assignments"
SET "completedAt" = "updatedAt"
WHERE "status" = 'COMPLETED' AND "completedAt" IS NULL;

UPDATE "journey_template_assignments"
SET "completedAt" = "updatedAt"
WHERE "status" = 'COMPLETED' AND "completedAt" IS NULL;
