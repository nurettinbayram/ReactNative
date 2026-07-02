import { StyleSheet, View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function MealDetails({ duration, affordability, complexity }) {
  return (
    <View style={styles.detailsBox}>
      <Text style={styles.details}>
        <AntDesign name="check-circle" size={18} color="#946520" /> {duration}m
      </Text>
      <Text style={styles.details}>
        <AntDesign name="check-circle" size={18} color="#946520" />{" "}
        {affordability.toUpperCase()}
      </Text>
      <Text style={styles.details}>
        <AntDesign name="check-circle" size={18} color="#946520" />{" "}
        {complexity.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsBox: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
  },
  details: {
    fontSize: 18,
    marginHorizontal: 15,
    color: "#946520",
  },
});
