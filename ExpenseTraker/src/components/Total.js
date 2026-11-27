import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, RECENTTIME, SHADOWS } from "../consts/consts";

export default function Total({ listOfExpences, text }) {
  //-> Here, it is important to understand how reduce() works.
  //-> The accumulator (sum) stores a number, while each expense is an object.
  //-> Therefore, we need to extract the amount property from the object before adding it to the total.
  const totalExpences = listOfExpences.reduce(
    (sum, expence) => sum + parseFloat(expence.amount),
    0,
  );

  return (
    <View style={[styles.container, SHADOWS.sec]}>
      <View style={styles.innerContainer}>
        <Text style={styles.txt}>{text}</Text>
        <Text style={styles.txtTotal}>${totalExpences.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.sec,
    marginHorizontal: 7,
    marginVertical: 10,
    padding: 10,
    borderRadius: 15,
  },
  innerContainer: {
    backgroundColor: COLORS.bg,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingVertical: 7,
    alignItems: "center",
  },
  txtTotal: {
    fontSize: 20,
    fontWeight: "700",
  },
  txt: {
    fontSize: 18,
    fontWeight: "400",
    color: COLORS.thr,
  },
});
