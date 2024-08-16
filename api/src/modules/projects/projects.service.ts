import { BadRequestException, Injectable } from '@nestjs/common';
import { ProjectInput } from './dto/project.input';
import { HttpService } from '@nestjs/axios';
import { GitHubRepoInfoResponse } from './types';
import { AxiosError } from 'axios';

interface IProjectsService {
  getGitHubRepoInfo: (
    repoName: ProjectInput,
  ) => Promise<GitHubRepoInfoResponse>;
}

@Injectable()
export class ProjectsService implements IProjectsService {
  private readonly gitHubApiUrl = 'https://api.github.com/repos/';

  constructor(private readonly httpService: HttpService) {}

  async getGitHubRepoInfo({ repoName }: ProjectInput) {
    try {
      const repoData =
        await this.httpService.axiosRef.get<GitHubRepoInfoResponse>(
          `${this.gitHubApiUrl + repoName.trim()}`,
        );

      return repoData.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new BadRequestException(error?.response.data.message);
      }
    }
  }
}
