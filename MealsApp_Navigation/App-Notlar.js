import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

//? Class number 94 is about navigation and watch
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
          /// initialRouteName="MealsCategories" selected initial screen.
          initialRouteName="MealsCategories"
          ///Tum ekranlarda ortak olan ozellikler eklenir.
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
            ///Bu kisimda her sayfaya ozgu ozellikler eklenebiliyorken navigator kisminda tum sayfalar icin ortak olan ozellikler eklenebilir.
            options={{
              title: "All Categoreis",
            }}
          />
          <Stack.Screen
            name="MealOverview"
            component={MealsOverviewScreen}

            /*///Bu birinci yontem dimanik veriyi baska bir ekrana gonderme. burada fonksiyon kullanilmis.
            ///Bu durumun ikinci yontemi ise ilgili sayfaya gidip sayda navigation ile ilgili oldugu icin route ve 
            ///navigation propslarini alir navigation props uzerinden setOptions metodu ile bu durum cozulebilir.
            ///navigation.setOptions({title:dynamicTitle})
            options={({ route, navigation }) => {
              const catId = route.params.catagoryID;
              return {
                title: catId,
              };
            }} */
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
            ///Bu sekilde header bolumune bir button eklenebilir ancak bu button ilgili screende istedigimiz reaksiyonu
            ///vermez bunun yerine istedigimiz gibi kullanabilecegimiz bir olusturmamiz gerekiyor onunda yeri burasi degil.
            ///ilgili screen'e gidilerek orada boyle bir etkilesimli button olusturulmali. navigation.setOption kullanilarak.
            // options={{
            //   headerRight: () => (
            //     <Button title="Save" onPress={() => console.log("Pressed!!!")} />
            //   ),
            // }}
          />
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
