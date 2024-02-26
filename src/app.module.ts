import { join } from 'path';
import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';
import { ShippingAddressModule } from './shipping-address/shipping-address.module';
import { OrdersModule } from './orders/orders.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { SubCategoryModule } from './sub-category/sub-category.module';
import { ChipModule } from './chip/chip.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [],
      inject: [],
      useFactory: async () => ({
        buildSchemaOptions: {
          dateScalarMode: 'isoDate',
        },
        playground: false,
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        // sortSchema: true,
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
        // TODO implement -> context() {},
      }),
    }),
    AuthenticationModule,
    UsersModule,
    ShippingAddressModule,
    OrdersModule,
    ProductModule,
    CategoryModule,
    SubCategoryModule,
    ChipModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
