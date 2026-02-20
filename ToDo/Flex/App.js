import React from "react";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        padding: 50,
        height: 300,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        // alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          //   width: 100,
          //   height: 100,
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          //   width: 100,
          //   height: 100,
          justifyContent: "center",
          alignItems: "center",
          flex: 2,
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          //   width: 100,
          //   height: 100,
          justifyContent: "center",
          alignItems: "center",
          flex: 3,
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}
