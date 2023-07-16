import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Keypad from "./Keypad";
import Library from "./Library";
import React from "react";

const InitPayment = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Keypad" component={Keypad} options={{ headerShown: false }} />
      <Tab.Screen name="Library" component={Library} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default InitPayment;

const styles = StyleSheet.create({});
