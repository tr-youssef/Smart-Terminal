import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import React, { useState } from "react";

type PictureType = "cappucino" | "caramel" | "honey" | "choclate" | "espresso" | "flat" | "london";

type Item = {
  name: string;
  price: number;
};

type ItemsProps = {
  picture: PictureType;
  name: string;
  price: number;
  totalAmount: number;
  setTotalAmount: (amount: number) => void;
  addToCard: (item: Item) => void;
};

const Items: React.FC<ItemsProps> = ({ picture, name, price, totalAmount, setTotalAmount, addToCard }) => {
  const images = {
    cappucino: require("../../../assets/cappucino.jpg"),
    caramel: require("../../../assets/caramel.jpg"),
    honey: require("../../../assets/honey.jpg"),
    choclate: require("../../../assets/choclate.jpg"),
    espresso: require("../../../assets/espresso.jpg"),
    flat: require("../../../assets/flat.jpg"),
    london: require("../../../assets/london.jpg"),
  };

  const handleAddToCart = () => {
    setTotalAmount(totalAmount + price); // Update the total amount
    addToCard({ name, price }); // Add the item to the card
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={images[picture]} resizeMode="contain" />
      <View style={styles.description}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        <FontAwesome5 name="plus" color="#737B92" size={15} />
      </TouchableOpacity>
    </View>
  );
};
export default Items;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEF0F4",
    width: Dimensions.get("window").width - 20,
    height: 50,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  description: { flex: 1, justifyContent: "center", marginLeft: 20 },
  name: { fontSize: 15 },
  price: { color: "#737B92", fontSize: 12, fontFamily: "Helvetica_Neue_67_Medium_Condensed", marginTop: 3 },
  image: { width: 40, height: 40, margin: 5, borderRadius: 15 },
  button: {
    backgroundColor: "#ffffff",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
  },
});
