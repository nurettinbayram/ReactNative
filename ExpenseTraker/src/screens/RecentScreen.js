import { StyleSheet, Button, View, FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import ItemCard from "../components/ItemCard";
import Total from "../components/Total";
import { RECENTTIME } from "../consts/consts";
import { useState, useEffect } from "react";

export default function RecentScreen({ navigation }) {
  //=>Here, we get the expenses list from the Redux reducer and filter it based on time.
  const currentTime = new Date().getTime();
  const expences = useSelector((state) => state.expences.expencesList).filter(
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
