import { InternalRefetchQueryDescriptor } from "@apollo/client";

export type ProjectInput = {
  repoName: string;
};

export type AddProjectVariables = {
  projectInput: ProjectInput;
};

export type AddProjectResponse = {
  addProject: {
    id: number;
  };
};

export type Project = {
  id: number;
  owner: string;
  name: string;
  url: string;
  stars: number;
  forks: number;
  issues: number;
  createdAt: bigint;
};

export type GetAllProjectsResponse = {
  getAllUserProjects: Project[];
};

export type UpdateProjectVariables = {
  projectInput: ProjectInput;
  id: number;
};

export type UpdateProjectResponse = {
  updateProject: {
    id: number;
  };
};

export type RemoveProjectVariables = {
  projectId: number;
};

export type RemoveProjectResponse = {
  removeProject: {
    id: number;
  };
};

export type UpdateCache = {
  refetchQueries: InternalRefetchQueryDescriptor[];
};
