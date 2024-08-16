import { ThemeConfig, theme } from "antd";

export const darkTheme: ThemeConfig = {
  components: {
    Typography: {
      fontSizeHeading1: 54,
      fontWeightStrong: 900,
      titleMarginBottom: 0,
      titleMarginTop: 0,
      colorLink: "#481E14",
    },
    Divider: {
      margin: 0,
      colorText: "rgb(72, 30, 20)",
      colorBgBase: "rgb(72, 30, 20)",
      fontSize: 14,
      algorithm: true,
    },
    Input: {
      paddingBlock: 10,
      paddingBlockLG: 12,
      paddingBlockSM: 12,
      colorBgContainer: "transparent",
    },
    Select: {
      fontSize: 16,
      optionPadding: "2vh",
      colorBgContainer: "transparent",
    },
    Button: {
      colorBgContainer: "transparent",
      paddingBlock: 24,
      paddingInline: 40,
      paddingBlockLG: 24,
      paddingInlineLG: 40,
    },
    Layout: {
      headerBg: "transparent",
      headerPadding: 0,
    },
    Form: {
      itemMarginBottom: 0,
      labelColor: "rgb(72, 30, 20)",
    },
    Card: {
      colorBgContainer: "transparent",
    },
  },
  token: {
    fontSize: 16,
    fontFamily: "Inter",
    colorText: "#fdf6ef",
    colorTextSecondary: "#481E14",
    colorTextBase: "#fdf6ef",
    colorLink: "#fdf6ef",
    colorBgBase: "#0C0C0C",
    colorBgContainer: "#0C0C0C",
    colorPrimary: "#9B3922",
    colorBorderSecondary: "rgba(72, 30, 20, .3)",
    borderRadius: 3,
  },
  algorithm: theme.darkAlgorithm,
};
