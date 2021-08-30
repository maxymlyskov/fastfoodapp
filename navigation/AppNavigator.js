import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { View, StyleSheet } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import LikedScreen from "../screens/LikedScreen";
import CartScreen from "../screens/CartScreen";
import AccountScreen from "../screens/AccountScreen";
import colors from "../config/colors";
import FoodNavigator from "./FoodNavigator";
import CartListScreen from "../screens/CartListScreen";

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#EAEAEA",
        tabBarInactiveTintColor: "#EAEAEA",
        tabBarActiveBackgroundColor: "#999999",
        tabBarInactiveBackgroundColor: "#000000",
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={FoodNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              size={size}
              color={color}
              name="home-outline"
            />
          ),
          visible: false,
        }}
      />
      <Tab.Screen
        name="LikedScreen"
        component={LikedScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              size={size}
              color={color}
              name="heart-outline"
            />
          ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              size={size}
              color={color}
              name="cart-outline"
            />
          ),
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              size={size}
              color={color}
              name="account-outline"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppNavigator;
