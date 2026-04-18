import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/Button";
import FavoriteIcon from "../components/FavoriteIcon";

export default function StartScreen({
  startScreenHandler,
  showSaveWordsScreen,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.btnCon}>
        <CustomButton onPressFuntion={startScreenHandler}>
          <Text>Let's Get Start</Text>
        </CustomButton>
      </View>

      <View style={styles.btnCon}>
        <CustomButton onPressFuntion={showSaveWordsScreen}>
          <FavoriteIcon />
          <Text>Favorite</Text>
        </CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    marginTop: 300,
  },
  btnCon: {
    width: "80%",
    marginBottom: 30,
  },
});
