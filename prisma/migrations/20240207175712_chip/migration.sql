/*
  Warnings:

  - The values [SexTeenCores] on the enum `NeuralEngine` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `name` on the `Chip` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[chipFamilyId]` on the table `Chip` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `chipFamilyId` to the `Chip` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ChipFamilyName" AS ENUM ('M1', 'M2', 'M3', 'S8', 'S9', 'A15', 'A16', 'A17');

-- CreateEnum
CREATE TYPE "ChipGama" AS ENUM ('BASE', 'PRO', 'MAX', 'ULTRA');

-- AlterEnum
BEGIN;
CREATE TYPE "NeuralEngine_new" AS ENUM ('SixTeenCores', 'ThirtyCores');
ALTER TABLE "Chip" ALTER COLUMN "neuralEngine" TYPE "NeuralEngine_new"[] USING ("neuralEngine"::text::"NeuralEngine_new"[]);
ALTER TYPE "NeuralEngine" RENAME TO "NeuralEngine_old";
ALTER TYPE "NeuralEngine_new" RENAME TO "NeuralEngine";
DROP TYPE "NeuralEngine_old";
COMMIT;

-- AlterTable
ALTER TABLE "Chip" DROP COLUMN "name",
ADD COLUMN     "chipFamilyId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ChipFamily" (
    "id" TEXT NOT NULL,
    "chipFamilyName" "ChipFamilyName" NOT NULL,
    "gama" "ChipGama" NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "ChipFamily_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Chip_chipFamilyId_key" ON "Chip"("chipFamilyId");

-- AddForeignKey
ALTER TABLE "Chip" ADD CONSTRAINT "Chip_chipFamilyId_fkey" FOREIGN KEY ("chipFamilyId") REFERENCES "ChipFamily"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
