import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SHADOWS } from "../consts/consts";

export default function ItemCard({ data }) {
  const navigation = useNavigation();

  function cardPressHandler() {
    navigation.navigate("ExpenceDetailsScreen", { expenceId: data.id });
  }

  return (
    <Pressable
      style={[styles.container, SHADOWS.sec]}
      onPress={cardPressHandler}
    >
      <View style={styles.details}>
        <Text style={[styles.desciption, styles.text]}>{data.desciption}</Text>
        <Text style={[styles.amount, styles.text]}>
          ${parseFloat(data.amount).toFixed(2)}
        </Text>
      </View>
      <View style={styles.date}>
        {data.edit ? (
          <Text style={styles.dateText}>Edited</Text>
        ) : (
          <Text></Text>
        )}
        <Text style={styles.dateText}>{data.date}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.pri,
    marginHorizontal: 7,
    marginVertical: 10,
    borderRadius: 15,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
  },
  amount: {
    backgroundColor: COLORS.sec,
    padding: 5,
    borderRadius: 20,
    minWidth: 100,
    textAlign: "end",
  },
  date: {
    marginTop: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.sec,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    padding: 3,
    paddingHorizontal: 10,
  },
  dateText: {
    fontWeight: "600",
    fontSize: 13,
  },
});
