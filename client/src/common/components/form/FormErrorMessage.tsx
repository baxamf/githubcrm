import { Alert } from "antd";
import { ErrorMessage } from "formik";

type FormErrorMessageProps = {
  name: string;
};

export default function FormErrorMessage({ name }: FormErrorMessageProps) {
  return (
    <ErrorMessage
      render={(msg) => (
        <Alert className="absolute right-0 mt-1" message={msg} type="error" />
      )}
      name={name}
    />
  );
}
