import { StyleSheet, Text, View, TextInput } from "react-native";
import { COLOR } from "../utils/constant";
import { useRef, useState } from "react";

// Kısaca:
// Input değerini takip etmek → useState
// Input'a focus() vermek → useRef
// Input'u temizlemek/focuslamak → useRef

export default function Input({
  name,
  labelName,
  onChangeText,
  value,
  plaseholder,
  onBlurHandler,
  hasError,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.label}>{labelName}</Text>
      </View>
      <View style={styles.inputBox}>
        <TextInput
          style={hasError ? [styles.input, styles.inputErr] : styles.input}
          onChangeText={onChangeText}
          value={value}
          placeholder={plaseholder}
          ///onBlurHandler method take name props and name props related to their input name.
          onBlur={() => onBlurHandler(name)}
          keyboardType="email-address"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ///Align next each other.
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  textBox: { width: 100 },
  inputBox: {
    flex: 1,
  },
  input: {
    borderWidth: 2,
    borderColor: COLOR.second,
    padding: 4,
    borderRadius: 8,
  },
  inputErr: {
    borderColor: COLOR.error,
  },
  label: {
    fontSize: 18,
    fontWeight: "700",
  },
});
