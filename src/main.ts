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
  //     name: 'Macbook Pro M3',
  //     subCategoryId: 'a7ee22b3-63e1-48c2-b930-e0f66f97ab7a',
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
  //     name: 'Macbook Pro M3',
  //     description: 'Disegned By Apple in California',
  //     slug: 'macbook-pro-m3',
  //     price: 1799,
  //     chipId: 'afa98c42-7528-4ab2-adce-f1d9a170fbfe',
  //     subCategoryId: 'a7ee22b3-63e1-48c2-b930-e0f66f97ab7a',
  //     techSpecsOnProductId: 'cfa845fa-8e32-4024-8adf-c2bd58fefcd6',
  //   },
  // });
  // const r = await prisma.product.update({
  //   where: {
  //     id: 'c8e39921-f139-4773-8f2e-2ac5ac7feafb',
  //   },
  //   data: {
  //     ColorOnProduct: {
  //       create: [
  //         {
  //           colorId: 'a153bcde-564d-4af0-8371-d423fad591da',
  //           stockByColor: 50000,
  //         },
  //         // {
  //         //   colorId: '65da0776-ea99-4849-8a7b-a29316fa0bd7',
  //         //   stockByColor: 2300,
  //         // },
  //       ],
  //     },
  //     productPicture: {
  //       create: [
  //         {
  //           url: 'https://store.storeimages.cdn-apple.com/slug-color-1.jpg',
  //           PictureByColorOnProduct: {
  //             create: {
  //               colorProductId: 'a153bcde-564d-4af0-8371-d423fad591da',
  //             },
  //           },
  //         },
  //         {
  //           url: 'https://store.storeimages.cdn-apple.com/slug-color-2.jpg',
  //           PictureByColorOnProduct: {
  //             create: {
  //               colorProductId: 'a153bcde-564d-4af0-8371-d423fad591da',
  //             },
  //           },
  //         },
  //         {
  //           url: 'https://store.storeimages.cdn-apple.com/slug-color-3.jpg',
  //           PictureByColorOnProduct: {
  //             create: {
  //               colorProductId: 'a153bcde-564d-4af0-8371-d423fad591da',
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

  // const r = await prisma.chip.create({
  //   data: {
  //     neuralEngine: [NeuralEngine.SixTeenCores],
  //     chipFamilyId: '9653e517-6053-4f1f-a6df-1129831ba036',
  //     storage: {
  //       create: [
  //         { storageId: 'c842ab6d-2c62-4086-bfbe-9dd806c6b500' },
  //         { storageId: '67386350-c58c-4763-a3db-5f069c5abad7' },
  //         { storageId: 'a49f48c4-f2df-4689-9745-25379bb45358' },
  //       ],
  //     },
  //     Cpu: {
  //       create: [
  //         { cpuId: '29a6c35a-fbbe-479c-84a6-f0d009e9cd26' },
  //         { cpuId: '39c5589f-f8ea-4776-a43f-62089834e70e' },
  //       ],
  //     },
  //     Gpu: {
  //       create: [{ gpuId: 'b01d779a-1b3e-48f0-baf8-cfae33a91a4e' }],
  //     },
  //     undefinedMemory: {
  //       create: [
  //         { undefinedMemoryId: 'c7107b4a-b57f-4e62-8ef6-0924a05083ce' },
  //         { undefinedMemoryId: '7e54d82c-1581-4db5-afd2-5106d2bd38f6' },
  //       ],
  //     },
  //   },
  // });

  // const r = await prisma.color.create({
  //   data: {
  //     name: 'Space Gray',
  //     hexadecimalColor: '#616A6B',
  //   },
  // });


  // const r = await prisma.product.findUnique({
  //   where: {
  //     slug: 'macbook-pro-m3',
  //   },
  //   select: {
  //     name: true,
  //     slug: true,
  //     price: true,
  //     chip: {
  //       include: {
  //         chipFamily: {
  //           select: {
  //             gama: true,
  //             chipFamilyName: true,
  //           }
  //         },
  //         storage: {
  //           select: {
  //             storage: {
  //               select: {
  //                 capacity: true,
  //                 capacityOn: true
  //               }
  //             }
  //           }
  //         },
  //         undefinedMemory: {
  //           select: {
  //             undefinedMemory: {
  //               select: {
  //                 capacity: true,
  //               }
  //             }
  //           }
  //         },
  //         Cpu: {
  //           select: {
  //             cpu: {
  //               select: {
  //                 cores: true,
  //               }
  //             }
  //           }
  //         },
  //         Gpu: {
  //           select: {
  //             gpu: {
  //               select: {
  //                 cores: true,
  //               }
  //             }
  //           }
  //         },
  //       }
  //     },
  //     ColorOnProduct: {
  //       select: {
  //         stockByColor: true,
  //         color: {
  //           select: {
  //             name: true,
  //             hexadecimalColor: true,
  //             PictureByColorOnProduct: {
  //               select: {
  //                 productPicture: {
  //                   select: {
  //                     url: true,
  //                   }
  //                 },
  //                 colorProduct: {
  //                   select: {
  //                     name: true,
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         },
  //       }
  //     },
  //   }
  // });

  // const photos = r.ColorOnProduct.map(({stockByColor, color}) => ({
  //   stoke: stockByColor,
  //   color: color.hexadecimalColor,
  //   colorName: color.name,
  //   pictures: color.PictureByColorOnProduct.map((picture) => ({
  //     url: picture.productPicture.url,
  //     color: picture.colorProduct.name,
  //   })),
  // }));

  // console.log(photos[0].pictures);
}
bootstrap();
