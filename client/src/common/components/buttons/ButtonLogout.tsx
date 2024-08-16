import { Button } from "antd";
import { useLogoutUser } from "../../../features/auth/hooks/useLogoutUser";

export default function ButtonLogout() {
  const { logoutUser, loading } = useLogoutUser();

  return (
    <Button type="default" onClick={logoutUser} disabled={loading}>
      Sign out
    </Button>
  );
}
