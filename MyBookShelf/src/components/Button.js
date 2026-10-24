import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Button({ title, onPress }) {
  const { theme } = useContext(ThemeContext);
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.container, styles.press, { backgroundColor: theme.sec }]
            : [styles.container, { backgroundColor: theme.thr }]
        }
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
    borderRadius: 7,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    margin: 5,
  },
  text: {
    fontSize: 15,
    fontWeight: "600",
  },
  press: {
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    transform: [{ scale: 0.94 }],
  },
});
