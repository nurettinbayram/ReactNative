import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function HomeScreen({ navigation, route }) {
  function onPressHandler() {
    navigation.navigate("Categories");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>HomeScreen</Text>
      <Button title="Categories" onPress={onPressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    color: "black",
  },
});
