import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { useFonts, RedHatText_500Medium, RedHatText_500Medium_Italic } from "@expo-google-fonts/red-hat-text";
import { useFonts as useAssetsFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigators/StackNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  let [fontsLoaded] = useFonts({
    RedHatText_500Medium,
    RedHatText_500Medium_Italic,
  });

  const [fontsAssetsLoaded] = useAssetsFonts({
    Helvetica_Neue_Condensed_Bold: require("./assets/fonts/Helvetica_Neue_Condensed_Bold.ttf"),
    Helvetica_Neue_Regular: require("./assets/fonts/Helvetica_Neue_Regular.otf"),
    Helvetica_Neue_67_Medium_Condensed: require("./assets/fonts/Helvetica_Neue_67_Medium_Condensed.otf"),
  });

  if (!fontsLoaded || !fontsAssetsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
