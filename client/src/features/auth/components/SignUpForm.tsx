import LoginLayout from "./ui/LoginLayout";
import LoginForm from "./LoginForm";
import ButtonSignIn from "../../../common/components/buttons/ButtonSignIn";
import { useSignUpUser } from "../hooks/useSignUpUser";
import { Alert } from "antd";

export default function SignUpForm() {
  const { signUpUser, errorMessage } = useSignUpUser();
  return (
    <LoginLayout title="Sign up">
      <>
        <LoginForm onSubmit={signUpUser} />

        <ButtonSignIn />

        {errorMessage && <Alert message={errorMessage} type="error" />}
      </>
    </LoginLayout>
  );
}
