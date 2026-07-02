import { Pressable, StyleSheet } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { COLORS } from "../utilities/contants";

export default function IconBotton({ onPressed, icon, color }) {
  return (
    <Pressable
      onPress={onPressed}
      style={({ pressed }) => pressed && styles.presseStyle}
    >
      <Entypo name={icon} size={36} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  presseStyle: {
    opacity: 0.7,
  },
});
