import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../contstants/Colors";
import { shadowBtn, shadowBtnClick } from "../contstants/Styles";

export default function CustomButton({ onPressFuntion, children }) {
  return (
    <Pressable
      onPress={onPressFuntion}
      //#buraya click durumunda style degistirme islemi var.
      style={({ pressed }) =>
        pressed
          ? [styles.container, shadowBtnClick]
          : [styles.container, shadowBtn]
      }
    >
      <Text style={styles.txt}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.main,
    padding: 12,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
});
