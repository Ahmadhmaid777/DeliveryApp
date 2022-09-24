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
  style,
}) {
  return (
    <View style={[styles.headerContainer, style]}>
      <TouchableOpacity
        hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        onPress={onPressStartIcon}
      >
        <Image source={startIcon} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.titleView}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onPressEndIcon}>
        <Image source={endIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  titleView: {
    backgroundColor: Colors.secondary,
    paddingVertical: Layout.padding.medium,
    paddingHorizontal: Layout.padding.xLarge,
    borderRadius: Layout.radius.large * 2,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
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
