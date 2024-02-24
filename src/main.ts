import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { PrismaService } from './prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: false,
    }),
  );
  await app.listen(3000);

  const prisma = new PrismaService();
  return await prisma.product.update({
    where: { id: '5598d21d4-cd45-4d8c-b7f2-7ffbe85d0908' },
    data: {
      productPicture: {
        create: {
          colorId: '5e8d4e1a-d08f-4be4-85e4-f7f8d79c1d30',
          url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-silver-gallery1-202310?wid=2000&hei=1537&fmt=jpeg&qlt=95&.v=1697311138987',
        },
      },
    },
  });
}
bootstrap();
