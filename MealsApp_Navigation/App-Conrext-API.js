import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Entypo } from "@expo/vector-icons";

import CategoryScreen from "./screens/CatagoryScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreenContext-API";
import FavoriteScreen from "./screens/FavoriteScreenContext-API";
import InformationScreen from "./screens/InformationScreen";
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Tap = createBottomTabNavigator();

function TapNavigator() {
  return (
    <Tap.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#3d2a0d" },
        headerTintColor: "white",
        headerBackTitleStyle: { fontSize: 13 },
        headerTitleStyle: { fontSize: 20 },
        tabBarActiveBackgroundColor: "#c59d61",
        tabBarActiveTintColor: "black",
        tabBarStyle: {
          backgroundColor: "#3d2a0d",
        },
      }}
    >
      <Tap.Screen
        name="MealsCategories"
        component={CategoryScreen}
        options={{
          title: "Categories",
          ///Bu ozellik otomatik size ve color aliyor.
          tabBarIcon: ({ color, size }) => (
            <Ionicons size={size} color={color} name="list" />
          ),
        }}
      />
      <Tap.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          title: "Favorite",
          tabBarIcon: ({ color, size }) => (
            <Ionicons size={size} color={color} name="star" />
          ),
        }}
      />
      <Tap.Screen
        name="Information"
        component={InformationScreen}
        options={{
          title: "Information",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="info-with-circle" size={size} color={color} />
          ),
        }}
      />
    </Tap.Navigator>
  );
}

//! -----------------------CONTEXT API-----------------------

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* //? -TUM YAPIYI OLUSTURDUGUMUZ CONTEXT ILE SARMALADIK. */}
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#3d2a0d" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#946520" },
              headerBackTitleStyle: { fontSize: 13 },
              headerTitleStyle: { fontSize: 20 },
            }}
          >
            <Stack.Screen
              name="TapScreen"
              component={TapNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="MealOverview" component={MealsOverviewScreen} />
            <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#24180f",
    flex: 1,
  },
});
