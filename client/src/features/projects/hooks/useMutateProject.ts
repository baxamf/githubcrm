import { useMutation } from "@apollo/client";
import { GET_ALL_PROJECTS, REMOVE_PROJECT, UPDATE_PROJECT } from "../graphql";
import {
  RemoveProjectResponse,
  RemoveProjectVariables,
  UpdateCache,
  UpdateProjectResponse,
  UpdateProjectVariables,
} from "../types";
import { useCallback, useMemo } from "react";

export const updateCache: UpdateCache = {
  refetchQueries: [
    {
      query: GET_ALL_PROJECTS,
    },
  ],
};

export function useMutateProject() {
  const [update, { error: updErr }] = useMutation<
    UpdateProjectResponse,
    UpdateProjectVariables
  >(UPDATE_PROJECT, updateCache);

  const [remove, { error: rmvErr }] = useMutation<
    RemoveProjectResponse,
    RemoveProjectVariables
  >(REMOVE_PROJECT, updateCache);

  const updateError = useMemo(() => updErr?.message, [updErr?.message]);

  const removeError = useMemo(() => rmvErr?.message, [rmvErr?.message]);

  const updateProject = useCallback(
    async ({ id, projectInput }: UpdateProjectVariables) => {
      await update({
        variables: {
          id,
          projectInput,
        },
      });
    },
    [update]
  );

  const removeProject = useCallback(
    async ({ projectId }: RemoveProjectVariables) => {
      await remove({
        variables: {
          projectId,
        },
      });
    },
    [remove]
  );

  return {
    updateProject,
    removeProject,
    updateError,
    removeError,
  };
}
