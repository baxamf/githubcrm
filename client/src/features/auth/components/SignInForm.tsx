import LoginLayout from "./ui/LoginLayout";
import LoginForm from "./LoginForm";
import ButtonSignUp from "../../../common/components/buttons/ButtonSignUp";
import { Alert, Typography } from "antd";
import { useLoginUser } from "../hooks/useLoginUser";

export default function SignInForm() {
  const { loginUser, loginError } = useLoginUser();
  return (
    <LoginLayout title="Sign in">
      <>
        <LoginForm onSubmit={loginUser} />

        <ButtonSignUp />

        <Typography.Text type="secondary" className="text-xs text-secondary">
          sign up if don't have account
        </Typography.Text>

        {loginError && <Alert message={loginError.message} type="error" />}
      </>
    </LoginLayout>
  );
}
