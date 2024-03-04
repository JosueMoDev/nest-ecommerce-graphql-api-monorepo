/*
  Warnings:

  - You are about to drop the column `value` on the `Cpu` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Gpu` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Storage` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `UnifiedMemory` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "ChipGama" ADD VALUE 'BIONIC';

-- AlterTable
ALTER TABLE "Cpu" DROP COLUMN "value";

-- AlterTable
ALTER TABLE "Gpu" DROP COLUMN "value";

-- AlterTable
ALTER TABLE "Storage" DROP COLUMN "value";

-- AlterTable
ALTER TABLE "UnifiedMemory" DROP COLUMN "value";
