-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CLIENT', 'USER', 'SUPERUSER');

-- CreateEnum
CREATE TYPE "NeuralEngine" AS ENUM ('SixTeenCores', 'ThirtyCores');

-- CreateEnum
CREATE TYPE "CapacityOn" AS ENUM ('GB', 'TB');

-- CreateEnum
CREATE TYPE "ChipFamilyName" AS ENUM ('M1', 'M2', 'M3', 'S8', 'S9', 'A15', 'A16', 'A17');

-- CreateEnum
CREATE TYPE "ChipGama" AS ENUM ('BASE', 'PRO', 'BIONIC', 'MAX', 'ULTRA');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('DISPLAY', 'LAPTOP', 'DESKTOP', 'PHONE', 'TABLET', 'WATCH', 'AUDIO', 'ACCESSORY', 'VISION');

-- CreateEnum
CREATE TYPE "CategoryName" AS ENUM ('IPHONE', 'IPAD', 'WATCH', 'MAC', 'VISION', 'AIRPODS', 'TVHOME', 'ACCESSORIES');

-- CreateTable
CREATE TABLE "Cpu" (
    "id" TEXT NOT NULL,
    "cores" INTEGER NOT NULL,

    CONSTRAINT "Cpu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gpu" (
    "id" TEXT NOT NULL,
    "cores" INTEGER NOT NULL,

    CONSTRAINT "Gpu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConfigOnChip" (
    "id" TEXT NOT NULL,
    "chipId" TEXT NOT NULL,
    "neuralEngine" "NeuralEngine" NOT NULL,
    "gpuId" TEXT NOT NULL,
    "cpuId" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ConfigOnChip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnifiedMemory" (
    "id" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,

    CONSTRAINT "UnifiedMemory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnifiedMemoryOnChip" (
    "id" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "chipId" TEXT NOT NULL,
    "unifiedMemoryId" TEXT NOT NULL,

    CONSTRAINT "UnifiedMemoryOnChip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Storage" (
    "id" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "capacityOn" "CapacityOn" NOT NULL,

    CONSTRAINT "Storage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorageOnChip" (
    "id" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "chipId" TEXT NOT NULL,
    "storageId" TEXT NOT NULL,

    CONSTRAINT "StorageOnChip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chip" (
    "id" TEXT NOT NULL,
    "chipFamilyName" "ChipFamilyName" NOT NULL,
    "name" TEXT NOT NULL,
    "gama" "ChipGama" NOT NULL,

    CONSTRAINT "Chip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" "CategoryName" NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "SubCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TechSpecsOnProduct" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "techSpecs" JSONB,
    "subCategoryId" TEXT NOT NULL,

    CONSTRAINT "TechSpecsOnProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "release" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "chipId" TEXT,
    "subCategoryId" TEXT NOT NULL,
    "techSpecsOnProductId" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Color" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "hexadecimalColor" TEXT NOT NULL,
    "release" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Color_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StockByColor" (
    "id" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "productId" TEXT NOT NULL,
    "colorId" TEXT NOT NULL,

    CONSTRAINT "StockByColor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductPicture" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "colorId" TEXT NOT NULL,

    CONSTRAINT "ProductPicture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'CLIENT',
    "picture" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShippingAddress" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "address2" TEXT,
    "postalCode" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ShippingAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductDetailsOnItem" (
    "id" TEXT NOT NULL,
    "storageOnChipId" TEXT,
    "unifiedMemoryOnChipId" TEXT,
    "configOnChipId" TEXT,
    "orderItemId" TEXT NOT NULL,

    CONSTRAINT "ProductDetailsOnItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "orderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "subTotal" DOUBLE PRECISION NOT NULL,
    "tax" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "totalOfItems" INTEGER NOT NULL,
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "paidAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "transactionId" TEXT,
    "userId" TEXT NOT NULL,
    "shippingAddressId" TEXT,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Storage_capacity_key" ON "Storage"("capacity");

-- CreateIndex
CREATE UNIQUE INDEX "Chip_name_key" ON "Chip"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SubCategory_slug_key" ON "SubCategory"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "TechSpecsOnProduct_name_key" ON "TechSpecsOnProduct"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Product_techSpecsOnProductId_key" ON "Product"("techSpecsOnProductId");

-- CreateIndex
CREATE UNIQUE INDEX "Color_hexadecimalColor_key" ON "Color"("hexadecimalColor");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ProductDetailsOnItem_orderItemId_key" ON "ProductDetailsOnItem"("orderItemId");

-- AddForeignKey
ALTER TABLE "ConfigOnChip" ADD CONSTRAINT "ConfigOnChip_chipId_fkey" FOREIGN KEY ("chipId") REFERENCES "Chip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConfigOnChip" ADD CONSTRAINT "ConfigOnChip_gpuId_fkey" FOREIGN KEY ("gpuId") REFERENCES "Gpu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConfigOnChip" ADD CONSTRAINT "ConfigOnChip_cpuId_fkey" FOREIGN KEY ("cpuId") REFERENCES "Cpu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnifiedMemoryOnChip" ADD CONSTRAINT "UnifiedMemoryOnChip_chipId_fkey" FOREIGN KEY ("chipId") REFERENCES "Chip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnifiedMemoryOnChip" ADD CONSTRAINT "UnifiedMemoryOnChip_unifiedMemoryId_fkey" FOREIGN KEY ("unifiedMemoryId") REFERENCES "UnifiedMemory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorageOnChip" ADD CONSTRAINT "StorageOnChip_chipId_fkey" FOREIGN KEY ("chipId") REFERENCES "Chip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorageOnChip" ADD CONSTRAINT "StorageOnChip_storageId_fkey" FOREIGN KEY ("storageId") REFERENCES "Storage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubCategory" ADD CONSTRAINT "SubCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechSpecsOnProduct" ADD CONSTRAINT "TechSpecsOnProduct_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES "SubCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_chipId_fkey" FOREIGN KEY ("chipId") REFERENCES "Chip"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES "SubCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_techSpecsOnProductId_fkey" FOREIGN KEY ("techSpecsOnProductId") REFERENCES "TechSpecsOnProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StockByColor" ADD CONSTRAINT "StockByColor_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StockByColor" ADD CONSTRAINT "StockByColor_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "Color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductPicture" ADD CONSTRAINT "ProductPicture_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductPicture" ADD CONSTRAINT "ProductPicture_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "Color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShippingAddress" ADD CONSTRAINT "ShippingAddress_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShippingAddress" ADD CONSTRAINT "ShippingAddress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductDetailsOnItem" ADD CONSTRAINT "ProductDetailsOnItem_storageOnChipId_fkey" FOREIGN KEY ("storageOnChipId") REFERENCES "StorageOnChip"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductDetailsOnItem" ADD CONSTRAINT "ProductDetailsOnItem_unifiedMemoryOnChipId_fkey" FOREIGN KEY ("unifiedMemoryOnChipId") REFERENCES "UnifiedMemoryOnChip"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductDetailsOnItem" ADD CONSTRAINT "ProductDetailsOnItem_configOnChipId_fkey" FOREIGN KEY ("configOnChipId") REFERENCES "ConfigOnChip"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductDetailsOnItem" ADD CONSTRAINT "ProductDetailsOnItem_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "OrderItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_shippingAddressId_fkey" FOREIGN KEY ("shippingAddressId") REFERENCES "ShippingAddress"("id") ON DELETE SET NULL ON UPDATE CASCADE;
