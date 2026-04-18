import { Text, View, StyleSheet, Pressable } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { colors } from "../contstants/Colors";
import { shadowBtn, shadowBtnClick } from "../contstants/Styles";

export default function CircleButton({ isCardTurnedOnClick }) {
  return (
    <Pressable
      //#buraya click durumunda style degistirme islemi var.
      style={({ pressed }) =>
        pressed
          ? [styles.container, shadowBtnClick]
          : [styles.container, shadowBtn]
      }
      onPress={isCardTurnedOnClick}
    >
      <Text style={styles.txt}>
        <FontAwesome6 name="arrows-rotate" size={80} color="black" />
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.main,
    marginTop: 40,
    borderRadius: "50%",
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 18,
    fontWeight: "600",
  },
});
