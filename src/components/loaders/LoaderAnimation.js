import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import Animated, { EasingNode } from "react-native-reanimated";
import { Layout } from "../../constants";

export default function LoaderAnimation({ show = true }) {
  let [isDisabled, setDisabled] = useState(true);
  let postion = useRef(new Animated.Value(Layout.margin.large)).current;

  useEffect(() => {
    if (!show) {
      Animated.timing(postion, {
        duration: 500,
        toValue: -50,
        delay: 1000,
        easing: EasingNode.bounce,
      }).start(({ finished }) => {
        if (finished) setDisabled(false);
      });
    }
  });
  if (!isDisabled) {
    return null;
  }

  return (
    <Animated.View
      style={[styles.mainContainer, { transform: [{ translateY: postion }] }]}
    >
      <Text>please wait for seconds</Text>
      <ActivityIndicator style={{ marginStart: 10 }} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    borderRadius: Layout.radius.large,
    padding: Layout.padding.large,
    flexDirection: "row",
    position: "absolute",
    top: Layout.margin.large,
    left: Layout.margin.medium,
    right: Layout.margin.medium,
    justifyContent: "center",
    zIndex: 1,
  },
});
