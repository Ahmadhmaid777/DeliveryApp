import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors, Fonts, Layout } from "../../constants";

export default function Button({ style = {}, textStyle, title, ...props }) {
  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: Layout.radius.large * 1.5,
    paddingVertical: Layout.padding.normal,
    alignItems: "center",
    justifyContent: "center",
    marginTop: Layout.margin.large,
  },
  buttonText: {
    color: "white",
    ...Fonts.style.body3,
  },
});
