import { StyleSheet, Text, View } from "react-native";
import ItemCard from "../components/ItemCard";
import { useDispatch, useSelector } from "react-redux";
import CustumButton from "../components/CustumButton";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SHADOWS } from "../consts/consts";
import { deleteExpence } from "../redux/expencesSlice";

export default function ExpenceDetailsScreen({ route, navigation }) {
  const expenceId = route.params.expenceId;
  //-> Here, useSelector returns the list, and we can manipulate it.
  //-> We use find() because it returns the object itself,
  //-> while filter() returns an array containing the matching object(s).
  const expence = useSelector((state) => state.expences.expencesList).find(
    (exp) => exp.id === expenceId,
  );

  //=> I. TIP: route.params?.expenceId --> IF THERE IS PARAM WE CAN CHECK expenceId OTHERWHISE PASS.
  //=> II. TIP: x = !!expenceId --> TWO EXPLANATION MARK (!) CONVERT VELUE TO BOOL VALUE
  //=> III. TIP: NAVIGATION HAS goBack() METHOD IT CLOSE CURRENT SCREEN AND NAVIGATE PREVIUSE SCR.
  //=> IV. TIP: 142 IS IMPORTANT

  const dispatch = useDispatch();
  function deleteExpenceHandler() {
    dispatch(deleteExpence({ id: expence.id }));
  }

  function updateExpenceHandler() {
    console.log("UDATEDE");
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

      <View style={styles.buttons}>
        <CustumButton onPress={deleteExpenceHandler}>
          <Ionicons name="trash" size={24} color={COLORS.frt} />
        </CustumButton>
        <CustumButton onPress={updateExpenceHandler}>
          <Ionicons name="pencil" size={24} color={COLORS.frt} />
        </CustumButton>
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
});
