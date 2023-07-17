import { StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";

interface NumberProps {
  number: string;
  onPress: () => void;
  variant: boolean;
}
const Number: React.FC<NumberProps> = ({ number, onPress, variant = false, ...rest }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: variant ? "#EEF0F4" : "#ffffff" }]} onPress={onPress} {...rest}>
      <Text style={styles.buttonText}>{number}</Text>
    </TouchableOpacity>
  );
};

export default Number;

const styles = StyleSheet.create({
  button: { width: Dimensions.get("window").width / 3.5, height: Dimensions.get("window").width / 3.8, justifyContent: "center", alignItems: "center", marginHorizontal: 5 },
  buttonText: { fontFamily: "Helvetica_Neue_Condensed_Bold", fontSize: 30 },
});
