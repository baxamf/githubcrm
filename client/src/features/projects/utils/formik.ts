import * as yup from "yup";

export const addProjectValidationSchema = yup.object({
  repoName: yup.string().required("Repo name is required"),
});
