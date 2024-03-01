/*
  Warnings:

  - You are about to drop the column `OrderItemId` on the `ProductDetailsOnItem` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[orderItemId]` on the table `ProductDetailsOnItem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `orderItemId` to the `ProductDetailsOnItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProductDetailsOnItem" DROP CONSTRAINT "ProductDetailsOnItem_OrderItemId_fkey";

-- DropIndex
DROP INDEX "ProductDetailsOnItem_OrderItemId_key";

-- AlterTable
ALTER TABLE "ProductDetailsOnItem" DROP COLUMN "OrderItemId",
ADD COLUMN     "orderItemId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ProductDetailsOnItem_orderItemId_key" ON "ProductDetailsOnItem"("orderItemId");

-- AddForeignKey
ALTER TABLE "ProductDetailsOnItem" ADD CONSTRAINT "ProductDetailsOnItem_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "OrderItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
