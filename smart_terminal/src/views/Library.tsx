import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const Library = () => {
  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: "red" }}>
      <View style={{ flex: 1, backgroundColor: "blue" }}>
        <Text>Library</Text>
      </View>
    </SafeAreaView>
  );
};

export default Library;

const styles = StyleSheet.create({});
