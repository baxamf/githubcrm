import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { AuthService } from '../auth.service';
import { IUseCase } from 'src/common/interfaces/use-case';
import { Auth } from '../entities/auth.entity';

export class AuthenticateUserCommand {
  user: User;

  constructor(params: AuthenticateUserCommand) {
    Object.assign(this, params);
  }
}

@Injectable()
export class AuthenticateUserUseCase
  implements IUseCase<AuthenticateUserCommand, Auth>
{
  constructor(private readonly authService: AuthService) {}

  async execute({ user }: AuthenticateUserCommand) {
    const tokens = await this.authService.generateTokens(user);

    return { ...tokens, user };
  }
}
