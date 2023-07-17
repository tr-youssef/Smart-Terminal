import { StyleSheet, View, Text, Animated } from "react-native";
import React, { useEffect } from "react";

const HalfCreditCardTop = () => {
  const translateYAnimation = new Animated.Value(-100);
  const opacityAnimation = new Animated.Value(0);

  const handleTap = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(translateYAnimation, {
          toValue: 0,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnimation, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }),
      ]),
      Animated.delay(1500),
      Animated.parallel([
        Animated.timing(translateYAnimation, {
          toValue: -100,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnimation, {
          toValue: 0,
          duration: 1200,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      handleTap();
    });
  };

  useEffect(() => {
    handleTap();
  }, []);
  return (
    <View style={styles.halfCreditCardContainer}>
      <Animated.View style={[styles.halfCreditCard, { transform: [{ translateY: translateYAnimation }], opacity: opacityAnimation }]}>
        <View style={styles.textContainer}>
          <Text style={styles.bottomRightText}>Tap</Text>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  halfCreditCardContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  halfCreditCard: {
    width: "80%",
    aspectRatio: 2,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    overflow: "hidden",
    backgroundColor: "#ffd494",
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 8,
    borderTopLeftRadius: 10,
  },
  bottomRightText: {
    color: "#fff",
    fontSize: 32,
    fontFamily: "RedHatText_500Medium",
  },
});

export default HalfCreditCardTop;
