import { Flex, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function Loading() {
  return (
    <Flex className="w-screen h-full justify-center bg-transparent">
      <Spin indicator={<LoadingOutlined spin />} />
    </Flex>
  );
}
