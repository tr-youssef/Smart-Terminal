import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import Items from "../components/Items/Items";
import React, { useState } from "react";
import Button from "../components/Button/Button";
import DropDownPicker from "react-native-dropdown-picker";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type Item = {
  name: string;
  price: number;
};
type RootStackParamList = {
  Library: undefined;
  Tap: { total: number };
};

const Library: React.FC = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [card, setCard] = useState<Item[]>([]);
  const [items, setItems] = useState([
    { label: "Coffee", value: "coffee" },
    { label: "Juice", value: "juice" },
  ]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("coffee");
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, "Library">>();

  const addToCard = (item: Item) => {
    setCard((prevCard) => [...prevCard, item]);
  };
  const handlePayment = () => {
    const total = totalAmount;
    navigation.navigate("Tap", { total });
  };
  return (
    <View>
      <View style={styles.dropdownContainer}>
        <TouchableOpacity style={styles.button} onPress={() => console.log("keyboard-arrow-down")}>
          <MaterialCommunityIcons name="tune-vertical" size={20} color="#737B92" />
        </TouchableOpacity>
        <DropDownPicker open={open} value={value} items={items} setOpen={setOpen} setValue={setValue} setItems={setItems} style={styles.dropdown} />
      </View>
      <View style={styles.createButton}>
        <Text style={styles.text}>Create Item</Text>
        <TouchableOpacity style={styles.buttonAdd} onPress={() => alert("Create Item")}>
          <FontAwesome5 name="plus" color="#737B92" size={15} />
        </TouchableOpacity>
      </View>
      <Items picture="cappucino" name="Capuccino" price={4.5} totalAmount={totalAmount} setTotalAmount={setTotalAmount} addToCard={addToCard} />
      <Items picture="caramel" name="Caramel Macchiato" price={4.8} totalAmount={totalAmount} setTotalAmount={setTotalAmount} addToCard={addToCard} />
      <Items picture="honey" name="Honey Americano" price={3.2} totalAmount={totalAmount} setTotalAmount={setTotalAmount} addToCard={addToCard} />
      <Items picture="choclate" name="Hot Chocolate" price={3.5} totalAmount={totalAmount} setTotalAmount={setTotalAmount} addToCard={addToCard} />
      <Items picture="espresso" name="Espresso" price={2.6} totalAmount={totalAmount} setTotalAmount={setTotalAmount} addToCard={addToCard} />
      <Items picture="flat" name="Flat White" price={4.0} totalAmount={totalAmount} setTotalAmount={setTotalAmount} addToCard={addToCard} />
      <Items picture="london" name="London Fog" price={3.2} totalAmount={totalAmount} setTotalAmount={setTotalAmount} addToCard={addToCard} />
      <View style={styles.lineButton}>
        <Button title={`Process $${totalAmount.toFixed(2)}`} color="#815af0" onPress={handlePayment} notification={card.length} />
      </View>
    </View>
  );
};

export default Library;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  lineButton: {
    flexDirection: "row",
    margin: 5,
  },
  dropdown: {
    backgroundColor: "#EEF0F4",
    borderWidth: 0,
    width: Dimensions.get("window").width - 80,
  },
  dropdownContainer: {
    width: Dimensions.get("window").width,
    padding: 10,
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#EEF0F4",
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  createButton: {
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#EEF0F4",
    marginHorizontal: 10,
  },
  buttonAdd: {
    backgroundColor: "#EEF0F4",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  text: {
    fontWeight: "bold",
    marginLeft: 5,
  },
});
