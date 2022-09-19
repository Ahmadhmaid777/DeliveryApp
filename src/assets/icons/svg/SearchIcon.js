import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import Colors from "../../../constants/Colors";

const SearchIcon = ({ fill = Colors.grayLight, ...props }) => (
  <Svg
    width={24}
    height={24}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={11} cy={11} r={6} fill={fill} />
    <Path d="m20 20-3-3" fill={fill} stroke={fill} strokeLinecap="round" />
  </Svg>
);

export default SearchIcon;
