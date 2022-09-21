import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import icons from "../assets/icons";
import { Colors, Fonts, Layout } from "../constants";
import Images from "../constants/Images";
import Button from "./buttons/Button";

export default function OrderInfo({ bascket, restaurnt }) {
  let [totalPrice, setTotalPrice] = useState(0);
  let [totalQuantity, setQuantity] = useState(0);

  useEffect(() => {
    let price = 0;
    let quantity = 0;
    for (let item of bascket.values()) {
      quantity += item.quantity;
      price += item.quantity * item.item.price;
    }
    setTotalPrice(price);
    setQuantity(quantity);
  }, [bascket]);

  return (
    <View style={styles.cartContainer}>
      <View style={styles.totalContainer}>
        <Text style={Fonts.style.h4}>{totalQuantity} Items in the cart</Text>
        <Text style={Fonts.style.h4}>${totalPrice}</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.paymentDetailesContainer}>
        <View style={styles.row}>
          <Image source={icons.pin} style={{ width: 18, height: 18 }} />
          <Text style={styles.paymentText}>765 Linclone Pi</Text>
        </View>
        <View style={styles.row}>
          <Image source={icons.master_card} style={{ width: 18, height: 18 }} />
          <Text style={styles.paymentText}>****2312</Text>
        </View>
      </View>
      <Button title={"Order"} />
    </View>
  );
}

const styles = StyleSheet.create({
  cartContainer: {
    backgroundColor: "white",
    borderTopStartRadius: Layout.radius.large * 3,
    borderTopEndRadius: Layout.radius.large * 3,
    flex: 2,
    marginTop: Layout.margin.large,
    paddingVertical: Layout.padding.large,
    paddingHorizontal: Layout.padding.xxLarge,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  divider: {
    backgroundColor: Colors.lightGray3,
    height: 1,
    marginVertical: Layout.margin.regular,
    marginHorizontal: -Layout.margin.xxLarge,
  },
  paymentDetailesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  paymentText: {
    marginStart: Layout.margin.small,
    ...Fonts.style.body4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
