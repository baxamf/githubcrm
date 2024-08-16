import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsResolver } from './projects.resolver';
import { GetUserProjectsUseCase } from './use-cases/get-user-projects.use-case';
import { AddProjectUseCase } from './use-cases/add-project.use-case';
import { RemoveProjectUseCase } from './use-cases/remove-project.use-case';
import { UpdateProjectUseCase } from './use-cases/update-project.use-case';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [
    ProjectsResolver,
    ProjectsService,
    AddProjectUseCase,
    GetUserProjectsUseCase,
    UpdateProjectUseCase,
    RemoveProjectUseCase,
  ],
})
export class ProjectsModule {}
