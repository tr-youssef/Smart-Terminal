import { StyleSheet, Dimensions, TouchableOpacity, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import React, { useState } from "react";

type SwitchProps = {
  screen: "keypad" | "library";
  setScreen: (screen: "keypad" | "library") => void;
};

const Switch: React.FC<SwitchProps> = ({ screen, setScreen }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, screen === "keypad" && styles.actif]} onPress={() => setScreen("keypad")}>
        <FontAwesome5 name="hashtag" color="#737B92" size={20} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, screen === "library" && styles.actif]} onPress={() => setScreen("library")}>
        <FontAwesome5 name="th-list" color="#737B92" size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEF0F4",
    borderRadius: 5,
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  actif: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
  },
  button: { width: Dimensions.get("window").width / 2 - 20, height: 40, justifyContent: "center", alignItems: "center" },
});

export default Switch;
