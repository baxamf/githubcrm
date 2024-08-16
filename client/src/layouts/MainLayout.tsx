import { Layout } from "antd";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../common/components/headers/MainHeader";
import Loading from "../common/components/loading/Loading";

export default function MainLayout() {
  return (
    <Layout className="w-screen min-h-screen px-[10vw] gap-[2vw] flex-wrap place-items-start content-start">
      <MainHeader />

      <Layout.Content className="pb-[4vw] w-full">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Layout.Content>
    </Layout>
  );
}
