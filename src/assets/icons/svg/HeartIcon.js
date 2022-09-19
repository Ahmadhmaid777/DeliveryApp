import * as React from "react";
import Svg, { Path } from "react-native-svg";
import Colors from "../../../constants/Colors";

const HeartIcon = ({ fill = Colors.grayLight, ...props }) => (
  <Svg
    width={20}
    height={17}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m2.45 9.908 6.953 6.531c.24.225.36.338.5.366a.5.5 0 0 0 .193 0c.142-.028.261-.14.5-.366l6.953-6.53a5.203 5.203 0 0 0 .549-6.983l-.31-.399C15.82-.009 11.87.416 10.487 3.314a.54.54 0 0 1-.974 0C8.13.416 4.18-.01 2.212 2.527l-.31.4a5.203 5.203 0 0 0 .549 6.981Z"
      fill={fill}
    />
  </Svg>
);

export default HeartIcon;
