import { StyleSheet, TextInput, View } from "react-native";
import { COLORS, SHADOWS } from "../consts/consts";

export default function CustumInput({ inMode, placeholder, onChange, value }) {
  return (
    <View style={[styles.inputContanir, SHADOWS.sec]}>
      <TextInput
        style={[styles.input, styles.descInput]}
        placeholder={placeholder}
        keyboardType={inMode}
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    width: "100%",
  },
  inputContanir: {
    width: "90%",
    borderWidth: 1,
    marginTop: 15,
    padding: 7,
    paddingHorizontal: 13,
    borderRadius: 15,
    backgroundColor: COLORS.pri,
    borderColor: COLORS.thr,
  },
  descInput: {},
});
