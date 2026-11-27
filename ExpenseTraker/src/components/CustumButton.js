import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../consts/consts";

export default function CustumButton({ children, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.onPress,
        pressed ? styles.pressStyle : null,
      ]}
    >
      <View style={styles.inContainer}>
        <Text style={styles.title}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  inContainer: {},
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  pressStyle: {
    backgroundColor: COLORS.pri,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    transform: [{ scale: 0.95 }],
  },

  onPress: {
    backgroundColor: COLORS.sec,
    padding: 7,
    margin: 20,
    width: "20%",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    borderRadius: 15,
  },
});
