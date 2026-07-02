import { StyleSheet } from "react-native";

import StackNavigator from "./Navigators/StackNavigator";
import BottomsTapNavigator from "./Navigators/BottomsTapNavigator";

export default function App() {
  return <BottomsTapNavigator />;
}

const styles = StyleSheet.create({});
