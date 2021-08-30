import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import CartListScreen from "../screens/CartListScreen";
import PlusDetails from "../screens/PlusDetails";
import CheckoutScreen from "../screens/CheckoutScreen";

const Stack = createStackNavigator();

const FoodNavigator = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false, mode: "modal", gestureEnabled: true }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
    <Stack.Screen name="CartList" component={CartListScreen} />
    <Stack.Screen
      name="PlusDetails"
      component={PlusDetails}
      options={{
        tabBarVisible: false,
      }}
    />
    <Stack.Screen name="Checkout" component={CheckoutScreen} />
  </Stack.Navigator>
);

export default FoodNavigator;
