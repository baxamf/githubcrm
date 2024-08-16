import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [UsersResolver, CreateUserUseCase],
})
export class UsersModule {}
