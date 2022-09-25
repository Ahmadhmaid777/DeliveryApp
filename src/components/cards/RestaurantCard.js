import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import icons from "../../assets/icons";
import { Colors, Fonts, Layout } from "../../constants";
import { getMultibleCategoiryById } from "../../constants/Categories";
import Styles from "../../constants/Styles";

const RestaurantCategories = ({ categories }) => {
  return getMultibleCategoiryById(categories).map((category) => {
    return (
      <Text key={category.id} style={styles.detilesText}>
        {category.title}
      </Text>
    );
  });
};

export default function RestaurantCard({ item, onpress, ...props }) {
  const { name, rating, categories, priceRating, photo, duration } = item;

  return (
    <TouchableOpacity
      onPress={() => onpress(item)}
      style={styles.container}
      {...props}
    >
      <>
        <View style={styles.imageContainer}>
          <Image source={photo} style={styles.recipeImage} />
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{duration}</Text>
          </View>
        </View>
        <View style={styles.detilesContainer}>
          <Text style={styles.titleText}>{name}</Text>
          <View style={styles.subDetilesContainer}>
            <Image source={icons.star} style={styles.starIcon} />
            <Text style={styles.detilesText}>{rating}</Text>
            <RestaurantCategories categories={categories} />

            <Text style={[styles.detilesText, { color: Fonts.color.black }]}>
              {"$".repeat(priceRating)}
            </Text>

            <Text style={{ color: Fonts.color.darkgray }}>
              {"$".repeat(3 - priceRating)}
            </Text>
          </View>
        </View>
      </>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Layout.margin.large,
    marginHorizontal: 20,
  },
  imageContainer: {
    borderRadius: Layout.radius.large,
  },
  recipeImage: {
    width: "100%",
    height: 170,
    resizeMode: "cover",
    borderRadius: Layout.radius.large,
  },
  timeContainer: {
    position: "absolute",
    borderBottomStartRadius: Layout.radius.large,
    borderTopEndRadius: Layout.radius.large * 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    bottom: 0,
    ...Styles.shadow.small,
  },
  timeText: {
    ...Fonts.style.body4,
    fontWeight: "600",
  },
  titleText: {
    ...Fonts.style.h3,
  },
  subDetilesContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  detilesText: {
    ...Fonts.style.body4,
    fontWeight: "400",
    marginStart: Layout.margin.small,
  },
  detilesContainer: {
    marginTop: Layout.margin.small,
  },
  starIcon: {
    width: 12,
    height: 12,
  },
});
