import { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { FavoriteContext } from "../context/FavoriteContext";
import BookCard from "../components/BookCard";
import { BOOKS } from "../constants/data";

export default function FavoritesScreen() {
  const { ids } = useContext(FavoriteContext);

  //=> Here is important becouse we get favorete book object using id property
  const favoriteBooks = BOOKS.filter((book) => ids.includes(book.id));

  function favoriteGridHandler(itemData) {
    return <BookCard itemData={itemData.item} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteBooks}
        renderItem={favoriteGridHandler}
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
