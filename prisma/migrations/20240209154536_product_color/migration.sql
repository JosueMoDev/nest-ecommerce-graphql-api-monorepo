/*
  Warnings:

  - You are about to drop the `ProductColor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ProductColor";

-- CreateTable
CREATE TABLE "Color" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "hexadecimalColor" TEXT NOT NULL,

    CONSTRAINT "Color_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ColorOnProduct" (
    "productId" TEXT NOT NULL,
    "colorId" TEXT NOT NULL,
    "stockerByColor" INTEGER NOT NULL,

    CONSTRAINT "ColorOnProduct_pkey" PRIMARY KEY ("productId","colorId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Color_hexadecimalColor_key" ON "Color"("hexadecimalColor");

-- AddForeignKey
ALTER TABLE "ColorOnProduct" ADD CONSTRAINT "ColorOnProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ColorOnProduct" ADD CONSTRAINT "ColorOnProduct_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "Color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
