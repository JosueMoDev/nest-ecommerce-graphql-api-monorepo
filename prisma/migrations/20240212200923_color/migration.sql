-- DropForeignKey
ALTER TABLE "PictureByColorOnProduct" DROP CONSTRAINT "PictureByColorOnProduct_colorProductId_fkey";

-- AddForeignKey
ALTER TABLE "PictureByColorOnProduct" ADD CONSTRAINT "PictureByColorOnProduct_colorProductId_fkey" FOREIGN KEY ("colorProductId") REFERENCES "Color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
