/*
  Warnings:

  - Added the required column `capacityOn` to the `Storage` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CapacityOn" AS ENUM ('GB', 'TB');

-- AlterTable
ALTER TABLE "Storage" ADD COLUMN     "capacityOn" "CapacityOn" NOT NULL;
