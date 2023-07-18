import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

type RootStackParamList = {
  TabNavigator: undefined;
};

const Loading: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [validate, setValidate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValidate(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  const handlePress = () => {
    navigation.navigate("TabNavigator");
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#FD687A", "#A16FF2", "#C06FF2"]} start={{ x: 0.0, y: 1.0 }} end={{ x: 0.0, y: 0.0 }} locations={[0.6051, 0.0198, 0.0198]} style={styles.gradient1} />
      <LinearGradient colors={["#FFBB94", "rgba(242, 118, 144, 0)"]} start={{ x: 0.0, y: 0.0 }} end={{ x: 0.0, y: 1.0 }} locations={[0.0, 0.7242]} style={styles.gradient2} />
      {validate ? (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "90%",
          }}
        >
          <FontAwesome5 name="check" color="#FFFFFF" size={100} />
          <Text style={styles.buttonText}>Transaction</Text>
          <Text style={styles.buttonText}>Appourved</Text>
          <View style={styles.line}>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
              <Text style={[styles.text]}>Print</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
              <Text style={[styles.text]}>Email</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
              <Text style={[styles.text]}>Print & Email</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
              <Text style={[styles.text]}>No Thanks</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View>
          <ActivityIndicator animating={true} color={MD2Colors.white} size={100} />
          <Text style={styles.buttonText}>Authorizing</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gradient1: {
    ...StyleSheet.absoluteFillObject,
  },
  gradient2: {
    ...StyleSheet.absoluteFillObject,
  },
  line: {
    width: "90%",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 40,
  },
  text: {},
  buttonText: {
    color: "#ffffff",
    fontSize: 26,
    fontFamily: "RedHatText_500Medium",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    width: "80%",
    marginTop: 5,
    backgroundColor: "#ffffff",
  },
});

export default Loading;
