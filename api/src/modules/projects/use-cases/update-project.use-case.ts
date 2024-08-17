import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { ProjectInput } from '../dto/project.input';
import { ProjectsService } from '../projects.service';
import { Project } from '../entities/project.entity';
import { IUseCase } from 'src/common/interfaces/use-case';
import { UpdateProjectDTO } from '../dto/update-project.dto';

export class UpdateProjectCommand {
  projectInput: ProjectInput;
  id: number;

  constructor(params: UpdateProjectCommand) {
    Object.assign(this, params);
  }
}

@Injectable()
export class UpdateProjectUseCase
  implements IUseCase<UpdateProjectCommand, Project>
{
  constructor(
    private readonly prisma: PrismaService,
    private readonly projectsService: ProjectsService,
  ) {}

  async execute({ projectInput, id }: UpdateProjectCommand) {
    const gitHubData =
      await this.projectsService.getGitHubRepoInfo(projectInput);

    const data = new UpdateProjectDTO(gitHubData);

    return this.prisma.project.update({ where: { id }, data });
  }
}
