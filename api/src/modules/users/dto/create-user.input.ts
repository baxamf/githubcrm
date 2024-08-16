import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsEmail()
  @IsNotEmpty()
  @Field(() => String, { nullable: false })
  email!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Field(() => String, {
    nullable: false,
    description: 'Password min length has to be 8 signs',
  })
  password!: string;
}
