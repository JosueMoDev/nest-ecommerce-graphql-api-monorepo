/*
  Warnings:

  - Changed the type of `name` on the `Category` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "CategoryName" AS ENUM ('IPHONE', 'IPAD', 'WATCH', 'MAC', 'VISION', 'AIRPODS', 'TVHOME', 'ACCESSORIES');

-- AlterEnum
ALTER TYPE "Gender" ADD VALUE 'VISION';

-- DropIndex
DROP INDEX "Category_name_key";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "name",
ADD COLUMN     "name" "CategoryName" NOT NULL;
