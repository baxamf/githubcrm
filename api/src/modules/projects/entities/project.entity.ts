import { ObjectType, Field, Int } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';

@ObjectType()
export class Project {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  owner!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  url!: string;

  @Field(() => Int, { nullable: false })
  stars!: number;

  @Field(() => Int, { nullable: false })
  forks!: number;

  @Field(() => Int, { nullable: false })
  issues!: number;

  @Field(() => GraphQLBigInt, { nullable: false })
  createdAt!: bigint;
}
