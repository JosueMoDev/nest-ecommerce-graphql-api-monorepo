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
  //     name: 'Macbook Pro M1',
  //     subCategoryId: 'b8b2de7d-2ea6-4884-aae6-890f59eec5a0',
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
  //     name: 'Macbook Air M1',
  //     description: 'Disegned By Apple in California',
  //     slug: 'macbook-air-m1',
  //     price: 1199,
  //     chipId: '9a1fdadf-c090-4521-9458-b9bf3ea297b8',
  //     subCategoryId: '811ef79d-0d8c-4aaa-99de-eed2460d0f6b',
  //     techSpecsOnProductId: '3ff2a837-6980-4c32-913e-290743d11c65',
  //   },
  // });
  // const r = await prisma.product.update({
  //   where: {
  //     id: '9c782399-75d5-452a-b0cf-4ff99f2567f9',
  //   },
  //   data: {
  //     ColorOnProduct: {
  //       create: [
  //         {
  //           colorId: '88fe635b-da72-4565-83a8-df5718248372',
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
  //               colorProductId: '88fe635b-da72-4565-83a8-df5718248372',
  //             },
  //           },
  //         },
  //         {
  //           url: 'https://store.storeimages.cdn-apple.com/slug-color-2.jpg',
  //           PictureByColorOnProduct: {
  //             create: {
  //               colorProductId: '88fe635b-da72-4565-83a8-df5718248372',
  //             },
  //           },
  //         },
  //         {
  //           url: 'https://store.storeimages.cdn-apple.com/slug-color-3.jpg',
  //           PictureByColorOnProduct: {
  //             create: {
  //               colorProductId: '88fe635b-da72-4565-83a8-df5718248372',
  //             },
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });

  // const r = await prisma.product.findUnique({
  //   where: {
  //     slug: 'macbook-pro-m1',
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
  //             price: true,
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
  //             price: true,
  //           },
  //         },
  //         Gpu: {
  //           select: {
  //             gpu: true,
  //             price: true,
  //           },
  //         },
  //         undefinedMemory: {
  //           select: {
  //             undefinedMemory: true,
  //             price: true,
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
  //                 hexadecimalColor: true,
  //                 name: true,
  //                 ColorOnProduct: {
  //                   select: {
  //                     stockByColor: true,
  //                     color: true,
  //                   },
  //                 },
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
  //     slug: 'macbook-air-m1',
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
  //                 capacityOn: true,
  //               }
  //             },
  //             price: true,
  //           }
  //         },
  //         undefinedMemory: {
  //           select: {
  //             undefinedMemory: {
  //               select: {
  //                 capacity: true,
  //               }
  //             },
  //             price: true,
  //           }
  //         },
  //         Cpu: {
  //           select: {
  //             cpu: {
  //               select: {
  //                 cores: true,
  //               }
  //             },
  //             price: true,
  //           }
  //         },
  //         Gpu: {
  //           select: {
  //             gpu: {
  //               select: {
  //                 cores: true,
  //               }
  //             },
  //             price: true
  //           }
  //         },
  //       }
  //     },
  //     // ColorOnProduct: {
  //     //   select: {
  //     //     stockByColor: true,
  //     //     color: {
  //     //       select: {
  //     //         name: true,
  //     //         hexadecimalColor: true,
  //     //         PictureByColorOnProduct: {
  //     //           include: {
  //     //             productPicture: {
  //     //               select: {
  //     //                 url: true,
  //     //                 productId: true
  //     //               }
  //     //             },
  //     //             colorProduct: {
  //     //               select: {
  //     //                 name: true,
  //     //               }
  //     //             }
  //     //           }
  //     //         }
  //     //       }
  //     //     },
  //     //   }
  //     // },
  //     ColorOnProduct: {
  //       select: {
  //         product: {
  //           select: {
  //             ColorOnProduct: {
  //               select:{
  //                stockByColor: true,
  //                 color: {
  //                   select: {
  //                     name: true,
  //                     hexadecimalColor: true,
                  
  //                   }
  //                 },
  //               }
  //             },
  //             productPicture: {
  //               select: {
  //                 url: true,
  //                 PictureByColorOnProduct: {
  //                   select: {
  //                     colorProduct: {
  //                       select: {
  //                         name: true,
  //                       }
  //                     }
  //                   }
  //                 }
  //               }
  //             },
  //           }
  //         },
          
  //       }
  //     }
  //   }
  // });

  // const photos = r.ColorOnProduct.map(({product}) => ({
    
  //   color: product.ColorOnProduct.map(({stockByColor, color}) =>({
  //     hexadecimalCode: color.hexadecimalColor,
  //     name: color.name,
  //     stock: stockByColor
  //   })),

  //   pictures: product.productPicture.map(({url, PictureByColorOnProduct})=>({
  //     url,
  //     color: PictureByColorOnProduct[0].colorProduct.name
  //   })),
    
  // }));

  // console.log(photos[0].pictures);

//   const r = await prisma.product.findMany({
//     where: {
//       subCategory: {
//         category: {
//           name: 'MAC'
//         }
//       }
//     },
//     select: {
//       name: true,
//       price: true,
//       slug: true,
//       ColorOnProduct: {
//         select: {
//           color: {
//             select: {
//               name: true,
//               hexadecimalColor: true,PictureByColorOnProduct: {
//                 select: {
//                   productPicture: {
//                     select: {
//                       url: true,
//                     }
//                   },
//                   colorProduct: {
//                     select: {
//                       name: true,
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       },
//       chip: {
//         select: {
//           chipFamily: {
//             select: {
//               chipFamilyName: true
//             }
//           }
//         }
//       }
//     }
//   })

// const r = await prisma.chip.create({
//   data: {
//     neuralEngine: [NeuralEngine.SixTeenCores],
//     chipFamilyId: '72491fd9-b2e3-4233-ab3f-f44ceb2d1863',
//     storage: {
//       create: [
//         {
//           storageId: '27138d1c-5cb0-48ca-a4e2-6df4debb41fe',
//           price: 0,
//         },
//         {
//           storageId: 'cb1057bd-0315-4058-bdf4-a1e2bdf20eab',
//           price: 200,
//         },
//         {
//           storageId: 'ad64f848-f1c4-4bfa-9504-c0edc3a43e58',
//           price: 400,
//         },
//       ],
//     },
//     undefinedMemory: {
//       create: [
//         { undefinedMemoryId: 'dbeb5b83-a1c0-4394-8f39-49f6e0681d97', price: 0 },
//         {
//           undefinedMemoryId: '7b85bb42-1242-476d-b06b-2c5c1e953982',
//           price: 200,
//         },
//       ],
//     },
//     Cpu: {
//       create: [{ cpuId: 'dd971b04-c774-4c48-8fca-9b2f3918a3f2', price: 0 }],
//     },
//     Gpu: {
//       create: [{ gpuId: 'bd762700-87fb-42d7-8cde-613566f9e5b2', price: 0 }],
//     },
//   },
// });

}
bootstrap();
