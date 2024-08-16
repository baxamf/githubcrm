import { GitHubRepoInfoResponse } from '../types';

export class CreateProjectDTO {
  owner!: string;

  name!: string;

  url!: string;

  stars!: number;

  forks!: number;

  issues!: number;

  createdAt!: number;

  constructor(gitHubRepoInfo: GitHubRepoInfoResponse) {
    this.owner = gitHubRepoInfo.owner.login;

    this.name = gitHubRepoInfo.name;

    this.url = gitHubRepoInfo.html_url;

    this.stars = gitHubRepoInfo.stargazers_count;

    this.forks = gitHubRepoInfo.forks_count;

    this.issues = gitHubRepoInfo.open_issues_count;

    this.createdAt = Date.now();
  }
}
