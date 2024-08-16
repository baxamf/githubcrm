import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { CreateUserInput } from '../dto/create-user.input';
import { hash } from 'bcrypt';
import { AuthenticateUserUseCase } from 'src/modules/auth/use-cases/authenticate-user.use-case';
import { Auth } from 'src/modules/auth/entities/auth.entity';
import { IUseCase } from 'src/common/interfaces/use-case';

export class CreateUserCommand {
  createUserInput: CreateUserInput;

  constructor(params: CreateUserCommand) {
    Object.assign(this, params);
  }
}

@Injectable()
export class CreateUserUseCase implements IUseCase<CreateUserCommand, Auth> {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authenticateUserUseCase: AuthenticateUserUseCase,
  ) {}

  async execute({ createUserInput }: CreateUserCommand) {
    const { password, email } = createUserInput;

    const hashedPass = await hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        email,
        password: hashedPass,
      },
    });

    return this.authenticateUserUseCase.execute({ user });
  }
}
