import { ObjectType, Field, Int, HideField } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  email!: string;

  @HideField()
  password!: string;
}
