import StackNavigator from "./src/Navigators/StackNavigator";

import { StatusBar } from "expo-status-bar";
import ExpenseContextProvider from "./src/contextAPI/ExpenseProvider";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <ExpenseContextProvider>
        <StackNavigator />
      </ExpenseContextProvider>
    </>
  );
}
