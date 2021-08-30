import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import colors from "../config/colors";

function SearchHeader({ onPressFormat, onPressSearch }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressFormat}>
        <MaterialCommunityIcons
          size={30}
          name="format-align-left"
          color={colors.black}
        />
      </TouchableOpacity>
      <View style={styles.search}>
        <TouchableOpacity onPress={onPressSearch}>
          <MaterialCommunityIcons
            size={30}
            name="magnify"
            color={colors.black}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default SearchHeader;
