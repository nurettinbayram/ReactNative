import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CategoriesScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ textAlign: "center" }}>CategoriesScreen</Text>
      <Button title="Details" onPress={() => navigation.navigate("Details")} />
    </View>
  );
}

const styles = StyleSheet.create({});
