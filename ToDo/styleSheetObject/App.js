import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native/types_generated/index";

export default function App() {
  return (
    <View style={titleStyles.screen}>
      <View style={styles.container}>
        <Text>123</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.txt}>Todo List</Text>
        <Button title="Click me" />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const titleStyles = StyleSheet.create({
  title: {
    borderColor: "red",
    borderWidth: 3,
    padding: 4,
    fontSize: 30,
    fontWeight: "900",
    marginTop: 70,
    textAlign: "center",
  },
  screen: {
    backgroundColor: "#42e3f5",
    flex: 1,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    borderColor: "green",
    borderWidth: 2,
    padding: 5,
    margin: 5,
  },
});
