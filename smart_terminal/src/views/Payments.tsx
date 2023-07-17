import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Switch from "../components/Switch/Switch";
import React, { useState } from "react";
import Keypad from "./Keypad";
import Library from "./Library";

type ScreenType = "keypad" | "library";

const Payments = () => {
  const [screen, setScreen] = useState<ScreenType>("keypad");
  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.lineButton}>
          <Switch screen={screen} setScreen={setScreen} />
        </View>
        {screen === "keypad" ? <Keypad /> : <Library />}
      </View>
      {}
    </SafeAreaView>
  );
};

export default Payments;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  lineButton: {
    flexDirection: "row",
    margin: 10,
  },
});
