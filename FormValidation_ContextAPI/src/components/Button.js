import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { COLOR } from "../utils/constant";

export default function Button({ buttonName, onPressHandler }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) =>
          pressed ? [styles.btn, styles.btnPressed] : styles.btn
        }
      >
        <View>
          <Text style={styles.btnText}>{buttonName}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    // justifyContent:'center',
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 5,
    shadowOpacity: 0.8,
    // overflow: Platform.OS === "ios" ? "hidden" : "",
    elevation: 5,
  },
  btnText: {
    fontSize: 17,
    textAlign: "center",
  },
  btn: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLOR.second,
    width: 100,
    borderRadius: 10,
  },
  btnPressed: {
    backgroundColor: COLOR.thirth,
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 3,
    shadowOpacity: 0.5,
    // overflow: Platform.OS === "ios" ? "hidden" : "",
    elevation: 3,
    transform: [{ scale: 0.94 }],
  },
});
