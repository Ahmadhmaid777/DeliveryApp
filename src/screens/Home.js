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
  StatusBar,
} from "react-native";
import icons from "../assets/icons/index";
import ScreenHeader from "../components/headers/ScreenHeader";
import CategoriesList from "../components/lists/CategoriesList";
import RestaurantsList from "../components/lists/RestaurantsList";
import { Colors, Fonts, Layout } from "../constants";
import Categories from "../constants/Categories";

const BURGER_CATEGORY_INDEX = 2;

//render restaurants flatList

export default function Home() {
  let [selectedCategory, setSelecedCategory] = useState(3);
  const handelSelectCategory = useCallback((categoryId) => {
    setSelecedCategory(categoryId);
  });

  return (
    <View style={styles.conatiner}>
      {/*Header*/}
      <View style={styles.headerContainer}>
        <ScreenHeader
          title={"hello  home"}
          startIcon={icons.location}
          endIcon={icons.basket}
        />
        <Text style={styles.titleStyle}>Main{"\n"}Catergories</Text>
      </View>

      {/* render categories */}
      <CategoriesList
        categories={Categories}
        handelSelectCategory={handelSelectCategory}
        selectedCategory={selectedCategory}
      />

      {/*render restaurants list */}
      <RestaurantsList selectedCategory={selectedCategory} />
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
});
