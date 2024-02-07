import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { PrismaService } from './prisma.service';
// import { NeuralEngine } from '@prisma/client';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  // const prisma = new PrismaService();
  // const r = await prisma.chip.create({
  //   data: {
  //     neuralEngine: [NeuralEngine.SixTeenCores],
  //     chipFamilyId: '8245db8e-4ee1-48b2-9186-2f9bccfe4cdc',
  //     storage: {
  //       create: [
  //         {
  //           storageId: '00c8d73c-3f3d-45ba-bfbb-ab858579d68a',
  //         },
  //         {
  //           storageId: 'b898f4f4-82be-4587-adc9-8cf73f742f53',
  //         },
  //         {
  //           storageId: 'b898f4f4-82be-4587-adc9-8cf73f742f53',
  //         },
  //       ],
  //     },
  //     undefinedMemory: {
  //       create: [
  //         {
  //           undefinedMemoryId: 'a6920640-c483-423d-baf3-e46c92694872',
  //         },
  //         {
  //           undefinedMemoryId: 'd0ed1079-9977-4a1a-8f1e-5e4ba93d2f27',
  //         },
  //         {
  //           undefinedMemoryId: 'fb04f12e-4031-4003-89d9-2190a8a27e90',
  //         },
  //       ],
  //     },
  //     Gpu: {
  //       create: [
  //         {
  //           gpuId: '031be310-bbc0-43d7-9832-15a3fc2cc4ba',
  //         },
  //       ],
  //     },
  //     Cpu: {
  //       create: [
  //         {
  //           cpuId: '0f99c725-7a0f-4683-a3ff-48aa26caa562',
  //         },
  //         {
  //           cpuId: '0139a0f4-ebaf-4eea-994f-9029b6bc86a6',
  //         },
  //       ],
  //     },
  //   },
  // });

  // console.log(r);
}
bootstrap();
