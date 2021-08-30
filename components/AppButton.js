import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../config/colors";

function AppButton({ title, onPress, color, colorText, width }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color, width }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: colorText }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.white,
    borderRadius: 25,
    borderColor: colors.black,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "50%",
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    color: colors.black,
    fontWeight: "bold",
  },
});

export default AppButton;
