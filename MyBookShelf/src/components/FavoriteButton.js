import { Pressable, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FavoriteContext } from "../context/FavoriteContext";

export default function FavoriteButton({ id }) {
  const { theme } = useContext(ThemeContext);
  const { ids, addFavorite, removeFavorite } = useContext(FavoriteContext);

  const bookIsFavorite = ids.includes(id);

  function changeFavoriteStatusHandler() {
    if (bookIsFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  }

  return (
    <Pressable onPress={() => changeFavoriteStatusHandler()}>
      {bookIsFavorite ? (
        <MaterialIcons name="favorite" size={20} color={theme.thr} />
      ) : (
        <MaterialIcons name="favorite-outline" size={20} color={theme.thr} />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({});
