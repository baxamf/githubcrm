import { Injectable } from '@nestjs/common';
import { IUseCase } from 'src/common/interfaces/use-case';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { Project } from '../entities/project.entity';

export class RemoveProjectCommand {
  id: number;

  constructor(params: RemoveProjectCommand) {
    Object.assign(this, params);
  }
}

@Injectable()
export class RemoveProjectUseCase
  implements IUseCase<RemoveProjectCommand, Project>
{
  constructor(private readonly prisma: PrismaService) {}

  async execute({ id }: RemoveProjectCommand) {
    return this.prisma.project.delete({ where: { id } });
  }
}
