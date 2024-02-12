import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';
import { NeuralEngine } from '@prisma/client';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const prisma = new PrismaService();
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
  //     subCategoryId: 'de222f13-0f32-4cff-86c1-04b8d14d1f14',
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
  //         // angularSensor: {
  //         //   megaPixels: 12,
  //         //   millimeters: 1.8,
  //         // },
  //       },
  //       power: {
  //         batteryLife: {
  //           capacity: '3650 mAh',
  //           displayOn: '24h',
  //         },
  //         wiredCharge: {
  //           carger: '30 wts',
  //           typeWired: 'type C',
  //           // technology: 'thunderbolt 4',
  //         },
  //       },
  //       display: {
  //         size: '6.1 inches',
  //         displayTechnology: {
  //           panelType: 'Amoled',
  //           // tipe: 'LTPO',
  //           name: 'Super Retina XDR display',
  //           allwaysOn: false,
  //           dinamicIsland: true,
  //           materials: 'Ceramic Shild',
  //           proMotion: true,
  //           hz: 60,
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

  // const r = await prisma.subCategory.create({
  //   data: {
  //     name: 'iPhone 15 Pro',
  //     slug: 'iphone-15-pro',
  //     gender: 'PHONE',
  //     categoryId: '88724a15-163e-4c30-aad0-a7b14f9cb672',
  //   },
  // });

  // const r = await prisma.product.create({
  //   data: {
  //     name: 'Macbook Pro',
  //     description: 'Disegned By Apple in California',
  //     slug: 'macbook-pro-m1-12gb',
  //     price: 1299,
  //     chipId: '80d0f268-fd9a-42ce-aff7-87ab2eec7497',
  //     subCategoryId: '535479ea-680b-4988-95ae-f82662c2ea24',
  //     techSpecsOnProductId: '1ecf60fd-e50c-497e-8aca-4a075f0af141',
  //   },
  // });
  const r = await prisma.product.update({
    where: {
      id: 'bf309ba1-b3b1-4e48-9543-ee5f270bae2c',
    },
    data: {
      ColorOnProduct: {
        create: [
          {
            colorId: '44d0b00d-6582-40f4-b76d-cd729eeaac16',
            stockByColor: 20000,
          },
          // {
          //   colorId: '65da0776-ea99-4849-8a7b-a29316fa0bd7',
          //   stockByColor: 2300,
          // },
        ],
      },
      productPicture: {
        create: [
          {
            url: 'https://store.storeimages.cdn-apple.com/slug-color-1.jpg',
            PictureByColorOnProduct: {
              create: {
                colorProductId: '44d0b00d-6582-40f4-b76d-cd729eeaac16',
              },
            },
          },
          {
            url: 'https://store.storeimages.cdn-apple.com/slug-color-1.jpg',
            PictureByColorOnProduct: {
              create: {
                colorProductId: '44d0b00d-6582-40f4-b76d-cd729eeaac16',
              },
            },
          },
          {
            url: 'https://store.storeimages.cdn-apple.com/slug-color-1.jpg',
            PictureByColorOnProduct: {
              create: {
                colorProductId: '44d0b00d-6582-40f4-b76d-cd729eeaac16',
              },
            },
          },
        ],
      },
    },
  });

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

  // const r = await prisma.chip.create({
  //   data: {
  //     neuralEngine: [NeuralEngine.SixTeenCores],
  //     chipFamilyId: 'c2e6100c-afc1-4aaa-b169-bf1842d11140',
  //     storage: {
  //       create: [
  //         { storageId: '00786d15-76bd-4884-b862-a040f1246339' },
  //         { storageId: '6ce28b1d-721c-49db-aa20-0f2883c4d364' },
  //         { storageId: '9a110c4c-950d-4fb9-813e-0370509cebe2' },
  //       ],
  //     },
  //     Cpu: {
  //       create: [{ cpuId: 'c848e24d-b431-4364-82c2-86aa66c82f99' }],
  //     },
  //     Gpu: {
  //       create: [{ gpuId: '77766d75-be41-40ad-8467-b7fa1995f707' }],
  //     },
  //     undefinedMemory: {
  //       create: [{ undefinedMemoryId: '2af3d375-a0ea-4e5b-b7f6-99e67522e002' }],
  //     },
  //   },
  // });

  // const r = await prisma.color.create({
  //   data: {
  //     name: 'Silver',
  //     hexadecimalColor: '#CCD1D1 ',
  //   },
  // });

  console.log(r);
}
bootstrap();
