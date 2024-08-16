import { useQuery } from "@apollo/client";
import { GET_ALL_PROJECTS } from "../graphql";
import { GetAllProjectsResponse } from "../types";

export function useGetProjects() {
  const { data, loading, error } =
    useQuery<GetAllProjectsResponse>(GET_ALL_PROJECTS);

  return {
    projects: data?.getAllUserProjects,
    loading,
    errorMessage: error?.message,
  };
}
