import { Header } from "antd/es/layout/layout";
import { useUser } from "../../../store/hooks/useUser";
import { Typography } from "antd";
import ButtonLogout from "../buttons/ButtonLogout";

export default function MainHeader() {
  const user = useUser();

  return (
    <Header className="w-full h-[10vh] sticky top-0 z-10 flex gap-8 justify-end items-center backdrop-blur-sm">
      <Typography.Title type="secondary" level={5}>
        {user?.email}
      </Typography.Title>

      <ButtonLogout />
    </Header>
  );
}
