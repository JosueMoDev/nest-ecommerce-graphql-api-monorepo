-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_chipId_fkey";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "chipId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_chipId_fkey" FOREIGN KEY ("chipId") REFERENCES "Chip"("id") ON DELETE SET NULL ON UPDATE CASCADE;
