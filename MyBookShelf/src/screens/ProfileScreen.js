import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import { useContext } from "react";
import { ReadContext } from "../context/ReadContext";
import { BOOKS } from "../constants/data";
import BookCard from "../components/BookCard";

//=>The perpuse of this page has been changing to Read screen.
export default function ProfileScreen() {
  const { ids } = useContext(ReadContext);

  const readBooks = BOOKS.filter((book) => ids.includes(book.id));

  function readGridHandler(itemData) {
    return <BookCard itemData={itemData.item} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={readBooks}
        renderItem={readGridHandler}
        keyExtractor={(item) => item.id}
        numColumns={3} //->3'erli yap
        columnWrapperStyle={{
          justifyContent: "center",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    // flexWrap: "wrap", //->Normal hizalamada sondaki sigmayinca asagiya gitmesini saglar
  },
});
