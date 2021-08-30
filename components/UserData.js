import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import FontAwesome from "react-native-vector-icons/FontAwesome";

function UserData({ title, subTitle, icon, color, micon, fontWeight }) {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <AppText style={styles.titleText}>{title}</AppText>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {icon ? (
            <FontAwesome
              style={{ fontSize: 20, color: colors.black, paddingRight: 5 }}
              name={icon}
            ></FontAwesome>
          ) : null}
          {micon ? <MaterialCommunityIcons name="wallet" size={30} /> : null}
          <AppText style={[styles.subTitle, (style = { fontWeight })]}>
            {subTitle}
          </AppText>
        </View>
      </View>
      <View style={styles.icon}>
        <MaterialCommunityIcons
          name="checkbox-marked"
          size={80}
          color={color}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderRadius: 15,
    flexDirection: "row",
    backgroundColor: colors.white,
    justifyContent: "space-between",
    elevation: 5,
    overflow: "hidden",
    marginBottom: 20,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  detailsContainer: {
    padding: 5,
  },
  subTitle: {
    fontSize: 15,
  },
});

export default UserData;
