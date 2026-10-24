import { StyleSheet } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import TopNavigator from "./TopNavigator";
import BookDetails from "../screens/BookDetails";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const { theme } = useContext(ThemeContext);

  //->Here we set up the default theme colors
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: theme.thr,
      background: theme.bg,
      card: theme.bgBlur,
      text: theme.wht,
      border: "transparent",
      notification: theme.sec,
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: theme.bg },
          headerTintColor: theme.sec,
          headerTitleStyle: { fontSize: 19, fontWeight: "700" },
          headerShadowVisible: false,
          contentStyle: { backgroundColor: theme.pri },
          animation: "slide_from_bottom",
        }}
      >
        <Stack.Screen
          name="TopNavigator"
          component={TopNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BookDetails"
          component={BookDetails}
          options={{
            title: "Book Details",
            presentation: "modal",
            // animation: "slide_from_right",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
