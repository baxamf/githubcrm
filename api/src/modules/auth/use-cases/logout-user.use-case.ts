import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { MessageResponse } from 'src/common/entities/message-response.entity';
import { IUseCase } from 'src/common/interfaces/use-case';
import { jwtRefreshTokenCacheKey } from 'src/modules/caching/cache.keys';
import { CachingService } from 'src/modules/caching/caching.service';

export class LogoutUserCommand {
  user: User;

  constructor(params: LogoutUserCommand) {
    Object.assign(this, params);
  }
}

@Injectable()
export class LogoutUserUseCase
  implements IUseCase<LogoutUserCommand, MessageResponse>
{
  constructor(private readonly cache: CachingService) {}

  async execute({ user }: LogoutUserCommand) {
    const cacheKey = jwtRefreshTokenCacheKey(user.id);

    await this.cache.removeToken(cacheKey);

    return { message: 'User logged out' };
  }
}
