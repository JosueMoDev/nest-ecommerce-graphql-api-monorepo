/*
  Warnings:

  - You are about to drop the column `productDetailsId` on the `OrderItem` table. All the data in the column will be lost.
  - Added the required column `OrderItemId` to the `ProductDetailsOnItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_productDetailsId_fkey";

-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "productDetailsId";

-- AlterTable
ALTER TABLE "ProductDetailsOnItem" ADD COLUMN     "OrderItemId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ProductDetailsOnItem" ADD CONSTRAINT "ProductDetailsOnItem_OrderItemId_fkey" FOREIGN KEY ("OrderItemId") REFERENCES "OrderItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
