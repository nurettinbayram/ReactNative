import { Alert, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import CustumInput from "../components/CustumInput";
import { COLORS } from "../consts/consts";
import CustumButton from "../components/CustumButton";
import { ExpenseContext } from "../contextAPI/ExpenseProvider";
import { useContext } from "react";

export default function AddExpencesScreen() {
  //=>152 class about how to handle multiple input using one useState
  const [desciption, setDesciption] = useState("");
  const [amount, setAmount] = useState("");

  const expenseContext = useContext(ExpenseContext);

  function saveExpenceHandler() {
    if (desciption && amount) {
      expenseContext.addExpense(desciption, amount);
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
        // autoCapitilize="words" //-Look this prop.
      />
      <View style={styles.amount}>
        <CustumInput
          inMode="decimal-pad"
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
