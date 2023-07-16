import { StyleSheet, Dimensions, TouchableOpacity, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import React, { useState } from "react";

const Switch = () => {
  const [actif, setActif] = useState("keypad");
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, actif === "keypad" && styles.actif]} onPress={() => setActif("keypad")}>
        <FontAwesome5 name="hashtag" color="#737B92" size={20} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, actif === "library" && styles.actif]} onPress={() => setActif("library")}>
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
    marginBottom: 5,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  actif: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
  },
  button: { width: Dimensions.get("window").width / 2 - 10, height: 40, justifyContent: "center", alignItems: "center" },
});

export default Switch;
