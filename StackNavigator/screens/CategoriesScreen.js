import { StyleSheet, Text, View, Button } from "react-native";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";

export default function CategoriesScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>CategoriesScreen</Text>
      <MaterialIcons name="category" size={24} color="black" />
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
