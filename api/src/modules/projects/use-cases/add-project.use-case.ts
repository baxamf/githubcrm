import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { ProjectInput } from '../dto/project.input';
import { ProjectsService } from '../projects.service';
import { CreateProjectDTO } from '../dto/create-project.dto';
import { IUseCase } from 'src/common/interfaces/use-case';
import { Project } from '../entities/project.entity';

export class AddProjectCommand {
  projectInput: ProjectInput;
  userId: number;

  constructor(params: AddProjectCommand) {
    Object.assign(this, params);
  }
}

@Injectable()
export class AddProjectUseCase implements IUseCase<AddProjectCommand, Project> {
  constructor(
    private readonly prisma: PrismaService,
    private readonly projectsService: ProjectsService,
  ) {}

  async execute({ projectInput, userId }: AddProjectCommand) {
    const gitHubData =
      await this.projectsService.getGitHubRepoInfo(projectInput);

    const projectDto = new CreateProjectDTO(gitHubData);

    return this.prisma.project.create({ data: { ...projectDto, userId } });
  }
}
