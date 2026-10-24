import { Button, StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ProfileScreen() {
  const { mode, setMode } = useContext(ThemeContext);

  function toggleTheme() {
    setMode(mode === "dark" ? "light" : "dark");
  }
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button onPress={toggleTheme} title="Mode" />
    </View>
  );
}

const styles = StyleSheet.create({});
