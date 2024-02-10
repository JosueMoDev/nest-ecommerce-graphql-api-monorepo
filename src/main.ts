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

  // const r = await prisma.techSpecsOnProduct.create({
  //   data: {
  //     name: 'iPhone 15 Pro',
  //     subCategoryId: '3445e9d9-705a-4c09-b749-8550ba4588a0',
  //     techSpecs: {
  //       camera: {
  //         main: {
  //           megaPixels: 48,
  //           millimeters: 0.33,
  //         },
  //         telephoto: {
  //           megaPixels: 12,
  //           millimeters: 0.78,
  //         },
  //         angularSensor: {
  //           megaPixels: 12,
  //           millimeters: 1.8,
  //         },
  //       },
  //       power: {
  //         batteryLife: {
  //           capacity: '3650 mAh',
  //           displayOn: '24h',
  //         },
  //         wiredCharge: {
  //           carger: '30 wts',
  //           typeWired: 'type C',
  //           technology: 'thunderbolt 4',
  //         },
  //       },
  //       display: {
  //         size: '6.1 inches',
  //         displayTechnology: {
  //           panelType: 'Amoled',
  //           tipe: 'LTPO',
  //           name: 'Super Retina XDR display',
  //           allwaysOn: true,
  //           dinamicIsland: true,
  //           materials: 'Ceramic Shild',
  //           proMotion: true,
  //           hz: 120,
  //           hdr: true,
  //           nitsBrithness: 'to 1000 from 2000',
  //           resolutionDisplay: '2556-by-1179-pixel resolution at 460 ppi',
  //         },
  //       },
  //       sizeAndWeight: {
  //         height: {
  //           metric: 'inches',
  //           quantity: 5.77,
  //         },
  //         width: {
  //           metric: 'inches',
  //           quantity: 2.78,
  //         },
  //         depht: {
  //           metric: 'inches',
  //           quantity: 0.32,
  //         },
  //         weight: {
  //           metric: 'ounces',
  //           quantity: 6.6,
  //         },
  //       },
  //       conectivity: {
  //         celullar: '5g',
  //         wifi: 'wifi 6E',
  //       },
  //       secureAuthentication: 'face id',
  //     },
  //   },
  // });

  // const r = await prisma.product.create({
  //   data: {
  //     name: 'Iphone 15 pro',
  //     description: 'Disegned By Apple in California',
  //     slug: 'iphone-15-pro-a-17-128gb',
  //     price: 999,
  //     chipId: '417e9639-2c2c-4e2c-9fc8-7ee30c1caafd',
  //     subCategoryId: '3445e9d9-705a-4c09-b749-8550ba4588a0',
  //     techSpecsOnProductId: 'd7cef492-77ac-4698-afb3-e5bb378d74cf',
  //   },
  // });
  // const r = await prisma.product.update({
  //   where: {
  //     id: 'f0841369-71c6-4c99-8a23-223133010ec4',
  //   },
  //   data: {
  //     ColorOnProduct: {
  //       create: [
  //         {
  //           colorId: '11b0ee49-cec0-416a-948d-ecc9489ddee7',
  //           stockByColor: 1000,
  //         },
  //         {
  //           colorId: '2cad70b7-623c-4449-86ad-8b76c12c778a',
  //           stockByColor: 1500,
  //         },
  //         {
  //           colorId: '707c375c-17d3-4039-bd04-d1826a63c139',
  //           stockByColor: 500,
  //         },
  //         {
  //           colorId: '8ebf40e6-9597-4100-bf38-581945440f63',
  //           stockByColor: 2000,
  //         },
  //       ],
  //     },
  //     productPicture: {
  //       create: [
  //         {
  //           url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692846363993',
  //           PictureByColorOnProduct: {
  //             create: {
  //               colorProductId: '8ebf40e6-9597-4100-bf38-581945440f63',
  //             },
  //           },
  //         },
  //         {
  //           url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692846363991',
  //           PictureByColorOnProduct: {
  //             create: {
  //               colorProductId: '8ebf40e6-9597-4100-bf38-581945440f63',
  //             },
  //           },
  //         },
  //         {
  //           url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692846363992',
  //           PictureByColorOnProduct: {
  //             create: {
  //               colorProductId: '8ebf40e6-9597-4100-bf38-581945440f63',
  //             },
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });

  // const r = await prisma.product.findMany({
  //   where: {
  //     slug: 'iphone-15-pro-a-17-128gb',
  //   },
  //   select: {
  //     name: true,
  //     price: true,
  //     subCategory: {
  //       select: {
  //         name: true,
  //         gender: true,
  //         category: {
  //           select: {
  //             name: true,
  //           },
  //         },
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
  //       },
  //     },
  //     productPicture: {
  //       select: {
  //         PictureByColorOnProduct: {
  //           select: {
  //             productPicture: {
  //               select: {
  //                 url: true,
  //               },
  //             },
  //             colorProduct: {
  //               select: {
  //                 stockByColor: true,
  //                 color: true,
  //               },
  //             },
  //           },
  //         },
  //       },
  //     },
  //   },
  // });

  // console.log(r);
}
bootstrap();
