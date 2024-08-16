import { RouterProvider } from "react-router-dom";
import router from "./router/Router";
import { ConfigProvider } from "antd";
import { darkTheme } from "./theme/antConfig";
import { StyleProvider } from "@ant-design/cssinjs";
import "./App.css";

function App() {
  return (
    <StyleProvider layer>
      <ConfigProvider theme={darkTheme}>
        <RouterProvider router={router()} />
      </ConfigProvider>
    </StyleProvider>
  );
}

export default App;
