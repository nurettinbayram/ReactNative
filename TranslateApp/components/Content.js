import { StyleSheet, View, Text } from "react-native";

export default function Content({ content }) {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.contentTxt}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  contentTxt: {
    fontSize: 30,
    fontFamily: "DM-Sans",
  },
});
