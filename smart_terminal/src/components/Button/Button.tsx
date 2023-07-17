import React from "react";
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, View } from "react-native";
import { Icon } from "@rneui/themed";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  color: string;
  onPress: () => void;
  notification?: number;
}

const NotificationBadge: React.FC<{ count: number }> = ({ count }) => {
  return (
    <View style={styles.notificationContainer}>
      <Text style={styles.notificationText}>{count}</Text>
    </View>
  );
};

const Button: React.FC<ButtonProps> = ({ title, color, onPress, notification, ...rest }) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.line}>
        <Icon name="keyboard-arrow-down" type="MaterialIcons" color="#ffffff" onPress={() => console.log("keyboard-arrow-down")} />
        <FontAwesome5 name="hand-holding-usd" color="#ffffff" size={20} onPress={() => console.log("hand-holding-usd")} />
        <Icon name="creditcard" type="ant-design" color="#ffffff" onPress={() => console.log("creditcard")} />
        <FontAwesome5 name="tags" color="#ffffff" size={20} onPress={() => console.log("tags")} />
        <View>
          <FontAwesome5 name="shopping-bag" color="#ffffff" size={20} onPress={() => console.log("shopping-bag")} />
          {notification !== undefined && notification > 0 && <NotificationBadge count={notification} />}
        </View>
        <Icon name="dots-three-vertical" type="entypo" color="#ffffff" onPress={() => console.log("dots-three-vertical")} />
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
    borderRadius: 5,
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
  line: { flexDirection: "row", height: 50, justifyContent: "space-around", alignItems: "center", paddingHorizontal: 5 },
  notificationContainer: {
    position: "absolute",
    top: 0,
    right: -5,
    backgroundColor: "#FF5959",
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationText: {
    color: "#ffffff",
    fontSize: 10,
  },
});

export default Button;
