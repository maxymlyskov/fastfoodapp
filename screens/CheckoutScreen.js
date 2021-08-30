import React from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import CheckoutHeader from "../components/CheckoutHeader";
import Screen from "../components/Screen";
import UserData from "../components/UserData";
import colors from "../config/colors";

function CheckoutScreen({ navigation, route }) {
  const data = [
    {
      title: "Home",
      subTitle: "Kyiv, Ukraine\nVolodymyrska Street 01601",
    },
    {
      title: "Office",
      subTitle: "Kyiv, Ukraine\nBankova Street 01220",
    },
    {
      title: "MasterCard",
      subTitle: "**** **** **** 0150",
    },
    {
      title: "Cash on Delivery",
      subTitle: " $ 15.83",
    },
  ];
  const food = route.params;
  return (
    <ScrollView>
      <Screen style={styles.container}>
        <CheckoutHeader navigation={navigation} title="Checkout" />
        <AppText style={{ fontWeight: "bold", paddingBottom: 15 }}>
          Address
        </AppText>
        <UserData
          title={data[0].title}
          subTitle={data[0].subTitle}
          color={colors.black}
        />
        <UserData
          title={data[1].title}
          subTitle={data[1].subTitle}
          color={colors.grey}
        />
        <AppText style={{ fontWeight: "bold", paddingBottom: 15 }}>
          Payment
        </AppText>
        <UserData
          title={data[2].title}
          subTitle={data[2].subTitle}
          color={colors.black}
          icon={"cc-mastercard"}
          fontWeight="bold"
        />
        <UserData
          title={data[3].title}
          subTitle={data[3].subTitle}
          color={colors.grey}
          micon
          fontWeight="bold"
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.endContainer}>
            <AppText style={styles.total}>Total</AppText>
            <AppText style={styles.price}>{food.price}</AppText>
          </View>
          <AppButton
            title="Place Order"
            color={colors.black}
            colorText={colors.white}
          />
        </View>
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 10,
  },
  price: {
    fontWeight: "bold",
  },
  total: {
    fontSize: 20,
  },
});

export default CheckoutScreen;
