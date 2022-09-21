import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Icons from "../../assets/icons";
import { Colors, Fonts, Layout } from "../../constants/index";

export default function ScreenHeader({
  title,
  startIcon,
  endIcon,
  onPressEndIcon,
  onPressStartIcon,
  style
}) {
  return (
    <View style={[styles.headerContainer,style]}>
      <TouchableOpacity onPress={onPressStartIcon}>
        <Image source={startIcon} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onPressEndIcon}>
        <Image source={endIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: Colors.secondary,
    paddingVertical: Layout.padding.medium,
    paddingHorizontal: Layout.padding.xLarge,
    borderRadius: Layout.radius.large * 2,
    color: Fonts.color.black,
    fontWeight: "500",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
});
