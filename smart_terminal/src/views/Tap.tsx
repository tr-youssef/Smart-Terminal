import { StyleSheet, Image, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

const Tap = () => {
  return (
    <View style={styles.container}>
      <View style={styles.radialGradient1} />
      <View style={styles.radialGradient2} />
      <LinearGradient style={styles.linearGradient1} colors={["#FFBB94", "rgba(242, 118, 144, 0)"]} start={[0.3002, 0.9445]} end={[0.5002, 0.4431]} />
      <LinearGradient style={styles.linearGradient2} colors={["#FF9365", "#FF9365", "#FD687A", "#FFD494"]} start={[0.5002, -0.2634]} end={[0.2058, 0.8767]} />
      <Image style={styles.image} source={require("../../assets/contactless.png")} resizeMode="contain" />
      <Text style={[styles.text, { fontSize: 35 }]}>$ 9.95</Text>
      <Text style={[styles.text, { fontSize: 15 }]}>Purchase</Text>
      <Text style={[styles.text, { fontSize: 20 }]}>Tap, Insert, or Swipe</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200, // Set the width of the image
    height: 200, // Set the height of the image
  },
  text: {
    color: "#ffffff",
  },
  radialGradient1: {
    flex: 1,
    backgroundColor: "#FFFACF",
    position: "absolute",
    top: -6.02,
    left: -6.57,
    right: 0,
    bottom: 0,
    borderRadius: 1000,
  },
  radialGradient2: {
    flex: 1,
    backgroundColor: "#815AF0",
    position: "absolute",
    top: 0,
    left: 0,
    right: 154.31,
    bottom: 129.92,
    borderRadius: 1000,
  },
  linearGradient1: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  linearGradient2: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Tap;
