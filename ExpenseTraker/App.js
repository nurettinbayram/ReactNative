import StackNavigator from "./src/Navigators/StackNavigator";

import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    </>
  );
}
