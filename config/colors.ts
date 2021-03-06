export const SOCIAL: Record<string, string> = {
  FACEBOOK: "#3B5998",
  TWITTER: "#5BC0DE",
  DRIBBBLE: "#EA4C89",
};

export const THEME: Record<string, string> = {
  THEME: "#B23AFC",
  PRIMARY: "#00c9db",
  INFO: "#1232FF",
  ERROR: "#FE2472",
  WARNING: "#FF9C09",
  SUCCESS: "#45DF31",
};

export const COMPONENTS: Record<string, string> = {
  INPUT: "#808080",
  PLACEHOLDER: "#9FA5AA",
  NAVBAR: "#F9F9F9",
  BLOCK: "#808080",
  ICON: "#000000",
};

const COLORS: Record<string, string> = {
  WHITE: "#FFFFFF",
  BLACK: "#000000",
  GREY: "#898989",
  MUTED: "#9FA5AA",
  TRANSPARENT: "transparent",
  NEUTRAL: "rgba(255,255,255, 0.65)",
  ...COMPONENTS,
  ...THEME,
  ...SOCIAL,
};

export default COLORS;
