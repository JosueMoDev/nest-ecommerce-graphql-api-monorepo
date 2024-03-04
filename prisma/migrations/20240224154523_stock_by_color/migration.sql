/*
  Warnings:

  - You are about to drop the column `stockByColor` on the `StockByColor` table. All the data in the column will be lost.
  - Added the required column `stock` to the `StockByColor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StockByColor" DROP COLUMN "stockByColor",
ADD COLUMN     "stock" INTEGER NOT NULL;
