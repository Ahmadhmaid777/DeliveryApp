import React from "react";
import { getRestaurantsByCategory } from "../../constants/Restaurants";
import { StyleSheet, FlatList } from "react-native";
import RestaurantCard from "../cards/RestaurantCard";
import { useNavigation } from "@react-navigation/native";
import { SCREEN_KEY } from "../../utils/constants";
export default RestaurantsList = ({ selectedCategory }) => {
  const navigation = useNavigation();

  const onPressRestaurnt = (item) => {
    navigation.navigate(SCREEN_KEY.RESTURANT, { id: item.id });
  };
  return (
    <FlatList
      data={getRestaurantsByCategory(selectedCategory)}
      showsVerticalScrollIndicator={false}
      // ListHeaderComponent={renderCategories(selectedCategory, handelSelectCategory)}
      contentContainerStyle={styles.restaurntsFlatListContent}
      style={styles.restaurantsFlatList}
      renderItem={({ item }) => {
        return <RestaurantCard onpress={onPressRestaurnt} item={item} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  restaurntsFlatListContent: { paddingBottom: 20, paddingHorizontal: 0 },
  restaurantsFlatList: {
    flex: 1,
  },
});
