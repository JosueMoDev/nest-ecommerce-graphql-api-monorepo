/*
  Warnings:

  - The primary key for the `ProductPicture` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "ProductPicture" DROP CONSTRAINT "ProductPicture_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ProductPicture_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ProductPicture_id_seq";

-- CreateTable
CREATE TABLE "ProductColor" (
    "id" TEXT NOT NULL,
    "hexadecimalColor" TEXT NOT NULL,

    CONSTRAINT "ProductColor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductColor_hexadecimalColor_key" ON "ProductColor"("hexadecimalColor");
