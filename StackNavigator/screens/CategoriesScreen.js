import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function CategoriesScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>CategoriesScreen</Text>
      <Button title="Details" onPress={() => navigation.navigate("Details")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
