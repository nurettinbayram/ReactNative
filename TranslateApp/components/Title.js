import { StyleSheet, View, Text } from "react-native";

export default function Title({ title }) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleTxt}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 30,
  },
  titleTxt: {
    fontSize: 40,
    fontFamily: "open-sans-bold",
  },
});
