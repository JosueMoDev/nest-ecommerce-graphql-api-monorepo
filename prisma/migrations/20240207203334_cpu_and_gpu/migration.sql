/*
  Warnings:

  - You are about to drop the `CPU` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CPUOnChip` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GPU` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GPUOnChip` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CPUOnChip" DROP CONSTRAINT "CPUOnChip_chipId_fkey";

-- DropForeignKey
ALTER TABLE "CPUOnChip" DROP CONSTRAINT "CPUOnChip_cpuId_fkey";

-- DropForeignKey
ALTER TABLE "GPUOnChip" DROP CONSTRAINT "GPUOnChip_chipId_fkey";

-- DropForeignKey
ALTER TABLE "GPUOnChip" DROP CONSTRAINT "GPUOnChip_gpuId_fkey";

-- DropTable
DROP TABLE "CPU";

-- DropTable
DROP TABLE "CPUOnChip";

-- DropTable
DROP TABLE "GPU";

-- DropTable
DROP TABLE "GPUOnChip";

-- CreateTable
CREATE TABLE "Cpu" (
    "id" TEXT NOT NULL,
    "cores" INTEGER NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Cpu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CpuOnChip" (
    "chipId" TEXT NOT NULL,
    "cpuId" TEXT NOT NULL,

    CONSTRAINT "CpuOnChip_pkey" PRIMARY KEY ("cpuId","chipId")
);

-- CreateTable
CREATE TABLE "Gpu" (
    "id" TEXT NOT NULL,
    "cores" INTEGER NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Gpu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GpuOnChip" (
    "chipId" TEXT NOT NULL,
    "gpuId" TEXT NOT NULL,

    CONSTRAINT "GpuOnChip_pkey" PRIMARY KEY ("gpuId","chipId")
);

-- AddForeignKey
ALTER TABLE "CpuOnChip" ADD CONSTRAINT "CpuOnChip_chipId_fkey" FOREIGN KEY ("chipId") REFERENCES "Chip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CpuOnChip" ADD CONSTRAINT "CpuOnChip_cpuId_fkey" FOREIGN KEY ("cpuId") REFERENCES "Cpu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GpuOnChip" ADD CONSTRAINT "GpuOnChip_chipId_fkey" FOREIGN KEY ("chipId") REFERENCES "Chip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GpuOnChip" ADD CONSTRAINT "GpuOnChip_gpuId_fkey" FOREIGN KEY ("gpuId") REFERENCES "Gpu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
