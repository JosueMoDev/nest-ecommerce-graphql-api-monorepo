/*
  Warnings:

  - You are about to drop the `PictureByColorOnProduct` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `colorId` to the `ProductPicture` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PictureByColorOnProduct" DROP CONSTRAINT "PictureByColorOnProduct_colorProductId_fkey";

-- DropForeignKey
ALTER TABLE "PictureByColorOnProduct" DROP CONSTRAINT "PictureByColorOnProduct_productPictureId_fkey";

-- AlterTable
ALTER TABLE "ProductPicture" ADD COLUMN     "colorId" TEXT NOT NULL;

-- DropTable
DROP TABLE "PictureByColorOnProduct";

-- AddForeignKey
ALTER TABLE "ProductPicture" ADD CONSTRAINT "ProductPicture_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "Color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
