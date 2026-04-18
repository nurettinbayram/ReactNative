import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { colors } from "./contstants/Colors";
import { LinearGradient } from "expo-linear-gradient";

import MainApp from "./MainApp";

export default function App() {
  return (
    <LinearGradient
      style={styles.container}
      colors={[colors.sec, colors.bg, colors.sec]}
    >
      <StatusBar style="auto" />
      <MainApp />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingTop: 55,
  },
});
