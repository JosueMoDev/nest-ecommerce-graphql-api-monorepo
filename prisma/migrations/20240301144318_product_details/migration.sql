/*
  Warnings:

  - A unique constraint covering the columns `[OrderItemId]` on the table `ProductDetailsOnItem` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ProductDetailsOnItem_OrderItemId_key" ON "ProductDetailsOnItem"("OrderItemId");
