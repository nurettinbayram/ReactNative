import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={myStyles.screen}>
      <View style={myStyles.inputContainer}>
        <TextInput style={myStyles.inputText} placeholder="Enter your goals!" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List Of Goals</Text>
      </View>
    </View>
  );
}

const myStyles = StyleSheet.create({
  screen: {
    backgroundColor: "#f5c242",
    flex: 1,
    marginTop: 60,
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputText: {
    borderColor: "blue",
    borderWidth: 1,
    width: "70%",
    paddingStart: 5,
  },
});
