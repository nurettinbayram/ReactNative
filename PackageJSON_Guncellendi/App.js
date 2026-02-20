import React from "react";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: "white",
        flex: 1,
        flexDirection: "column-reverse",
        width: 300,
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          //   width: 100,
          //   height: 100,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          //   width: 100,
          //   height: 100,
          flex: 3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          //   width: 100,
          //   height: 100,
          flex: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}
