import { StyleSheet, View, Text, Animated, Pressable } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  Loading: undefined; // Add more route names and their corresponding params if needed
};
const HalfCreditCard: React.FC = () => {
  const translateYAnimation = new Animated.Value(300);
  const opacityAnimation = new Animated.Value(0);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

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
          toValue: 300,
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
  const handlePress = () => {
    navigation.navigate("Loading");
  };
  return (
    <View style={styles.halfCreditCardContainer}>
      <Pressable onPress={handlePress}>
        <Animated.View style={[styles.halfCreditCard, { transform: [{ translateY: translateYAnimation }], opacity: opacityAnimation }]}>
          <View style={styles.textContainer}>
            <Text style={styles.bottomRightText}>Chip</Text>
          </View>
        </Animated.View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  halfCreditCardContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "flex-end",
    zIndex: 1,
  },
  halfCreditCard: {
    width: "80%",
    aspectRatio: 2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "#815af0",
  },
  textContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 8,
    borderTopLeftRadius: 10,
  },
  bottomRightText: {
    color: "#fff",
    fontSize: 32,
    fontFamily: "RedHatText_500Medium",
  },
});

export default HalfCreditCard;
