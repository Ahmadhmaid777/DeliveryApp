import React, { useCallback, useEffect, useRef, useState } from "react";
import { View, StyleSheet, Animated } from "react-native";
import icons, { back } from "../assets/icons";
import Cart from "../components/OrderInfo";
import ScreenHeader from "../components/headers/ScreenHeader";
import { Colors, Fonts, Layout, Styles } from "../constants";
import { getRestaurantById } from "../constants/Restaurants";
import Pagerindicator from "../components/Pagerindicator";
import { SCREEN_KEY } from "../utils/constants";
import MenuItemCard from "../components/cards/MenuItemCard";
export default function Resturant({ route, navigation }) {
  let [restaurant, setRestaurant] = useState({});
  let [bascket, setBascket] = useState(new Map());
  const scrollX = useRef(new Animated.Value(0)).current;

  const addRecipeToBascket = useCallback((item) => {
    let { menuId } = item;
    let newBascket = new Map(bascket.entries());
    newBascket.get(menuId)
      ? newBascket.get(menuId).quantity++
      : newBascket.set(menuId, { quantity: 1, item });

    setBascket(newBascket);
  });
  const removeRecipeFromBascket = useCallback((menuId) => {
    let newBascket = new Map(bascket.entries());
    newBascket.get(menuId) &&
      newBascket.get(menuId).quantity > 0 &&
      newBascket.get(menuId).quantity--;
    setBascket(newBascket);
  });

  useEffect(() => {
    const res = getRestaurantById(route.params.id);
    setRestaurant(res);
  }, []);
  const onPressConfirmOrder = useCallback(() => {
    navigation.navigate(SCREEN_KEY.ORDER_MAP, { restaurantId: restaurant.id });
  });

  return (
    <View style={styles.container}>
      {/* screen header */}
      <ScreenHeader
        style={styles.header}
        startIcon={icons.back}
        title={restaurant.name}
        endIcon={icons.list}
        onPressStartIcon={() => navigation.goBack()}
      />
      {/* content */}
      <View style={styles.menuContainer}>
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
            ? restaurant?.menu.map((item, index) => (
                <MenuItemCard
                  recipe={item}
                  addRecipe={addRecipeToBascket}
                  removeRecipe={removeRecipeFromBascket}
                  quantity={bascket.get(item.menuId)?.quantity || 0}
                  key={`menu-${item.menuId}`}
                />
              ))
            : null}
        </Animated.ScrollView>
        <Pagerindicator scrollX={scrollX} restaurant={restaurant} />
      </View>
      <Cart bascket={bascket} onPressConfirm={onPressConfirmOrder} />
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
  menuContainer: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    flex: 5,
  },
});
