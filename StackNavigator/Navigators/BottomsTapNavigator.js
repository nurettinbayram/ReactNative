import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import DetailsScreen from "../screens/DetailsScreen";

const BottomTab = createBottomTabNavigator();

export default function BottomsTapNavigator() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Home" component={HomeScreen} />
        <BottomTab.Screen name="Categoreis" component={CategoriesScreen} />
        <BottomTab.Screen name="Details" component={DetailsScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
