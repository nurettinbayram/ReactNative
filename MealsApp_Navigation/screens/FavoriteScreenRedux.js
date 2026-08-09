import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { COLORS } from "../utilities/contants";
import { useSelector } from "react-redux";

export default function FavoriteScreen() {
  const favoriteMealIds = useSelector((state) => state.favoreteMeals.ids);

  const favriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id),
  );

  if (favriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>
          There is no any Meal in your favorite list!!! Using Redux...
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
