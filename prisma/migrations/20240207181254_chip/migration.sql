/*
  Warnings:

  - Changed the type of `capacity` on the `Storage` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Storage" DROP COLUMN "capacity",
ADD COLUMN     "capacity" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "CPU" (
    "id" TEXT NOT NULL,
    "cores" INTEGER NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "CPU_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GPU" (
    "id" TEXT NOT NULL,
    "cores" INTEGER NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "GPU_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnifiedMemory" (
    "id" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "UnifiedMemory_pkey" PRIMARY KEY ("id")
);
