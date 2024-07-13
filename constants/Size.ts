import { Dimensions } from "react-native";

const { width: wWidth, height: wHeight } = Dimensions.get("window");
export const header = 16 + wWidth * 0.005;
export const normal = 16 + wWidth * 0.001;
export const small = 12 + wWidth * 0.0005;
export const superSmall = 10 + wWidth * 0.0005;
