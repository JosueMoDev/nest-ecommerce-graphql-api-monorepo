/*
  Warnings:

  - A unique constraint covering the columns `[colorId]` on the table `ColorOnProduct` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "PictureByColorOnProduct" (
    "colorProductId" TEXT NOT NULL,
    "productPictureId" TEXT NOT NULL,

    CONSTRAINT "PictureByColorOnProduct_pkey" PRIMARY KEY ("colorProductId","productPictureId")
);

-- CreateIndex
CREATE UNIQUE INDEX "ColorOnProduct_colorId_key" ON "ColorOnProduct"("colorId");

-- AddForeignKey
ALTER TABLE "PictureByColorOnProduct" ADD CONSTRAINT "PictureByColorOnProduct_colorProductId_fkey" FOREIGN KEY ("colorProductId") REFERENCES "ColorOnProduct"("colorId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PictureByColorOnProduct" ADD CONSTRAINT "PictureByColorOnProduct_productPictureId_fkey" FOREIGN KEY ("productPictureId") REFERENCES "ProductPicture"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
