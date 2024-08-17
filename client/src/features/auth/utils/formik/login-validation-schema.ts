import * as yup from "yup";

export const loginValidationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Minimum 8 characters length")
    .required("Password is required"),
});
