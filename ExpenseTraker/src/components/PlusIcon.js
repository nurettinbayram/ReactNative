import { StyleSheet, Text, View, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "../consts/consts";

export default function PlusIcon({ onAddExpences }) {
  return (
    <Pressable onPress={onAddExpences}>
      <Entypo name="circle-with-plus" size={34} color={COLORS.bg} />
    </Pressable>
  );
}

const styles = StyleSheet.create({});
