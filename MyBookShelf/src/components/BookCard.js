import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { BOOKS } from "../constants/data";
import { DarkTheme } from "../constants/const";
import FavoriteButton from "./FavoriteButton";

import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FavoriteContext } from "../context/FavoriteContext";

export default function BookCard({ itemData }) {
  const { theme } = useContext(ThemeContext);
  const { ids, addFavorite, removeFavorite } = useContext(FavoriteContext);

  const navigation = useNavigation();

  function navigateBookDetailsHandler() {
    navigation.navigate("BookDetails", { itemId: itemData.id });
  }

  return (
    <Pressable
      style={[styles.container, { backgroundColor: theme.thr }]}
      onPress={navigateBookDetailsHandler}
    >
      <View>
        <Image style={styles.img} source={BOOKS[0].image} />
      </View>
      <View style={styles.content}>
        <Text style={[styles.txt, styles.txtTitle]}>{itemData.title}</Text>
        <Text style={styles.txt}>{itemData.author}</Text>
        <Text style={styles.txt}>{itemData.category}</Text>
      </View>
      <View style={[styles.favoriteBtn, { backgroundColor: theme.bgBlur }]}>
        <FavoriteButton id={itemData.id} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: DarkTheme.thr,
    width: "30%",
    padding: 5,
    borderWidth: 2,
    margin: 5,
    borderRadius: 5,
    shadowColor: DarkTheme.bg,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  img: {
    height: 120,
    width: 120,
  },
  favoriteBtn: {
    position: "absolute",
    right: 5,
    top: 5,

    padding: 5,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  },
  content: {
    marginTop: 5,
  },
  txt: {
    fontWeight: "600",
    marginBottom: 5,
  },
  txtTitle: { fontWeight: "800", fontSize: 15, borderBottomWidth: 1 },
});
