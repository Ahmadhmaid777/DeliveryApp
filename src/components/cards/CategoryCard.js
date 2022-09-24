import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { Colors, Fonts, Layout } from "../../constants";
import Styles from "../../constants/Styles";

//category card
export default function CategoryCard({ item, onPress, selected = true }) {
  const { title, icon, id } = item;

  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={Colors.secondary}
      onPress={() => onPress(id)}
      style={[
        styles.cardContainer,
        { backgroundColor: selected ? Colors.primary : "white" },
      ]}
    >
      <>
        <View
          style={[
            styles.imageView,
            { backgroundColor: selected ? "white" : Colors.secondary },
          ]}
        >
          <Image style={styles.Image} source={icon} />
        </View>
        <Text
          style={[
            styles.title,
            { color: selected ? "white" : Fonts.color.black },
          ]}
        >
          {title}
        </Text>
      </>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: Layout.radius.large * 2,
    padding: Layout.padding.tiny,
    alignItems: "center",
    height: 110,
    marginTop: 5,
    marginBottom: 10,
    justifyContent: "space-between",
    marginStart: Layout.margin.regular,
    ...Styles.shadow.medium,
  },
  imageView: {
    borderRadius: Layout.radius.large * 2,
    alignItems: "center",
    justifyContent: "center",

    padding: 15,
  },
  Image: {
    width: 30,
    height: 30,
  },
  title: {
    ...Fonts.style.body5,
    marginBottom: Layout.margin.small,
  },
});
