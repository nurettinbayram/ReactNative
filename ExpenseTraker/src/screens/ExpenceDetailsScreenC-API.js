import { StyleSheet, Text, View } from "react-native";
import ItemCard from "../components/ItemCard";
import CustumButton from "../components/CustumButton";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SHADOWS } from "../consts/consts";
import { ExpenseContext } from "../contextAPI/ExpenseProvider";
import { useContext, useState } from "react";
import CustumInput from "../components/CustumInput";

export default function ExpenceDetailsScreen({ route, navigation }) {
  const expenceId = route.params.expenceId;
  //-> Here, useSelector returns the list, and we can manipulate it.
  //-> We use find() because it returns the object itself,
  //-> while filter() returns an array containing the matching object(s).
  const expenseContext = useContext(ExpenseContext);

  const expence = expenseContext.listOfExpense.find(
    (exp) => exp.id === expenceId,
  );

  const [updateMode, setUpdateMode] = useState(false);
  const [desciption, setDesciption] = useState(expence?.desciption); //-If expense has value then look for description
  const [amount, setAmount] = useState(expence?.amount);

  //=> I. TIP: route.params?.expenceId --> IF THERE IS PARAM WE CAN CHECK expenceId OTHERWHISE PASS.
  //=> II. TIP: x = !!expenceId --> TWO EXPLANATION MARK (!) CONVERT VELUE TO BOOL VALUE
  //=> III. TIP: NAVIGATION HAS goBack() METHOD IT CLOSE CURRENT SCREEN AND NAVIGATE PREVIUSE SCR.
  //=> IV. TIP: 142 IS IMPORTANT

  function deleteExpenceHandler() {
    expenseContext.deleteExpense(expenceId);
  }

  function updateExpenceHandler() {
    expenseContext.updateExpense(expenceId, {
      desciption: desciption,
      amount: amount,
    });
    setUpdateMode(false);
  }

  function changeDesciption(value) {
    setDesciption(value);
  }
  function changeAmount(value) {
    setAmount(value);
  }

  if (!expence) {
    return (
      <View style={[styles.container, SHADOWS.sec]}>
        <Text style={[styles.text]}>
          <Ionicons name="warning" size={27} color={COLORS.frt} />
          The Expence Deleted!!
        </Text>
      </View>
    );
  }

  return (
    <View>
      <ItemCard data={expence} />

      {updateMode && (
        <View style={styles.updateInputs}>
          <CustumInput
            inMode="text"
            value={desciption}
            onChange={changeDesciption}
          />
          <CustumInput inMode="text" value={amount} onChange={changeAmount} />
        </View>
      )}

      <View style={styles.buttons}>
        {updateMode ? (
          <CustumButton onPress={updateExpenceHandler}>
            <Text>Submit</Text>
          </CustumButton>
        ) : (
          <>
            <CustumButton onPress={deleteExpenceHandler}>
              <Ionicons name="trash" size={24} color={COLORS.frt} />
            </CustumButton>
            <CustumButton onPress={() => setUpdateMode(true)}>
              <Ionicons name="pencil" size={24} color={COLORS.frt} />
            </CustumButton>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
  },

  container: {
    backgroundColor: COLORS.pri,
    marginHorizontal: 7,
    marginVertical: 10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    padding: 7,
    borderRadius: 20,
  },
  updateInputs: {
    alignItems: "center",
  },
});
