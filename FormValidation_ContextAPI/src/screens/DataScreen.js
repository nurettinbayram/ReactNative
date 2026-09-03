import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useContext } from "react";
import { DataContext } from "../Context-API/DataContextProvider";
import DataSet from "../components/DataSet";
import { COLOR } from "../utils/constant";

export default function DataScreen() {
  const dataContext = useContext(DataContext);
  const dataSet = dataContext.data;

  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>Data Set</Text>
      <FlatList
        data={dataSet}
        keyExtractor={(item, index) => item.email}
        renderItem={(itemData) => {
          return <DataSet items={itemData.item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
  },
  headerTxt: {
    fontSize: 23,
    fontWeight: "700",
    color: COLOR.second,
    textAlign: "center",
    marginVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: COLOR.primary,
  },
  boxFlat: {
    justifyContent: "center",
    alignItems: "center",
  },
  txtFlat: {
    color: "#000",
  },
});
