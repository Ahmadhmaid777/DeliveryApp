import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Colors, Fonts, Images, Layout, Styles } from "../constants";
import icons from "../assets/icons";
import Button from "./buttons/Button";
import Animated, { EasingNode } from "react-native-reanimated";
export default function DeliveryDirver({
  restaurantName,
  display = true,
  animated = true,
}) {
  let displayAnime = useRef(new Animated.Value(0)).current;
  let [height, setHeight] = useState(0);
  const onLayout = ({ height }) => {
    setHeight(height);
  };

  useEffect(() => {
    if (animated) {
      Animated.timing(displayAnime, {
        duration: 5000,
        toValue: -(height + Layout.margin.small),
        easing: EasingNode.bounce,
      }).start();
    }
  }, []);

  if (!display) {
    return null;
  }

  return (
    <Animated.View
      onLayout={onLayout}
      style={[
        styles.mainContainer,
        { transform: [{ translateY: displayAnime }] },
      ]}
    >
      <View style={styles.driverDetails}>
        <View style={styles.rowStack}>
          <Image style={styles.driverImage} source={Images.avatar_5} />
          <View style={{ justifyContent: "space-around" }}>
            <Text style={Fonts.style.body3}>Brouce Evans</Text>
            <Text style={Fonts.style.body4}>{restaurantName}</Text>
          </View>
        </View>
        <View style={styles.review}>
          <Image source={icons.star} style={{ width: 14, height: 14 }} />
          <Text
            style={[Fonts.style.body3, { marginStart: Layout.margin.tiny }]}
          >
            4.6
          </Text>
        </View>
      </View>
      <View style={styles.rowStack}>
        <Button style={{ flex: 1 }} title={"Call"} />
        <Button
          style={{
            flex: 1,
            marginStart: Layout.margin.small,
            backgroundColor: Colors.lightGray,
          }}
          textStyle={{ color: Fonts.color.black }}
          title={"Message"}
        />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    borderRadius: Layout.radius.large,
    padding: Layout.padding.normal,
    position: "absolute",
    bottom: Layout.margin.large,
    left: Layout.margin.medium,
    right: Layout.margin.medium,
    zIndex: 1,
  },
  driverDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  driverImage: {
    borderRadius: Layout.radius.large * 2,
    width: 50,
    height: 50,
  },
  rowStack: {
    flexDirection: "row",
  },
  review: {
    flexDirection: "row",
    alignItems: "center",
  },
});
