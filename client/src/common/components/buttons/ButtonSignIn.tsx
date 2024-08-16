import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { CaretLeftOutlined } from "@ant-design/icons";
import { RoutePaths } from "../../../router/route-path.enum";

export default function ButtonSignIn() {
  const navigate = useNavigate();

  return (
    <Button
      icon={<CaretLeftOutlined />}
      onClick={() => navigate(RoutePaths.SIGN_IN)}
      type="link"
    >
      Sign in
    </Button>
  );
}
