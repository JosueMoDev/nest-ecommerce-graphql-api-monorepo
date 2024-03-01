/*
  Warnings:

  - You are about to drop the column `productDetails` on the `OrderItem` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[productDetailsId]` on the table `OrderItem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `productDetailsId` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "productDetails",
ADD COLUMN     "productDetailsId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ProductDetailsOnItem" (
    "id" TEXT NOT NULL,
    "storageOnChipId" TEXT,
    "unifiedMemoryOnChipId" TEXT,
    "configOnChipId" TEXT,

    CONSTRAINT "ProductDetailsOnItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OrderItem_productDetailsId_key" ON "OrderItem"("productDetailsId");

-- AddForeignKey
ALTER TABLE "ProductDetailsOnItem" ADD CONSTRAINT "ProductDetailsOnItem_storageOnChipId_fkey" FOREIGN KEY ("storageOnChipId") REFERENCES "StorageOnChip"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductDetailsOnItem" ADD CONSTRAINT "ProductDetailsOnItem_unifiedMemoryOnChipId_fkey" FOREIGN KEY ("unifiedMemoryOnChipId") REFERENCES "UnifiedMemoryOnChip"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductDetailsOnItem" ADD CONSTRAINT "ProductDetailsOnItem_configOnChipId_fkey" FOREIGN KEY ("configOnChipId") REFERENCES "ConfigOnChip"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_productDetailsId_fkey" FOREIGN KEY ("productDetailsId") REFERENCES "ProductDetailsOnItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
