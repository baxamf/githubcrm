import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../router/route-path.enum";

export default function ButtonSignUp() {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(RoutePaths.SIGN_UP)} type="link">
      Sign up
    </Button>
  );
}
