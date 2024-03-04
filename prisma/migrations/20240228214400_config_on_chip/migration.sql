/*
  Warnings:

  - You are about to drop the column `neuralEngine` on the `Chip` table. All the data in the column will be lost.
  - You are about to drop the `CpuOnChip` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GpuOnChip` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CpuOnChip" DROP CONSTRAINT "CpuOnChip_chipId_fkey";

-- DropForeignKey
ALTER TABLE "CpuOnChip" DROP CONSTRAINT "CpuOnChip_cpuId_fkey";

-- DropForeignKey
ALTER TABLE "GpuOnChip" DROP CONSTRAINT "GpuOnChip_chipId_fkey";

-- DropForeignKey
ALTER TABLE "GpuOnChip" DROP CONSTRAINT "GpuOnChip_gpuId_fkey";

-- AlterTable
ALTER TABLE "Chip" DROP COLUMN "neuralEngine";

-- DropTable
DROP TABLE "CpuOnChip";

-- DropTable
DROP TABLE "GpuOnChip";

-- CreateTable
CREATE TABLE "ConfigOnChip" (
    "chipId" TEXT NOT NULL,
    "neuralEngine" "NeuralEngine" NOT NULL,
    "gpuId" TEXT NOT NULL,
    "cpuId" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ConfigOnChip_pkey" PRIMARY KEY ("gpuId","chipId")
);

-- AddForeignKey
ALTER TABLE "ConfigOnChip" ADD CONSTRAINT "ConfigOnChip_chipId_fkey" FOREIGN KEY ("chipId") REFERENCES "Chip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConfigOnChip" ADD CONSTRAINT "ConfigOnChip_gpuId_fkey" FOREIGN KEY ("gpuId") REFERENCES "Gpu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConfigOnChip" ADD CONSTRAINT "ConfigOnChip_cpuId_fkey" FOREIGN KEY ("cpuId") REFERENCES "Cpu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
