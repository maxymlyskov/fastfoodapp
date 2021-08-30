import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import LikeButton from "./LikeButton";

const width = Dimensions.get("window").width;

function Card({
  title,
  subTitle,
  image,
  price,
  onPress,
  onPressPlus,
  onPressLike,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} tint="light" />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </Text>
          <Text style={styles.price} numberOfLines={2}>
            {price}
          </Text>
          <View style={styles.buttons}>
            <View style={styles.plus}>
              <TouchableOpacity onPress={onPressPlus}>
                <MaterialCommunityIcons
                  name="plus-circle"
                  color={colors.black}
                  size={50}
                />
              </TouchableOpacity>
            </View>
            <LikeButton onPress={onPressLike} size={35} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.grey,
    fontWeight: "bold",
    marginBottom: 10,
  },
  title: {
    color: colors.black,
    marginBottom: 7,
    fontWeight: "bold",
    fontSize: 16,
  },
  price: {
    marginBottom: 7,
    color: colors.black,
    fontWeight: "bold",
    fontSize: 20,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
  },
  plus: {
    paddingRight: width / 12,
  },
});

export default Card;
