import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  SafeAreaView,
} from "react-native";
import icons from "../assets/icons/index";
import CategoryCard from "../components/cards/CategoryCard";
import RestaurantCard from "../components/cards/RestaurantCard";
import ScreenHeader from "../components/headers/ScreenHeader";
import { Colors, Fonts, Layout } from "../constants";
import Categories from "../constants/Categories";
import { getRestaurantsByCategory } from "../constants/Restaurants";

const BURGER_CATEGORY_INDEX = 2;

//render categories flatList
const renderCategories = (selectedCategory, handelSelectCategory) => {
  return (
    <FlatList
      data={Categories}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingEnd: 0 }}
      extraData={{
        selectedCategory,
      }}
      initialScrollIndex={BURGER_CATEGORY_INDEX}
      style={styles.categoriesFlatList}
      renderItem={({ item }) => (
        <CategoryCard
          onPress={handelSelectCategory}
          item={item}
          selected={item.id == selectedCategory}
        />
      )}
    />
  );
};

//render restaurants flatList
const renderRestaurantList = (selectedCategory,handelSelectCategory) => {
  return (
    <FlatList
      data={getRestaurantsByCategory(selectedCategory)}
      showsVerticalScrollIndicator={false}
      // ListHeaderComponent={renderCategories(selectedCategory, handelSelectCategory)}
      contentContainerStyle={styles.restaurntsFlatListContent}
      bounces={false}
   
      style={styles.restaurantsFlatList}
      renderItem={({ item }) => {
        return <RestaurantCard item={item} />;
      }}
    />
  );
};

export default function Home() {
  let [selectedCategory, setSelecedCategory] = useState(3);

  const handelSelectCategory = useCallback((categoryId) => {
    setSelecedCategory(categoryId);
  });
  return (
    <View style={styles.conatiner}>
       <View style={styles.headerContainer}>
        <ScreenHeader startIcon={icons.location} endIcon={icons.basket} />
        <Text style={styles.titleStyle}>Main{"\n"}Catergories</Text>
      </View>
      {/* render categories */}
      {renderCategories(selectedCategory, handelSelectCategory)}
      {/*render restaurants list */}
      {renderRestaurantList(selectedCategory,handelSelectCategory)}

    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    paddingTop: 0,
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
  titleStyle: {
    marginTop: Layout.margin.large,
    ...Fonts.style.h1,
  },
  headerContainer: {
    paddingHorizontal: 20,
  },
  categoriesFlatList: {
    flexGrow: 0,
    marginTop: 8,
    marginBottom: 8,
  },
  restaurntsFlatListContent: { paddingBottom: 20, paddingHorizontal: 0 },
  restaurantsFlatList: {
    flex: 1,
  
  },
});
