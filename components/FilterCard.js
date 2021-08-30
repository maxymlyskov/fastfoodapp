import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function FilterCard({ title, onPress, backgroundColor, color }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, (style = { backgroundColor })]}>
        <AppText style={[styles.text, (style = { color })]}>{title}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 40,
    borderRadius: 20,
  },
  text: {
    fontSize: 15,
    color: colors.white,
  },
});

export default FilterCard;
