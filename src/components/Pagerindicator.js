import React from "react";
import { Colors, Fonts, Layout } from "../constants";
import { View, Animated } from "react-native";

export default function Pagerindicator({ scrollX, restaurant }) {
  let dotPosition = Animated.divide(scrollX, Layout.window.width);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginTop: Layout.margin.large,
        width:
          restaurant.menu != undefined
            ? restaurant?.menu.length * 20
            : undefined,
      }}
    >
      {restaurant.menu != undefined
        ? restaurant?.menu.map((item, index) => {
            let dotOpacity = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            let dotSize = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [6, 8, 6],
              extrapolate: "clamp",
            });

            let dotColor = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [
                Fonts.color.darkgray,
                Colors.primary,
                Fonts.color.darkgray,
              ],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={`menuDot-${index}`}
                opacity={dotOpacity}
                style={{
                  backgroundColor: dotColor,
                  width: dotSize,
                  height: dotSize,

                  borderRadius: Layout.radius.large * 2,
                }}
              ></Animated.View>
            );
          })
        : null}
    </View>
  );
}
