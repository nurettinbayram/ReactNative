import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import MealList from "../components/MealList";
import { useContext, useLayoutEffect } from "react";
import IconBotton from "../components/IconButton";
import { COLORS } from "../utilities/contants";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorite";
import { FavoritesContext } from "../store/context/favorites-context";

export default function MealDetailsScreen({ route, navigation }) {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const mealId = route.params.mealId;
  ///find direct obje dondururken filter bir liste icinde obje dondurur.
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  }

  ///App.js te screende olusturdugumuz buttonnun alternatifi burada olusturuldu. ve hatta ekran fonksiyonlara erisim
  ///saglayabildigi icin cok daha etkili oluyor.
  useLayoutEffect(() => {
    {
      navigation.setOptions({
        headerRight: () => {
          return (
            <IconBotton
              onPressed={changeFavoriteStatusHandler}
              icon={mealIsFavorite ? "star" : "star-outlined"}
              color="white"
            />
          );
        },
      });
    }
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={[styles.subTitle, styles.title]}>
          {selectedMeal.title}
        </Text>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <View style={styles.subContainer}>
          <MealDetails
            duration={selectedMeal.duration}
            affordability={selectedMeal.affordability}
            complexity={selectedMeal.complexity}
          />
        </View>
        <View style={styles.subContainer}>
          {/* Burada flatList kullanabilirdik ancak liste cok uzun olmadigi icin  map tercih edildi */}
          <Text style={styles.subTitle}>Ingredients</Text>
          <MealList data={selectedMeal.ingredients} />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.subTitle}>Steps</Text>
          <MealList data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 20,
    marginBottom: 30,
    padding: 5,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 270,
    borderRadius: 8,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: 10,
    marginVertical: 10,
  },
  subContainer: {
    borderBottomWidth: 2,
    borderColor: COLORS.lightBrown,
    margin: 5,
    padding: 7,
    width: "90%",
    alignItems: "center",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "700",
    margin: 6,
    padding: 5,
    backgroundColor: COLORS.darkBrown,
    width: "100%",
    textAlign: "center",
    color: "white",
    borderRadius: 8,
  },
});
