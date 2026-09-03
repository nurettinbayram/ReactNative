import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";

export default function HomeScreen({ navigation }) {
  function pressHandler() {
    navigation.navigate("Form");
  }

  return (
    <View style={styles.container}>
      <Button buttonName="Fill Form" onPressHandler={pressHandler} />
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
