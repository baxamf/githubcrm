import { FormikProvider, useFormik } from "formik";
import { Alert, Button, Form, Input } from "antd";
import { useAddProject } from "../hooks/useAddProject";
import { ProjectInput } from "../types";
import { addProjectValidationSchema } from "../utils/formik";
import FormErrorMessage from "../../../common/components/form/FormErrorMessage";

export default function AddProjectForm() {
  const { addProject, errorMessage } = useAddProject();

  const formik = useFormik<ProjectInput>({
    initialValues: { repoName: "" },
    validationSchema: addProjectValidationSchema,
    enableReinitialize: true,
    onSubmit: addProject,
  });
  return (
    <FormikProvider value={formik}>
      <Form
        name="basic"
        className="grid grid-cols-2 gap-5"
        initialValues={formik.initialValues}
        onSubmitCapture={formik.handleSubmit}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<ProjectInput>
          label="repository path"
          validateStatus={formik.errors.repoName && "error"}
        >
          <Input
            name="repoName"
            size="large"
            spellCheck="false"
            placeholder="e.g. facebook/react"
            disabled={formik.isSubmitting}
            value={formik.values.repoName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <FormErrorMessage name="email" />
        </Form.Item>

        <Form.Item className="mt-8">
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            disabled={!formik.isValid || formik.isSubmitting || !formik.dirty}
          >
            Add
          </Button>
        </Form.Item>

        {errorMessage && (
          <Alert className="w-max" message={errorMessage} type="error" />
        )}
      </Form>
    </FormikProvider>
  );
}
