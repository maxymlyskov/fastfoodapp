import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Count from "./Count";
import LikeButton from "./LikeButton";

function CartLiked({ title, price, image, onPress }) {
  return (
    <View style={styles.cart}>
      <Image source={image} style={styles.image} />
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AppText style={styles.title}>{title}</AppText>
          <View style={styles.plus}>
            <TouchableOpacity onPress={onPress}>
              <MaterialCommunityIcons
                name="plus-circle"
                color={colors.black}
                size={35}
              />
            </TouchableOpacity>
          </View>
        </View>
        <AppText style={styles.description}>Two veals</AppText>
        <View style={styles.count}>
          <AppText style={styles.price}>{price}</AppText>
          <View style={styles.like}>
            <LikeButton
              size={35}
              onPress={() => console.log("already liked")}
              form={false}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  description: {
    fontSize: 13,
    color: colors.grey,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  like: {
    paddingHorizontal: 63,
  },
  count: {
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  container: { paddingHorizontal: 10, paddingVertical: 10 },
  cart: {
    flexDirection: "row",
    elevation: 5,
    backgroundColor: colors.whiteGrey,
    borderRadius: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 15,
  },
  plus: {
    paddingHorizontal: 20,
  },
});

export default CartLiked;
