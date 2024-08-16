import { Card, Typography } from "antd";
import { PropsWithChildren } from "react";

export default function ProjectsLayout({ children }: PropsWithChildren) {
  return (
    <Card className="grid">
      <Typography.Title
        className="uppercase text-secondary text-center"
        level={2}
      >
        Your added github repositories
      </Typography.Title>

      {children}
    </Card>
  );
}
