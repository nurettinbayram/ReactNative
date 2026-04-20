import { Pressable, Text, StyleSheet } from "react-native";
import Colors from "../../constans/Color";

export default function PrimaryButton(props) {
  return (
    <>
      <Pressable
        onPress={() => props.onPress()}
        // 53. ders 12. dakkikayi bizle burayi cok iyi anlatiyor KESIN IZLE NOT AL
        // style birden fazla deger alacaksa array seklinde alabilir burada sirasina dikkat edelim
        style={({ pressed }) =>
          pressed ? [styles.button, styles.buttonPressed] : styles.button
        }
      >
        <Text style={styles.btnTxt}>{props.children}</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.secondary500,
    margin: 10,
    padding: 10,
    borderRadius: 13,
    shadowColor: "black",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
  },
  buttonPressed: {
    backgroundColor: "gray",
    shadowOffset: { width: -3, height: -3 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  btnTxt: {
    fontSize: 18,
    color: Colors.primary500,
    fontWeight: "700",
    textAlign: "center",
  },
});
