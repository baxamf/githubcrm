import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { Project } from '../entities/project.entity';
import { IUseCase } from 'src/common/interfaces/use-case';

export class GetUserProjectsCommand {
  id: number;

  constructor(params: GetUserProjectsCommand) {
    Object.assign(this, params);
  }
}

@Injectable()
export class GetUserProjectsUseCase
  implements IUseCase<GetUserProjectsCommand, Project[]>
{
  constructor(private readonly prisma: PrismaService) {}

  async execute({ id }: GetUserProjectsCommand) {
    return this.prisma.user
      .findUniqueOrThrow({ where: { id } })
      .projects({ orderBy: { createdAt: 'desc' } });
  }
}
