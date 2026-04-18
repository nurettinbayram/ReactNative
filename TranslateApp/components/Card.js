import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import { colors } from "../contstants/Colors";
//? ------Downloaded-----
import AppLoading from "expo-app-loading";
//? ------Component------
import { useAppFonts } from "../hooks/useAppFonts";
import Title from "./Title";
import Content from "./Content";

function capitalizeWords(text) {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function Card({ selectedWord, isCardTurned }) {
  const [fontsLoaded] = useAppFonts();

  /// Burada AppLoading indirilen bir component
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const englishWord = capitalizeWords(selectedWord.en);
  const turkishWord = capitalizeWords(selectedWord.tr);

  return (
    <View style={styles.container}>
      {isCardTurned ? (
        <View>
          <Title title="Turkish" />
          <Content content={turkishWord} />
        </View>
      ) : (
        <View>
          <Title title="English" />
          <Content content={englishWord} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 200,
    backgroundColor: colors.pri,
    borderRadius: 14,
    shadowColor: "black",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 7,
    alignItems: "center",
  },
});
