import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from './config/app.config';
import { redisConfig } from './config/redis.config';
import { CachingModule } from './modules/caching/caching.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ProjectsModule } from './modules/projects/projects.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, redisConfig],
    }),
    CachingModule,
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      context: ({ req, res }) => ({ req, res }),
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    AuthModule,
    UsersModule,
    ProjectsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
