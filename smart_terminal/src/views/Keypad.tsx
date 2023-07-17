import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Number from "../components/Number/Number";
import Button from "../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Keypad: undefined;
  Tap: { total: number };
};
const Keypad: React.FC = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [operator, setOperator] = useState<string | null>(null);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, "Keypad">>();

  const handleDigitPress = (digit: number) => {
    if (operator === null) {
      setPaymentAmount((prevPaymentAmount) => prevPaymentAmount * 10 + digit / 100);
    } else {
      setPaymentAmount((prevPaymentAmount) => prevPaymentAmount + digit / 100);
      setOperator(null);
    }
  };
  const handleOperatorPress = (op: string) => {
    setOperator(op);
    setTotalAmount((prevTotalAmount) => prevTotalAmount + paymentAmount);
    setPaymentAmount(0);
  };
  const handleClearPress = () => {
    setPaymentAmount(0);
    setTotalAmount(0);
    setOperator(null);
  };
  const handleBackspace = () => {
    let totalAmountCents = Math.round(paymentAmount * 100);
    totalAmountCents = Math.floor(totalAmountCents / 10);
    let newTotalAmount = totalAmountCents / 100;
    if (newTotalAmount < 0.01) {
      newTotalAmount = 0.0;
    }
    setPaymentAmount(newTotalAmount);
  };
  const handlePayment = () => {
    const total = totalAmount + paymentAmount;
    navigation.navigate("Tap", { total });
  };
  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.line}>
          <View style={styles.lineAmount}>
            <View style={styles.firstItem} />
            <View style={styles.centeredItem}>
              <Text style={styles.amount}>$ {operator ? totalAmount.toFixed(2) : paymentAmount.toFixed(2)}</Text>
            </View>
            <View style={styles.endItem}>
              <TouchableOpacity onPress={() => handleBackspace()}>
                <Image style={styles.backspace} source={require("../../assets/backspace.png")} resizeMode="contain" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.line}>
          <Number number={"1"} onPress={() => handleDigitPress(1)} variant />
          <Number number={"2"} onPress={() => handleDigitPress(2)} variant />
          <Number number={"3"} onPress={() => handleDigitPress(3)} variant />
        </View>
        <View style={styles.line}>
          <Number number={"4"} onPress={() => handleDigitPress(4)} variant />
          <Number number={"5"} onPress={() => handleDigitPress(5)} variant />
          <Number number={"6"} onPress={() => handleDigitPress(6)} variant />
        </View>
        <View style={styles.line}>
          <Number number={"7"} onPress={() => handleDigitPress(7)} variant />
          <Number number={"8"} onPress={() => handleDigitPress(8)} variant />
          <Number number={"9"} onPress={() => handleDigitPress(9)} variant />
        </View>
        <View style={styles.line}>
          <Number number={"C"} onPress={() => handleClearPress()} variant={false} />
          <Number number={"0"} onPress={() => handleDigitPress(0)} variant />
          <Number number={"+"} onPress={() => handleOperatorPress("+")} variant={false} />
        </View>
      </View>
      <View style={styles.lineButton}>
        <Button title={`Process $${totalAmount === 0 ? paymentAmount.toFixed(2) : totalAmount.toFixed(2)}`} color="#815af0" onPress={handlePayment} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  line: {
    flexDirection: "row",
    marginBottom: 5,
  },
  lineButton: {
    flexDirection: "row",
    margin: 5,
  },
  lineAmount: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  amount: {
    fontFamily: "Helvetica_Neue_Condensed_Bold",
    fontSize: 45,
    textAlign: "center",
  },
  backspace: {
    height: 30,
    width: 30,
  },
  centeredItem: {
    flex: 1,
  },
  firstItem: {
    width: 52,
  },
  endItem: {
    width: 52,
  },
});

export default Keypad;
