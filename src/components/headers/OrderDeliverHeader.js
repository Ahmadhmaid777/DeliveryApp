import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import icons from "../../assets/icons";
import { Fonts, Layout } from "../../constants";
export default function OrderDeliverHeader({ duration, address }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.rowStack}>
        <Image source={icons.red_pin} style={{ width: 14, height: 14 }} />
        <Text style={[Fonts.style.body4, { marginStart: Layout.margin.small }]}>
          {address}
        </Text>
      </View>
      <Text style={Fonts.style.body4}>{duration} min</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: Layout.radius.large * 2,
    paddingHorizontal: Layout.padding.large,
    paddingVertical: Layout.padding.medium,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
    zIndex: 10,
  },
  rowStack: {
    flexDirection: "row",
    alignItems: "center",
  },
});
