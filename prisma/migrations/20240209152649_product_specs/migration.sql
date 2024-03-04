/*
  Warnings:

  - You are about to drop the `Color` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[techSpecsOnProductId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `techSpecsOnProductId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `ProductColor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "techSpecsOnProductId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProductColor" ADD COLUMN     "name" TEXT NOT NULL;

-- DropTable
DROP TABLE "Color";

-- CreateIndex
CREATE UNIQUE INDEX "Product_techSpecsOnProductId_key" ON "Product"("techSpecsOnProductId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_techSpecsOnProductId_fkey" FOREIGN KEY ("techSpecsOnProductId") REFERENCES "TechSpecsOnProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
