/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `coach_player_links` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `lastLogin` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `passwordHash` on the `users` table. All the data in the column will be lost.
  - The `role` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `calendar_events` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `events` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `task_logs` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `email` to the `password_reset_tokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `player_profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `task_templates` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "coach_player_links" DROP CONSTRAINT "coach_player_links_coachId_fkey";

-- DropForeignKey
ALTER TABLE "player_profiles" DROP CONSTRAINT "player_profiles_userId_fkey";

-- DropIndex
DROP INDEX "player_profiles_userId_key";

-- AlterTable
ALTER TABLE "coach_player_links" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "password_reset_tokens" ADD COLUMN     "email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "player_profiles" ADD COLUMN     "handicap" DOUBLE PRECISION,
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "task_templates" ADD COLUMN     "content" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "firstName",
DROP COLUMN "lastLogin",
DROP COLUMN "lastName",
DROP COLUMN "passwordHash",
ADD COLUMN     "name" TEXT,
DROP COLUMN "role",
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'user';

-- DropTable
DROP TABLE "calendar_events";

-- DropTable
DROP TABLE "events";

-- DropTable
DROP TABLE "task_logs";

-- DropEnum
DROP TYPE "EventFormat";

-- DropEnum
DROP TYPE "EventStatus";

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "challenges" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "challenges_pkey" PRIMARY KEY ("id")
);
