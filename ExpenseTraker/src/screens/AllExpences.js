import { StyleSheet, Button, View, FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import ItemCard from "../components/ItemCard";
import Total from "../components/Total";

export default function AllExpences({ navigation }) {
  const expences = useSelector((state) => state.expences.expencesList);

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
