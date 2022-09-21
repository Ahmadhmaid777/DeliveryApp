import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default function TextButton({ textStyle, children, ...props }) {
  return (
    <TouchableOpacity {...props}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
}
