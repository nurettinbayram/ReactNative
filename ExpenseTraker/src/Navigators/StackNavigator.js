import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabsNavigator from "./BottomTabsNavigator";
import AddExpencesScreen from "../screens/AddExpencesScreenC-API";
import { COLORS } from "../consts/consts";
import ExpenceDetailsScreen from "../screens/ExpenceDetailsScreenC-API";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: "slide_from_bottom",
          // animation: "slide_from_bottom",
          presentation: "modal",
          animationTypeForReplace: "push",
          contentStyle: {
            backgroundColor: COLORS.bg,
          },
          headerStyle: {
            backgroundColor: COLORS.pri,
          },
        }}
      >
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabsNavigator}
          options={{
            headerShown: false,
            title: "Home",
          }}
        />
        <Stack.Screen
          name="AddExpences"
          component={AddExpencesScreen}
          options={{ title: "Add Expences" }}
        />
        <Stack.Screen
          name="ExpenceDetailsScreen"
          component={ExpenceDetailsScreen}
          options={{ title: "Expences Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
