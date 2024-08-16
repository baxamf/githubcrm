import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ProjectInput {
  @Field(() => String, {
    description:
      'Repository path in format {owner}/{repo name} e.g. facebook/react',
  })
  repoName: string;
}
