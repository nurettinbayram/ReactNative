import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import DataScreen from "./src/screens/DataScreen";
import FormScreen from "./src/screens/FormScreenUseHooks";
import EditScreen from "./src/screens/EditScreen";
import { COLOR } from "./src/utils/constant";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import DataContextProvider from "./src/Context-API/DataContextProvider";

const Stack = createNativeStackNavigator();
const Tap = createBottomTabNavigator();

function TapNavigator() {
  return (
    <Tap.Navigator
      screenOptions={{
        sceneStyle: {
          backgroundColor: COLOR.bg, ///Screen Content Color
        },
        headerStyle: { backgroundColor: COLOR.primary }, //header bg
        headerTintColor: COLOR.thirth, //header title color
        headerTitleStyle: { fontSize: 22 }, //Header title style
        tabBarStyle: { backgroundColor: COLOR.primary, height: 70 }, // Bottom style
        tabBarLabelStyle: {
          fontSize: 14,
          color: COLOR.second,
          fontWeight: "600",
        },
        tabBarActiveTintColor: COLOR.thirth,
        tabBarInactiveTintColor: COLOR.second,
        // tabBarActiveBackgroundColor: COLOR.second,
      }}
    >
      <Tap.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home Page",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tap.Screen
        name="Data"
        component={DataScreen}
        options={{
          title: "Data Page",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="database" size={size} color={color} />
          ),
        }}
      />
      <Tap.Screen
        name="Edit"
        component={EditScreen}
        options={{
          title: "Edit Page",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="edit" size={size} color={color} />
          ),
        }}
      />
    </Tap.Navigator>
  );
}

export default function App() {
  return (
    <DataContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: { backgroundColor: COLOR.bg }, // page style
            headerBackTitleStyle: { fontSize: 15 }, // top left back icon style
            headerStyle: { backgroundColor: COLOR.primary }, //header bg
            headerTintColor: COLOR.thirth, //header title color
            headerTitleStyle: { fontSize: 22 }, //Header title style
          }}
        >
          <Stack.Screen
            name="Main"
            component={TapNavigator} //#Tap Navigator main screen
            options={{ headerShown: false }}
          />
          {/* //# if we need to dive in more page  we can difine new screen here.*/}
          <Stack.Screen name="Form" component={FormScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
