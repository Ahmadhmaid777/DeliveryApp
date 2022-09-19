import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import Colors from "../../../constants/Colors";
const ProfileIcon = ({ fill = Colors.grayLight, ...props }) => (
  <Svg
    width={24}
    height={24}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={12} cy={8} r={4} fill={fill} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 13c-3.67 0-6.68 2.42-6.976 5.5-.026.275.2.5.476.5h13a.465.465 0 0 0 .476-.5C18.68 15.42 15.67 13 12 13Z"
      fill={fill}
    />
  </Svg>
);

export default ProfileIcon;
