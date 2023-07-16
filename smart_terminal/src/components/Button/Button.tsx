import React from "react";
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, View } from "react-native";
import { Icon } from "@rneui/themed";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  color: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, color, onPress, ...rest }) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.line}>
        <Icon name="heartbeat" type="font-awesome" color="#f50" onPress={() => console.log("hello")} />
      </View>
      <View style={styles.line}>
        <TouchableOpacity style={styles.button} onPress={onPress} {...rest}>
          <Text style={[styles.buttonText]}>{title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    width: "100%",
    marginBottom: 5,
    backgroundColor: "#A58CFF",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "RedHatText_500Medium",
  },
  line: { flexDirection: "row" },
});

export default Button;
