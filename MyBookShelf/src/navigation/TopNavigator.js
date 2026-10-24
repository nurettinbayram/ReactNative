import { StyleSheet, Button } from "react-native";
import { useContext } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import FavoriteScreen from "../screens/FavoritesScreen";
import ProfileScreen from "../screens/ProfileScreen";

import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ThemeContext } from "../context/ThemeContext";
import ThemeIcon from "../components/ThemeIcon";

const Top = createBottomTabNavigator();

export default function TopNavigator() {
  const { mode, setMode, theme } = useContext(ThemeContext);

  //- We dont use NavigationContainer component becouse it already define in up navigator where in StackNavigator
  return (
    <Top.Navigator
      screenOptions={{
        sceneStyle: { backgroundColor: theme.pri },
        headerStyle: { backgroundColor: theme.bg },
        headerTintColor: theme.wht,
        tabBarStyle: {
          // backgroundColor: theme.bg,
          backgroundColor: theme.bgBlur,
          borderTopWidth: 0,
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 10,
          borderRadius: 30,
          shadowColor: theme.bg,
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.85,
          shadowRadius: 10,
          height: 70,
          marginHorizontal: 15,
          paddingHorizontal: 5,
          paddingTop: 5,
        },
        tabBarActiveTintColor: theme.thr,
        tabBarInactiveTintColor: theme.pri,
        tabBarLabelStyle: { fontSize: 13, fontWeight: "800", marginTop: 5 },
        // tabBarBadge: "hi", //buton uzerinde bildiri isareti
        headerShown: true, //Title
        tabBarShowLabel: true, //label visiblity --> tabBarLabelVisibilityMode: "unlabeled",
        headerRight: () => <ThemeIcon />, //-Theme Icon Added right top.
      }}
    >
      <Top.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <Entypo name="home" size={30} color={color} />
            ) : (
              <AntDesign name="home" size={25} color={color} />
            ),
        }}
      />
      <Top.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons
              name={focused ? "favorite" : "favorite-border"}
              size={focused ? 30 : 25}
              color={color}
            />
          ),
        }}
      />
      <Top.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name={
                focused
                  ? "card-account-details"
                  : "card-account-details-outline"
              }
              size={focused ? 30 : 25}
              color={color}
            />
          ),
        }}
      />
    </Top.Navigator>
  );
}

const styles = StyleSheet.create({});
