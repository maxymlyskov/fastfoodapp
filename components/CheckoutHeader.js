import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function CheckoutHeader({ navigation, title }) {
  return (
    <View style={styles.text}>
      <View style={styles.arrow}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={30}
            color={colors.black}
          />
        </TouchableWithoutFeedback>
      </View>
      <AppText style={styles.titleText}>{title}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 5,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  arrow: {
    paddingRight: 30,
  },
});

export default CheckoutHeader;
