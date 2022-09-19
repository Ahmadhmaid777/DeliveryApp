import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export default {
  window: {
    height,
    width,
    content: width * 0.2, //to give padding from right and left
  },
  margin: {
    tiny: 4,
    small: 8,
    medium: 12,
    normal: 16,
    regular: 20,
    large: 24,
    xLarge: 36,
    xxLarge: 44,
  },
  padding: {
    tiny: 6,
    small: 8,
    medium: 12,
    normal: 16,
    large: 20,
    xLarge: 24,
  },
  radius: {
    tiny: 4,
    normal: 8,
    medium: 12,
    large: 16,
  },
};
