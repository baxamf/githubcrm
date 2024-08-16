import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { AppConfig } from './config/app.config';
import { ConfigName } from './config/config-names.enum';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: { credentials: true, origin: true },
  });

  const configService = app.get(ConfigService);
  const appConfig = configService.get<AppConfig>(ConfigName.APP);

  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());

  const logger = new Logger('APP');
  await app.listen(appConfig.port, () => {
    logger.log(
      `🚀 Server started successfully in ${appConfig.env} mode at port: ${appConfig.port}`,
    );
  });
}
bootstrap();
