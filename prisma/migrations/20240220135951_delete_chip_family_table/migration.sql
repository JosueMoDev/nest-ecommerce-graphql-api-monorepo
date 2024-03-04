/*
  Warnings:

  - You are about to drop the column `chipFamilyId` on the `Chip` table. All the data in the column will be lost.
  - You are about to drop the `ChipFamily` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `chipFamilyName` to the `Chip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gama` to the `Chip` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Chip" DROP CONSTRAINT "Chip_chipFamilyId_fkey";

-- DropIndex
DROP INDEX "Chip_chipFamilyId_key";

-- AlterTable
ALTER TABLE "Chip" DROP COLUMN "chipFamilyId",
ADD COLUMN     "chipFamilyName" "ChipFamilyName" NOT NULL,
ADD COLUMN     "gama" "ChipGama" NOT NULL;

-- DropTable
DROP TABLE "ChipFamily";
