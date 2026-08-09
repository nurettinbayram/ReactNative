import { registerRootComponent } from "expo";

// import App from './App';
// import App from "./App-Conrext-API";
import App from "./App-Redux";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
