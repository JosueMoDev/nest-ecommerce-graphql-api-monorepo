/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Chip` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Chip` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chip" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Chip_name_key" ON "Chip"("name");
