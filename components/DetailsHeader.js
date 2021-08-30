import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import LikeButton from "./LikeButton";

function DetailsHeader({ navigation, title }) {
  return (
    <View style={styles.text}>
      <View>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={30}
            color={colors.black}
          />
        </TouchableWithoutFeedback>
      </View>
      <AppText style={styles.titleText}>{title}</AppText>
      <View>
        <LikeButton size={30} onPress={() => console.log("liked")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleText: {
    fontSize: 35,
    fontWeight: "bold",
  },
});

export default DetailsHeader;
