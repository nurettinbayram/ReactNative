import { StyleSheet, View, Text } from "react-native";

export default function MealList({ data }) {
  return data.map((dataPointer) => (
    <View style={styles.containerList} key={dataPointer}>
      <Text style={styles.content}>- {dataPointer}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  containerList: {
    width: "100%",
    backgroundColor: "#946520",
    marginVertical: 3,
    paddingVertical: 3,
    borderRadius: 6,
  },
  content: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
});
