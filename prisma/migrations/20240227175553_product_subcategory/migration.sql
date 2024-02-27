/*
  Warnings:

  - Made the column `chipId` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_chipId_fkey";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "chipId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_chipId_fkey" FOREIGN KEY ("chipId") REFERENCES "Chip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
