import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import CartLiked from "../components/CartLiked";
import SearchHeader from "../components/SearchHeader";

function LikedScreen({ navigation }) {
  const data = {
    image: require("../assets/bigburger.jpg"),
    price: "$9.99",
    title: "Big Burger",
  };
  return (
    <Screen style={styles.container}>
      <SearchHeader />
      <View style={styles.my}>
        <AppText style={styles.myText}>My</AppText>
        <AppText style={styles.cartText}>Favorites</AppText>
      </View>
      <CartLiked
        image={data.image}
        price={data.price}
        title={data.title}
        onPress={() => navigation.navigate("PlusDetails", data)}
      />
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
});

export default LikedScreen;
