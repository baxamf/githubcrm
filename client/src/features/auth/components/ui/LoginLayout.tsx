import { Layout, Typography } from "antd";
import { PropsWithChildren } from "react";

type LoginLayoutProps = {
  title: string;
} & PropsWithChildren;

export default function LoginLayout({ children, title }: LoginLayoutProps) {
  return (
    <Layout className="w-screen min-h-screen gap-[2vh] text-center grid place-content-center">
      <Typography.Title level={2}>{title}</Typography.Title>

      {children}
    </Layout>
  );
}
