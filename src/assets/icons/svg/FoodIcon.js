import * as React from "react";
import Svg, { Path } from "react-native-svg";
import Colors from "./../../../constants/Colors";
const FoodIcon = ({ fill = Colors.grayLight, ...props }) => (
  <Svg
    width={24}
    height={24}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18 3a1 1 0 0 1 .993.883L19 4v16a1 1 0 0 1-1.993.117L17 20v-5h-1a1 1 0 0 1-.993-.883L15 14V8c0-2.21 1.5-5 3-5Zm-6 0a1 1 0 0 1 .993.883L13 4v5a4.002 4.002 0 0 1-3 3.874V20a1 1 0 0 1-1.993.117L8 20v-7.126a4.002 4.002 0 0 1-2.995-3.668L5 9V4a1 1 0 0 1 1.993-.117L7 4v5a2 2 0 0 0 1 1.732V4a1 1 0 0 1 1.993-.117L10 4l.001 6.732a2 2 0 0 0 .992-1.563L11 9V4a1 1 0 0 1 1-1Z"
      fillRule="nonzero"
      fill={fill}
    />
  </Svg>
);

export default FoodIcon;
