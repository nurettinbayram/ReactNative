import { StyleSheet, Button, View, FlatList, Text } from "react-native";
import { useContext } from "react";
import ItemCard from "../components/ItemCard";
import Total from "../components/Total";
import { ExpenseContext } from "../contextAPI/ExpenseProvider";

export default function AllExpences({ navigation }) {
  const expenseContext = useContext(ExpenseContext);

  const expences = expenseContext.listOfExpense;

  return (
    <View style={styles.container}>
      <Total listOfExpences={expences} text="Total" />
      <FlatList
        data={expences}
        renderItem={(itemData) => <ItemCard data={itemData.item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
