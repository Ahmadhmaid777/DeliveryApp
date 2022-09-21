import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  TouchableOpacity,
} from "react-native";
import icons, { back } from "../assets/icons";
import TextButton from "../components/buttons/TextButton";
import ScreenHeader from "../components/headers/ScreenHeader";
import { Colors, Fonts, Layout } from "../constants";
import Images from "../constants/Images";
import { getRestaurantById } from "../constants/Restaurants";
import Styles from "../constants/Styles";

export default function Resturant({ route, navigation }) {
  let [restaurant, setRestaurant] = useState({});
  let [quantity, setQuantity] = useState(0);
  let [bascket, setBascket] = useState(new Map());

  const addRecipe = (item) => {
    let { menuId } = item;
    let newBascket = new Map(bascket.entries());
    newBascket.get(menuId)
      ? newBascket.get(menuId).quantity++
      : newBascket.set(menuId, { quantity: 1, item });

    setBascket(newBascket);
  };
  const removeRecipe = (menuId) => {
    let newBascket = new Map(bascket.entries());
    newBascket.get(menuId) &&
      newBascket.get(menuId).quantity > 0 &&
      newBascket.get(menuId).quantity--;
    setBascket(newBascket);
  };

  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const res = getRestaurantById(route.params.id);

    setRestaurant(res);
  }, []);

  const handelQuantityIncrement = (item) => {
    addRecipe(item);
  };
  const handelQuantityDecrement = (item) => {
    removeRecipe(item.menuId);
  };
  const renderDots = () => {
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
  };
  return (
    <View style={styles.container}>
      {console.log(bascket)}
      {/* screen header */}
      <ScreenHeader
        style={styles.header}
        startIcon={icons.back}
        title={restaurant.name}
        endIcon={icons.list}
        onPressStartIcon={() => navigation.goBack()}
      />
      {/* content */}
      <View style={styles.content}>
        <Animated.ScrollView
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal
          scrollEventThrottle={16}
          snapToAlignment="center"
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        >
          {restaurant.menu != undefined
            ? restaurant?.menu.map((item, index) => {
                return (
                  <View style={{ alignItems: "center" }} key={`menu-${index}`}>
                    {/*photo section  */}

                    <Image
                      resizeMode="cover"
                      source={item.photo}
                      style={styles.photo}
                    />

                    {/* quantity section */}

                    <View style={styles.quntityContainer}>
                      <TextButton
                        style={styles.counterButton}
                        textStyle={styles.counterButtonText}
                        onPress={() => handelQuantityDecrement(item)}
                      >
                        -
                      </TextButton>
                      <Text style={styles.counterText}>
                        {bascket.get(item.menuId)?.quantity || 0}
                      </Text>
                      <TextButton
                        style={styles.counterButton}
                        textStyle={styles.counterButtonText}
                        onPress={() => handelQuantityIncrement(item)}
                      >
                        +
                      </TextButton>
                    </View>
                    {/*details section */}
                    <View style={styles.detailsContainer}>
                      <Text style={styles.nameText}>
                        {item.name} - ${item.price}
                      </Text>
                      <Text style={styles.descriptionText}>
                        {item.description}
                      </Text>

                      {/* <View style={styles.caloriesContainer}>
                        <Image
                          source={icons.fire}
                          style={{ width: 12, height: 12 }}
                        />
                        <Text
                          style={{
                            ...Fonts.style.body3,
                            color: Fonts.color.darkgray,
                          }}
                        >
                          {item.calories.toFixed(2)} cal
                        </Text>
                      </View> */}
                    </View>
                  </View>
                );
              })
            : null}
        </Animated.ScrollView>
        {renderDots()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    alignItems: "center",
    width: Layout.window.width,
  },
  caloriesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Layout.margin.small,
  },
  nameText: {
    ...Fonts.style.h1,
    textAlign: "center",
    fontSize: 24,
    maxWidth: Layout.window.width * 0.9,
  },
  descriptionText: {
    ...Fonts.style.body3,
    fontWeight: "600",
    textAlign: "center",
    marginTop: Layout.margin.small,
    maxWidth: Layout.window.width * 0.9,
  },
  calroiesText: {
    ...Fonts.style.body3,
    color: Fonts.color.darkgray,
    marginStart: Layout.margin.tiny,
  },
  container: {
    paddingTop: 0,
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
  header: {
    marginHorizontal: 20,
  },
  photoContainer: {
    height: Layout.window.height * 0.35,
    width: Layout.window.width,
  },
  photo: {
    height: Layout.window.height * 0.35,
    width: Layout.window.width,
  },
  quntityContainer: {
    marginTop: -25,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120,
    backgroundColor: "white",
    borderRadius: Layout.radius.large * 2,
    ...Styles.shadow.normal,
    marginBottom: 10,
    alignItems: "center",
  },
  counterText: {
    ...Fonts.style.body2,
  },
  counterButtonText: {
    ...Fonts.style.body1,
  },
  counterButton: {
    paddingVertical: Layout.padding.small,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
