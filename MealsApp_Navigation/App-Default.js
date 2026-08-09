import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoryScreen from "./screens/CatagoryScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerStyle: { backgroundColor: "#3d2a0d" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#946520" },
            headerBackTitleStyle: { fontSize: 13 },
            headerTitleStyle: { fontSize: 20 },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoryScreen}
            options={{
              title: "All Categoreis",
            }}
          />
          <Stack.Screen name="MealOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#24180f",
    flex: 1,
  },
});
