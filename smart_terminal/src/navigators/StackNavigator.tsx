import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Tap from "../views/Tap";
import TabNavigator from "./TabNavigator";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Tap" component={Tap} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
