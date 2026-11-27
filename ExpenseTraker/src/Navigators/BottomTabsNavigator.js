import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

import RecentScreen from "../screens/RecentScreenC-API";
import { COLORS } from "../consts/consts";
import PlusIcon from "../components/PlusIcon";
import AllExpences from "../screens/AllExpencesC-API";
import { StyleSheet } from "react-native";

const Tabs = createBottomTabNavigator();

export default function BottomTabsNavigator({ navigation }) {
  function handelAddExpences() {
    navigation.navigate("AddExpences");
  }
  return (
    <Tabs.Navigator
      //=> screenOptions={({navigation})=>({})} WE CAN USE SCREEN OPTIOINS LIKE THIS IT PROVIDE MULTIPLE USEFULL PROPS. WHATCH 136 4MIN
      screenOptions={{
        animation: "shift",
        headerStyle: {
          backgroundColor: COLORS.sec,
          // borderBottomWidth: 2,
          // borderBottomColor: COLORS.thr,
          // borderRadius: 20,
          // height: 200,
        },
        sceneStyle: {
          backgroundColor: COLORS.bg,
        },
        tabBarStyle: {
          backgroundColor: "rgba(137, 164, 130, 0.8)",
          position: "absolute",
          margin: 15,
          borderRadius: 30,
          height: 65,
          paddingTop: 5,
        },

        tabBarActiveTintColor: COLORS.frt,
        tabBarInactiveTintColor: COLORS.thr,
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "700",
        },
        headerRight: () => <PlusIcon onAddExpences={handelAddExpences} />,
        // headerTintColor: COLORS.bg,
      }}
    >
      <Tabs.Screen
        name="RecentExpenses"
        component={RecentScreen}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <Ionicons name="hourglass" size={30} color={color} />
            ) : (
              <Ionicons name="hourglass-outline" size={25} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="All Expences"
        component={AllExpences}
        options={{
          title: "All Expences",
          // tabBarLabel: "All",
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <Ionicons name="calendar-sharp" size={30} color={color} />
            ) : (
              <Ionicons name="calendar-outline" size={25} color={color} />
            ),
        }}
      />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({});
