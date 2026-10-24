//->
//=>
//-
//!
//?
//#
//&
///

import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./src/navigation/StackNavigator";
import ThemeProvider from "./src/context/ThemeContext";
import FavoriteContextProvider from "./src/context/FavoriteContext";
import CategoryContextProvider from "./src/context/CategoryContext";
import ReadContextProvider from "./src/context/ReadContext";

export default function App() {
  return (
    <ReadContextProvider>
      <CategoryContextProvider>
        <FavoriteContextProvider>
          <ThemeProvider>
            <StackNavigator />
          </ThemeProvider>
        </FavoriteContextProvider>
      </CategoryContextProvider>
    </ReadContextProvider>
  );
}

const styles = StyleSheet.create({});
