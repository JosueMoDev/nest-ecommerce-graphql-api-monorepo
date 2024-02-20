/*
  Warnings:

  - The primary key for the `UnifiedMemoryOnChip` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `undefinedMemoryId` on the `UnifiedMemoryOnChip` table. All the data in the column will be lost.
  - Added the required column `unifiedMemoryId` to the `UnifiedMemoryOnChip` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UnifiedMemoryOnChip" DROP CONSTRAINT "UnifiedMemoryOnChip_undefinedMemoryId_fkey";

-- AlterTable
ALTER TABLE "UnifiedMemoryOnChip" DROP CONSTRAINT "UnifiedMemoryOnChip_pkey",
DROP COLUMN "undefinedMemoryId",
ADD COLUMN     "unifiedMemoryId" TEXT NOT NULL,
ADD CONSTRAINT "UnifiedMemoryOnChip_pkey" PRIMARY KEY ("unifiedMemoryId", "chipId");

-- AddForeignKey
ALTER TABLE "UnifiedMemoryOnChip" ADD CONSTRAINT "UnifiedMemoryOnChip_unifiedMemoryId_fkey" FOREIGN KEY ("unifiedMemoryId") REFERENCES "UnifiedMemory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
