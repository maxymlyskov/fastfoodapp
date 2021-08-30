import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Dash from "react-native-dash";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import CardText from "../components/CardText";
import Screen from "../components/Screen";
import colors from "../config/colors";

function PlusDetails({ route, navigation }) {
  const food = route.params;
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <Screen style={styles.container}>
        <View style={styles.containerCard}>
          <View style={styles.textView}>
            <AppText style={styles.text}>Add to Cart</AppText>
            <View style={styles.icon}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons size={35} name="window-close" />
              </TouchableOpacity>
            </View>
          </View>
          <CardText image={food.image} price={food.price} title={food.title} />
          <View style={{ height: 50 }} />
          <View style={{ justifyContent: "flex-end" }}>
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
                onPress={() => navigation.navigate("Checkout", food)}
              />
            </View>
          </View>
        </View>
      </Screen>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
  },
  containerCard: {
    backgroundColor: colors.white,
    elevation: 5,
    borderRadius: 15,
    padding: 10,
  },
  textView: {
    paddingBottom: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    fontWeight: "bold",
  },
  total: {
    flexDirection: "row",
    paddingTop: 15,
    justifyContent: "space-between",
  },
  totalText: {
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
  },
});

export default PlusDetails;
