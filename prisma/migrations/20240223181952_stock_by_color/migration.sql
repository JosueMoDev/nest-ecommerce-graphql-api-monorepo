/*
  Warnings:

  - You are about to drop the `ColorOnProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ColorOnProduct" DROP CONSTRAINT "ColorOnProduct_colorId_fkey";

-- DropForeignKey
ALTER TABLE "ColorOnProduct" DROP CONSTRAINT "ColorOnProduct_productId_fkey";

-- DropTable
DROP TABLE "ColorOnProduct";

-- CreateTable
CREATE TABLE "StockByColor" (
    "productId" TEXT NOT NULL,
    "colorId" TEXT NOT NULL,
    "stockByColor" INTEGER NOT NULL,

    CONSTRAINT "StockByColor_pkey" PRIMARY KEY ("productId","colorId")
);

-- AddForeignKey
ALTER TABLE "StockByColor" ADD CONSTRAINT "StockByColor_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StockByColor" ADD CONSTRAINT "StockByColor_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "Color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
