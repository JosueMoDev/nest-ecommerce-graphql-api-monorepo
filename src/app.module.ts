import { join } from 'path';
import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { PrismaService } from './prisma.service';

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
          dateScalarMode: 'timestamp',
        },
        playground: false,
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
        // TODO implement -> context() {},
      }),
    }),
    AuthenticationModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
