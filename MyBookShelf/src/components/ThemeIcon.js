import { StyleSheet, Text, Pressable } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";

export default function ThemeIcon() {
  const { mode, setMode, theme } = useContext(ThemeContext);

  function toggleTheme() {
    setMode(mode === "dark" ? "light" : "dark");
  }

  return (
    <Pressable
      onPress={toggleTheme}
      style={{
        backgroundColor: theme.pri,
        borderRadius: "50%",
        padding: 5,
      }}
    >
      {mode === "dark" ? (
        <MaterialIcons name="dark-mode" size={24} color={theme.bg} />
      ) : (
        <Entypo name="light-up" size={24} color={theme.bg} />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({});
