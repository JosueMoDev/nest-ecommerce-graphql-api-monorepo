/*
  Warnings:

  - Added the required column `price` to the `CpuOnChip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `GpuOnChip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `StorageOnChip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `UnifiedMemoryOnChip` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CpuOnChip" ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "GpuOnChip" ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "StorageOnChip" ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "UnifiedMemoryOnChip" ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;
