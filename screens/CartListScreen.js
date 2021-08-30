import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import CardText from "../components/CardText";
import Dash from "react-native-dash";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import SearchHeader from "../components/SearchHeader";
import { useFocusEffect } from "@react-navigation/native";

function CartListScreen({ route }) {
  const food = route.params;

  return (
    <Screen style={styles.container}>
      <SearchHeader />
      <View style={styles.my}>
        <AppText style={styles.myText}>My</AppText>
        <AppText style={styles.cartText}>Cart List</AppText>
      </View>
      <CardText image={food.image} price={food.price} title={food.title} />
      <View style={{ height: Dimensions.get("window").height / 6 }} />
      <Dash style={{ width: "100%", height: 1 }} />
      <View style={styles.total}>
        <AppText style={styles.totalText}>Total</AppText>
        <View style={styles.price}>
          <AppText style={styles.totalText}>{food.price}</AppText>
        </View>
      </View>
      <View style={styles.button}>
        <AppButton
          title="Checkout"
          color={colors.black}
          colorText={colors.white}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  my: {
    paddingVertical: 15,
  },
  myText: {
    fontWeight: "bold",
    fontSize: 35,
  },
  cartText: {
    fontSize: 35,
  },

  total: {
    flexDirection: "row",
  },
  price: {
    paddingLeft: Dimensions.get("window").width / 2.1,
  },
  totalText: {
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
  },
  textView: {
    paddingBottom: 20,
  },
  text: {
    fontWeight: "bold",
  },
});

export default CartListScreen;
