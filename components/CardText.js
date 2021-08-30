import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Count from "./Count";

function CardText({ title, price, image }) {
  return (
    <View style={styles.cart}>
      <Image source={image} style={styles.image} />
      <View style={styles.container}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>{price}</AppText>
        <View style={styles.count}>
          <Count />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  price: {
    fontSize: 15,
  },
  title: {
    fontWeight: "bold",
  },
  count: {
    paddingTop: 20,
  },
  container: { paddingHorizontal: 5 },
  cart: {
    flexDirection: "row",

    borderRadius: 15,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 15,
  },
});

export default CardText;
