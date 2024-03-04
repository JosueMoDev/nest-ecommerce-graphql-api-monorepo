-- CreateTable
CREATE TABLE "CPUOnChip" (
    "chipId" TEXT NOT NULL,
    "cpuId" TEXT NOT NULL,

    CONSTRAINT "CPUOnChip_pkey" PRIMARY KEY ("cpuId","chipId")
);

-- CreateTable
CREATE TABLE "GPUOnChip" (
    "chipId" TEXT NOT NULL,
    "gpuId" TEXT NOT NULL,

    CONSTRAINT "GPUOnChip_pkey" PRIMARY KEY ("gpuId","chipId")
);

-- CreateTable
CREATE TABLE "UnifiedMemoryOnChip" (
    "chipId" TEXT NOT NULL,
    "undefinedMemoryId" TEXT NOT NULL,

    CONSTRAINT "UnifiedMemoryOnChip_pkey" PRIMARY KEY ("undefinedMemoryId","chipId")
);

-- AddForeignKey
ALTER TABLE "CPUOnChip" ADD CONSTRAINT "CPUOnChip_chipId_fkey" FOREIGN KEY ("chipId") REFERENCES "Chip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CPUOnChip" ADD CONSTRAINT "CPUOnChip_cpuId_fkey" FOREIGN KEY ("cpuId") REFERENCES "CPU"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GPUOnChip" ADD CONSTRAINT "GPUOnChip_chipId_fkey" FOREIGN KEY ("chipId") REFERENCES "Chip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GPUOnChip" ADD CONSTRAINT "GPUOnChip_gpuId_fkey" FOREIGN KEY ("gpuId") REFERENCES "GPU"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnifiedMemoryOnChip" ADD CONSTRAINT "UnifiedMemoryOnChip_chipId_fkey" FOREIGN KEY ("chipId") REFERENCES "Chip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnifiedMemoryOnChip" ADD CONSTRAINT "UnifiedMemoryOnChip_undefinedMemoryId_fkey" FOREIGN KEY ("undefinedMemoryId") REFERENCES "UnifiedMemory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
