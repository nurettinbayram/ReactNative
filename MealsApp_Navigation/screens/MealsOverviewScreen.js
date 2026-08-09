import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";
import { useEffect, useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  ///CategoryScreen'den gonderilen obje route yardimi ile burada ele alinir.
  const catId = route.params.catagoryID;

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0,
  );

  // ///Sayfa ozelliklerini useEffect icinde tanimlamamiz dogru olur aksi taktirde uyari verir
  ///useEffect component yuklendikten sonra tetiklendigi icin animasyon gecisi sirasinda baslik degisiyor buda guzel bir goruntu vermuyor.
  ///bunun yerine useLayoutEffect kullanilarak component yuklenmeden once calisip degerler belirlenir.
  // useEffect(() => {
  //   ///find method true false donderir buldugu id ile sonuna title ekleyerek ilgili sonucun title elde edilir dinamik bir sekilde.
  //   const categoryTitle = CATEGORIES.find(
  //     (category) => category.id === catId,
  //   ).title;

  //   ///navigation.setOptions ile sayfa ozellikleri set edilebilir.
  //   navigation.setOptions({ title: categoryTitle });
  // }, [catId, navigation]);

  ///Sayfa ozelliklerini useEffect icinde tanimlamamiz dogru olur aksi taktirde uyari verir
  useLayoutEffect(() => {
    ///find method true false donderir buldugu id ile sonuna title ekleyerek ilgili sonucun title elde edilir dinamik bir sekilde.
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId,
    ).title;

    ///navigation.setOptions ile sayfa ozellikleri set edilebilir.
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  return <MealsList items={displayMeals} />;
}

export default MealsOverviewScreen;
