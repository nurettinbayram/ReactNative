import { Button, StyleSheet, Text, View } from "react-native";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";

export default function HomeScreen({ navigation, route }) {
  function onPressHandler() {
    navigation.navigate("Categoreis");
  }
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Ionicons name="home" color="black" size={24} />
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
});
