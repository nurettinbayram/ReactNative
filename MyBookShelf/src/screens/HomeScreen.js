import { FlatList, StyleSheet, Text, View, Button } from "react-native";
import BookCard from "../components/BookCard";
import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";
import CategoryButton from "../components/CategoryButton";
import { ThemeContext } from "../context/ThemeContext";

export default function HomeScreen() {
  const { books, categoryHandler } = useContext(CategoryContext);
  const { theme } = useContext(ThemeContext);

  function cardGridHandler(itemData) {
    return <BookCard itemData={itemData.item} />;
  }

  return (
    <View style={styles.container}>
      <View style={[styles.categoryButton, { borderColor: theme.thr }]}>
        <CategoryButton title="All" onCategory={() => categoryHandler("All")} />
        <CategoryButton
          title="Business"
          onCategory={() => categoryHandler("Business")}
        />
        <CategoryButton
          title="Software"
          onCategory={() => categoryHandler("Software")}
        />
        <CategoryButton
          title="Productivity"
          onCategory={() => categoryHandler("Productivity")}
        />
      </View>
      <FlatList
        data={books}
        //-We use a function inside the renderItem prop because it allows us to handle multiple behaviors for each item.
        //- The renderItem callback automatically provides the item data to the function.
        // renderItem={(itemData) => <BookCard itemData={itemData.item} />}
        renderItem={cardGridHandler}
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
    justifyContent: "center",
    // flexWrap: "wrap", //->Normal hizalamada sondaki sigmayinca asagiya gitmesini saglar
  },
  categoryButton: {
    flexDirection: "row",
    marginHorizontal: 8,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    borderBottomWidth: 2,

    marginBottom: 3,
    paddingBottom: 3,
  },
});
