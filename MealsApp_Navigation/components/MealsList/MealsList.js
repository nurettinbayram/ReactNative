import { StyleSheet, Text, View, FlatList } from "react-native";

import MealItem from "./MealItem";

export default function MealsList({ items }) {
  function renderMealItems(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
      mealId: item.id,
    };

    ///Bu sekilde birden fazla props varsa bir objec yapip ...objectName seklinde componente verebiliriz.
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItems}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
