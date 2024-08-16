import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { Auth } from '../auth/entities/auth.entity';
import { CreateUserUseCase } from './use-cases/create-user.use-case';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Mutation(() => Auth, { description: 'Sign up new user' })
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.createUserUseCase.execute({ createUserInput });
  }
}
