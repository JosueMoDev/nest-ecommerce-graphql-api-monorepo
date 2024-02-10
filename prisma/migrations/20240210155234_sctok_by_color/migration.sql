/*
  Warnings:

  - You are about to drop the column `stockerByColor` on the `ColorOnProduct` table. All the data in the column will be lost.
  - Added the required column `stockByColor` to the `ColorOnProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ColorOnProduct" DROP COLUMN "stockerByColor",
ADD COLUMN     "stockByColor" INTEGER NOT NULL;
