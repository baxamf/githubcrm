import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Project } from './entities/project.entity';
import { ProjectInput } from './dto/project.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from 'src/common/decorators/get-current-user.decorator';
import { AddProjectUseCase } from './use-cases/add-project.use-case';
import { GetUserProjectsUseCase } from './use-cases/get-user-projects.use-case';
import { RemoveProjectUseCase } from './use-cases/remove-project.use-case';
import { UpdateProjectUseCase } from './use-cases/update-project.use-case';

@UseGuards(JwtAuthGuard)
@Resolver(() => Project)
export class ProjectsResolver {
  constructor(
    private readonly addProjectUseCase: AddProjectUseCase,
    private readonly getUserProjectsUseCase: GetUserProjectsUseCase,
    private readonly updateProjectUseCase: UpdateProjectUseCase,
    private readonly removeProjectUseCase: RemoveProjectUseCase,
  ) {}

  @Mutation(() => Project, { description: 'Add project' })
  addProject(
    @Args('projectInput') projectInput: ProjectInput,
    @CurrentUser('id') id: number,
  ) {
    return this.addProjectUseCase.execute({ projectInput, userId: id });
  }

  @Query(() => [Project], { description: 'Get all user projects' })
  getAllUserProjects(@CurrentUser('id') id: number) {
    return this.getUserProjectsUseCase.execute({ id });
  }

  @Mutation(() => Project, {
    description: 'Update project via checking github repository',
  })
  updateProject(
    @Args('projectInput') projectInput: ProjectInput,
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.updateProjectUseCase.execute({ projectInput, id });
  }

  @Mutation(() => Project, { description: 'Remove project' })
  removeProject(@Args('projectId', { type: () => Int }) projectId: number) {
    return this.removeProjectUseCase.execute({ id: projectId });
  }
}
