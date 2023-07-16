import { StyleSheet, Text, View } from "react-native";
import { useFonts, RedHatText_500Medium, RedHatText_500Medium_Italic } from "@expo-google-fonts/red-hat-text";
import { useFonts as useAssetsFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InitPayment from "./src/views/InitPayment";
import Tap from "./src/views/Tap";

export default function App() {
  let [fontsLoaded] = useFonts({
    RedHatText_500Medium,
    RedHatText_500Medium_Italic,
  });

  const [fontsAssetsLoaded] = useAssetsFonts({
    Helvetica_Neue_Condensed_Bold: require("./assets/fonts/Helvetica_Neue_Condensed_Bold.ttf"),
    Helvetica_Neue_Regular: require("./assets/fonts/Helvetica_Neue_Regular.otf"),
  });

  if (!fontsLoaded || !fontsAssetsLoaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Payment" component={InitPayment} options={{ headerShown: false }} />
        <Stack.Screen name="Tap" component={Tap} options={{ headerShown: false }} />
      </Stack.Navigator>
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
