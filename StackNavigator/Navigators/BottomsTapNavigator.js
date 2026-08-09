import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import DetailsScreen from "../screens/DetailsScreen";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

export default function BottomsTapNavigator() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Categoreis"
          component={CategoriesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="category" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="card-account-details-star"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
