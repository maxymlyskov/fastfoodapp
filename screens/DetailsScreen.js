import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Count from "../components/Count";
import DetailsHeader from "../components/DetailsHeader";
import Screen from "../components/Screen";
import colors from "../config/colors";

function DetailsScreen({ route, navigation }) {
  const food = route.params;
  return (
    <ScrollView>
      <Screen style={styles.container}>
        <DetailsHeader title={food.title} navigation={navigation} />
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={food.image} />
        </View>
        <View style={styles.description}>
          <AppText style={styles.descriptionText}>{food.description}</AppText>
        </View>
        <Count
          price={food.price}
          paddingLeft={Dimensions.get("window").width / 2.3}
        />
        <View style={styles.buttons}>
          <AppButton
            colorText={colors.black}
            title="Add To Cart"
            onPress={() => navigation.navigate("CartList", food)}
          />
          <View style={{ width: 75 }}></View>
          <AppButton
            color={colors.black}
            colorText={colors.white}
            title="Buy Now"
            onPress={() => navigation.navigate("Checkout", food)}
          />
        </View>
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.white },

  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: 400,
    borderRadius: 15,
  },
  description: {
    padding: 15,
  },
  descriptionText: {
    color: colors.grey,
    fontSize: 15,
  },

  buttons: { flexDirection: "row", paddingHorizontal: 15 },
});

export default DetailsScreen;
