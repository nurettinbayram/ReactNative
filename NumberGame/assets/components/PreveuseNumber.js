import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constans/Color";

export default function PreviuseNumber(props) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.txtNumber}>
          <Text style={styles.txtNum}>#{props.itemData.index + 1}</Text>
        </View>
        <View style={styles.txtText}>
          <Text style={styles.text}>Opponent's Guess</Text>
        </View>
        <View style={styles.txtNumber}>
          <Text style={styles.txtNum}>{props.itemData.item.num}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "tomato",
    marginVertical: 7,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
  },
  text: {
    fontSize: 17,
    fontFamily: "open-sans",
  },
  txtNumber: {
    padding: 3,
    backgroundColor: Colors.secondary500,
    borderRadius: "50%",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  txtNum: {
    color: Colors.primary500,
    fontSize: 17,
    fontFamily: "open-sans",
  },
  txtText: {
    justifyContent: "center",
    alignItems: "center",
  },
});
