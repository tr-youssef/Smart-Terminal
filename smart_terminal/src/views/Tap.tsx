import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import HalfCreditCardTop from "../components/HalfCreditCard/HalfCreditCardTop";
import HalfCreditCardBottom from "../components/HalfCreditCard/HalfCreditCardBottom";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useRoute, useNavigation } from "@react-navigation/native";

type RootStackParamList = {
  Tap: { total: number };
  Payments: {};
};

const Tap: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, "Tap">>();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, "Tap">>();

  const { total } = route.params;
  const handleCancel = () => {
    navigation.navigate("Payments", {});
  };
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#FD687A", "#A16FF2", "#C06FF2"]} start={{ x: 0.0, y: 1.0 }} end={{ x: 0.0, y: 0.0 }} locations={[0.6051, 0.0198, 0.0198]} style={styles.gradient1} />
      <LinearGradient colors={["#FFBB94", "rgba(242, 118, 144, 0)"]} start={{ x: 0.0, y: 0.0 }} end={{ x: 0.0, y: 1.0 }} locations={[0.0, 0.7242]} style={styles.gradient2} />
      <HalfCreditCardTop />
      <HalfCreditCardBottom />
      <Text style={[styles.text1, { fontSize: 20 }]}>Purchase</Text>
      <Text style={[styles.text2, { fontSize: 15 }]}>Amount</Text>
      <Text style={[styles.text3, { fontSize: 45 }]}>$ {total.toFixed(2)}</Text>
      <BlurView style={styles.blurContainer} tint="light" intensity={20}>
        <TouchableOpacity style={styles.button} onPress={handleCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text1: {
    color: "#ffffff",
    marginBottom: 80,
    fontFamily: "RedHatText_500Medium",
  },
  text2: {
    color: "#ffffff",
    fontFamily: "RedHatText_500Medium",
  },
  text3: {
    color: "#ffffff",
    fontFamily: "Helvetica_Neue_Condensed_Bold",
  },

  gradient1: {
    ...StyleSheet.absoluteFillObject,
  },
  gradient2: {
    ...StyleSheet.absoluteFillObject,
  },
  blurContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "RedHatText_500Medium",
  },
});

export default Tap;
