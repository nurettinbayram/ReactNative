import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
/// Provider react-redux tarafindan dahil edilir. tum yapiyi sarar
import { Provider } from "react-redux";

import CategoryScreen from "./screens/CatagoryScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen-Redux";
// import FavoriteScreen from "./screens/FavoriteScreen";
import FavoriteScreen from "./screens/FavoriteScreenRedux";
import InformationScreen from "./screens/InformationScreen";
import FavoritesContextProvider from "./store/context/favorites-context";
import { store } from "./store/redux/store";

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
          backgroundColor: "rgba(61, 42, 13, 0.9)",
          position: "absolute",
          bottom: 20,
          start: 20,
          end: 20,
          height: 55,
          paddingBottom: 0,
          borderRadius: 20,
          overflow: "hidden",
        },
        sceneStyle: { backgroundColor: "#c5ad89" },
        // tabBarLabelPosition: "beside-icon", //->lable position
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
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tap.Navigator>
  );
}

//! -----------------------REDUX-----------------------

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* //? -TUM YAPIYI OLUSTURDUGUMUZ Provider ILE SARMALADIK. */}
      <Provider store={store}>
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
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#24180f",
    flex: 1,
  },
});
