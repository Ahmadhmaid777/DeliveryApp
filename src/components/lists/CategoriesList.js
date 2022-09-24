import React from "react";
import CategoryCard from "../cards/CategoryCard";
import { FlatList, StyleSheet } from "react-native";
export default function CategoriesList({
  categories,
  handelSelectCategory,
  selectedCategory,
}) {
  return (
    <FlatList
      data={categories}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingEnd: 0 }}
      extraData={{
        selectedCategory,
      }}
      // initialScrollIndex={BURGER_CATEGORY_INDEX}
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
}

const styles = StyleSheet.create({
  categoriesFlatList: {
    flexGrow: 0,
    marginTop: 8,
    marginBottom: 8,
  },
});
