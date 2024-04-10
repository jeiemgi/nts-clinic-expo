import hexToRgba from "hex-to-rgba";

const baseColors = {
  pureBlack: "#000000",
  pureWhite: "#FFFFFF",
  orange: "#FF4E0D",
  black: "#1E1E1E",
  "black-15": "rgba(30, 30, 30, 0.05)",
  offWhite: "#F7F7F7",
  gray: "#626262",
};

export default {
  transparent: "transparent",
  white: baseColors.pureWhite,
  black: baseColors.black,
  primary: baseColors.orange,
  primary30: hexToRgba(baseColors.orange, 0.3),
  text: baseColors.black,
  textGray: baseColors.gray,
  screenBackgroundDark: baseColors["black-15"],
  screenBackgroundLight: baseColors.offWhite,
  borderGrayLight: "#D2D2D2",
  foodPrimary: baseColors.orange,
  foodBlue: "#0071F5",
  foodGreen: "#0CB431",
};

export { default as hexToRgba } from "hex-to-rgba";
