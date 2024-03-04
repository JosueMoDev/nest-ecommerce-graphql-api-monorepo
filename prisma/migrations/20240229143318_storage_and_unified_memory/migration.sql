/*
  Warnings:

  - The primary key for the `StorageOnChip` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UnifiedMemoryOnChip` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `id` was added to the `StorageOnChip` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `UnifiedMemoryOnChip` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "StorageOnChip" DROP CONSTRAINT "StorageOnChip_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "StorageOnChip_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "UnifiedMemoryOnChip" DROP CONSTRAINT "UnifiedMemoryOnChip_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "UnifiedMemoryOnChip_pkey" PRIMARY KEY ("id");
