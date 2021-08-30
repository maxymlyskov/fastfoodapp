import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import AppText from "./AppText";

function Count({ price, paddingLeft }) {
  let [number, setNumber] = React.useState(1);
  let zero = null;
  if (0 < number) zero = 0;

  return (
    <View style={styles.price}>
      {price ? <AppText style={styles.priceText}>{price}</AppText> : null}
      <View style={[styles.number, { paddingLeft: paddingLeft }]}>
        <TouchableOpacity
          onPress={() => {
            setNumber(() => --number);
          }}
        >
          <MaterialCommunityIcons name="minus-box" size={30} />
        </TouchableOpacity>
        <View style={styles.numberText}>
          <AppText>
            {zero}
            {number}
          </AppText>
        </View>
        <TouchableOpacity
          onPress={() => {
            setNumber(() => ++number);
          }}
        >
          <MaterialCommunityIcons name="plus-box" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  price: {
    paddingHorizontal: 15,
    flexDirection: "row",
  },
  priceText: {
    fontWeight: "bold",
  },

  number: {
    paddingLeft: Dimensions.get("window").width / 2.3,
    flexDirection: "row",
  },
  numberText: {
    paddingHorizontal: 5,
  },
});

export default Count;
