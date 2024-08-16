import { CacheModule, CacheModuleAsyncOptions } from '@nestjs/cache-manager';
import { Global, Logger, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-store';
import { ConfigName } from 'src/config/config-names.enum';
import { IRedisConfig } from 'src/config/redis.config';
import { CachingService } from './caching.service';

const RedisOptions: CacheModuleAsyncOptions = {
  isGlobal: true,
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => {
    const cfg = configService.get<IRedisConfig>(ConfigName.REDIS);
    const logger = new Logger('REDIS');

    try {
      const store = await redisStore({
        database: cfg.redisCacheDb,
        socket: {
          host: cfg.redisHost,
          port: cfg.redisPort,
        },
      });

      return {
        store,
      };
    } catch (error) {
      logger.error(error);
    }
  },
  inject: [ConfigService],
};

@Global()
@Module({
  imports: [CacheModule.registerAsync(RedisOptions)],
  providers: [CachingService],
  exports: [CachingService],
})
export class CachingModule {}
