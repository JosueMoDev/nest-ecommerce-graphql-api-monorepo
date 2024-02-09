import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { PrismaService } from './prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  // const prisma = new PrismaService();
  // const r = await prisma.product.findMany({
  //   where: {
  //     subCategory: {
  //       categoryId: '377560c8-3d8f-44df-992f-58ef5aefcf4f',
  //     },
  //   },
  //   select: {
  //     name: true,
  //     description: true,
  //     price: true,
  //     slug: true,
  //     productPicture: true,
  //     subCategory: {
  //       select: {
  //         name: true,
  //         gender: true,
  //       },
  //     },
  //     chip: {
  //       select: {
  //         storage: {
  //           select: {
  //             storage: true,
  //           },
  //         },
  //         chipFamily: {
  //           select: {
  //             gama: true,
  //             chipFamilyName: true,
  //           },
  //         },
  //         Cpu: {
  //           select: {
  //             cpu: true,
  //           },
  //         },
  //         Gpu: {
  //           select: {
  //             gpu: true,
  //           },
  //         },
  //         undefinedMemory: {
  //           select: {
  //             undefinedMemory: true,
  //           },
  //         },
  //       },
  //     },
  //   },
  // });

  // console.log(r[0]);
}
bootstrap();
