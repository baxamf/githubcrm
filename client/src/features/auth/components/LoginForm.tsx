import { FormikProvider, useFormik } from "formik";
import { Button, Form, Input } from "antd";
import { loginValidationSchema } from "../utils/formik/login-validation-schema";
import { LoginInput } from "../types";
import FormErrorMessage from "../../../common/components/form/FormErrorMessage";

type LoginFormProps = {
  onSubmit: (values: LoginInput) => Promise<void>;
};

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const formik = useFormik<LoginInput>({
    initialValues: { email: "", password: "" },
    validationSchema: loginValidationSchema,
    onSubmit,
  });

  return (
    <FormikProvider value={formik}>
      <Form
        name="basic"
        className="flex flex-col gap-5"
        initialValues={formik.initialValues}
        onSubmitCapture={formik.handleSubmit}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<LoginInput>
          label="email"
          validateStatus={formik.errors.email && "error"}
        >
          <Input
            name="email"
            size="large"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <FormErrorMessage name="email" />
        </Form.Item>

        <Form.Item<LoginInput>
          label="password"
          validateStatus={formik.errors.password && "error"}
        >
          <Input.Password
            name="password"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <FormErrorMessage name="password" />
        </Form.Item>

        <Form.Item className="mt-8">
          <Button
            className="w-full"
            size="large"
            type="primary"
            htmlType="submit"
            disabled={!formik.isValid || formik.isSubmitting || !formik.dirty}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </FormikProvider>
  );
}
