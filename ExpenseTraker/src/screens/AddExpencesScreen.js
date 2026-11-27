import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import CustumInput from "../components/CustumInput";
import { COLORS } from "../consts/consts";
import CustumButton from "../components/CustumButton";
import { useDispatch } from "react-redux";
import { addExpences } from "../redux/expencesSlice";

export default function AddExpencesScreen() {
  const [desciption, setDesciption] = useState("");
  const [amount, setAmount] = useState("");

  const dispatch = useDispatch();

  function saveExpenceHandler() {
    if (desciption && amount) {
      const now = new Date();

      dispatch(
        addExpences({
          newExpence: {
            desciption: desciption,
            amount: amount,
            date: now.toDateString(),
            id: now.getTime(),
          },
        }),
      );
      setAmount("");
      setDesciption("");
    } else {
      Alert.alert("Empty Input Warning", "Please fill the inputs feild!!!", [
        { text: "OK", onPress: () => console.log("ALERT") },
      ]);
    }
  }

  function descriptionOnChange(value) {
    setDesciption(value);
  }

  function amountOnChange(value) {
    setAmount(value);
  }

  return (
    <View style={styles.container}>
      <CustumInput
        inMode="text"
        placeholder="Enter Expences Description..."
        onChange={descriptionOnChange}
        value={desciption}
      />
      <View style={styles.amount}>
        <CustumInput
          inMode="numeric"
          placeholder="Enter Expences Amount..."
          onChange={amountOnChange}
          value={amount}
        />
        <View style={styles.dolorIconCon}>
          <Text style={styles.dolorIcon}>$</Text>
        </View>
      </View>
      <CustumButton onPress={saveExpenceHandler}>Add</CustumButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
  },
  amount: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dolorIconCon: {
    position: "absolute",
    right: 1,

    backgroundColor: COLORS.sec,
    padding: 7,
    marginTop: 15,
    borderEndEndRadius: 15,
    borderTopEndRadius: 15,
    borderStartWidth: 1,
  },
  dolorIcon: {
    fontSize: 20,
    fontWeight: "700",
  },
});
