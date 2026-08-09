import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { COLORS } from "../utilities/contants";

export default function FavoriteScreen() {
  const favoritsMealsCtx = useContext(FavoritesContext);

  const favriteMeals = MEALS.filter((meal) =>
    favoritsMealsCtx.ids.includes(meal.id),
  );

  if (favriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>
          There is no any Meal in your favorite list!!! Using Context-API...
        </Text>
      </View>
    );
  }

  return <MealsList items={favriteMeals} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
  },
  txt: {
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
    color: COLORS.lightBrown,
  },
});
