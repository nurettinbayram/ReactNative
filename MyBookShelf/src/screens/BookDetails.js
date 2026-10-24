import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { BOOKS } from "../constants/data";
import FavoriteButton from "../components/FavoriteButton";
import Button from "../components/Button";
import { ThemeContext } from "../context/ThemeContext";
import { ReadContext } from "../context/ReadContext";

export default function BookDetails({ route, navigation }) {
  //->find() method check the condition if it return true it provide the spesific item object.
  const item = BOOKS.find((item) => item.id == route.params.itemId);
  const { theme } = useContext(ThemeContext);
  const { handelRead } = useContext(ReadContext);

  //-> We can set up screenOption property from any screen using navigation.setOptions() method.
  useLayoutEffect(() => {
    {
      navigation.setOptions({
        headerRight: () => {
          return <FavoriteButton id={item.id} />;
        },
      });
    }
  }, []);

  function onRead() {
    handelRead(item.id);
  }

  return (
    <View style={styles.container}>
      <View
        style={{ backgroundColor: theme.sec, padding: 10, borderRadius: 10 }}
      >
        <Text style={styles.title}>{item.author}</Text>
      </View>
      <Button title="Read" onPress={onRead} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
  },
});
