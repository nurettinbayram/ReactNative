import { StyleSheet, Button, View, FlatList } from "react-native";
import ItemCard from "../components/ItemCard";
import Total from "../components/Total";
import { RECENTTIME, SHADOWS } from "../consts/consts";
import { useState, useEffect, useContext } from "react";
import { ExpenseContext } from "../contextAPI/ExpenseProvider";

export default function RecentScreen({ navigation }) {
  const currentTime = new Date().getTime();
  const expencesContext = useContext(ExpenseContext);

  const expences = expencesContext.listOfExpense.filter(
    (exp) => currentTime - exp.id < RECENTTIME,
  );

  //=>Here we render the component for every second, because we need to update recent expences.
  const [currentStateTime, setCurrentStateTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStateTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Total listOfExpences={expences} text="Last 7 days" />
      <FlatList
        data={expences}
        renderItem={(itemData) => <ItemCard data={itemData.item} />}
        keyExtractor={(item) => item.id}
      />
      {/* <View style={styles.xx}></View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // xx: {
  //   width: 200,
  //   height: 200,
  //   backgroundColor: "blue",
  //   marginBottom: 300,
  //   ...SHADOWS.frt,//=>Keep in mind
  // },
});
