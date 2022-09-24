import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import TextButton from "../buttons/TextButton";
import { Colors, Fonts, Layout, Styles } from "../../constants/index";
export default function MenuItemCard({
  recipe,
  removeRecipe,
  addRecipe,
  quantity,
}) {
  return (
    <View style={{ alignItems: "center" }}>
      <Image resizeMode="cover" source={recipe.photo} style={styles.photo} />

      {/* quantity section */}

      <View style={styles.quntityContainer}>
        <TextButton
          style={styles.counterButton}
          textStyle={styles.counterButtonText}
          onPress={() => removeRecipe(recipe.menuId)}
        >
          -
        </TextButton>
        <Text style={styles.counterText}>{quantity}</Text>
        <TextButton
          style={styles.counterButton}
          textStyle={styles.counterButtonText}
          onPress={() => addRecipe(recipe)}
        >
          +
        </TextButton>
      </View>

      {/*details section */}
      <View style={styles.detailsContainer}>
        <Text style={styles.nameText}>
          {recipe.name} - ${recipe.price}
        </Text>
        <Text style={styles.descriptionText}>{recipe.description}</Text>

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
                {recipe.calories.toFixed(2)} cal
              </Text>
            </View> */}
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
});
