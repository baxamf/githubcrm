import { useMutation } from "@apollo/client";
import { FormikHelpers } from "formik";
import {
  AddProjectResponse,
  AddProjectVariables,
  ProjectInput,
} from "../types";
import { ADD_PROJECT } from "../graphql";
import { updateCache } from "./useMutateProject";

export function useAddProject() {
  const [add, { error }] = useMutation<AddProjectResponse, AddProjectVariables>(
    ADD_PROJECT,
    updateCache
  );

  const addProject = async (
    projectInput: ProjectInput,
    actions: FormikHelpers<ProjectInput>
  ) => {
    await add({
      variables: { projectInput },
    });

    actions.resetForm();
  };

  return {
    addProject,
    errorMessage: error?.message,
  };
}
