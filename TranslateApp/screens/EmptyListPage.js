import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/Button";
import { colors } from "../contstants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import FavoriteIcon from "../components/FavoriteIcon";

export default function EmptyListPage({
  startScreenHandler,
  showSavedScreenHandler,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.txtContainer}>
        <Text style={styles.txt}>Your study list is empty!!!</Text>
      </View>
      <View>
        <View style={styles.btnContainer}>
          <CustomButton onPressFuntion={startScreenHandler}>
            <AntDesign name="home" size={24} color="black" /> <Text>Home</Text>
          </CustomButton>
        </View>
        <View style={styles.btnContainer}>
          <CustomButton onPressFuntion={showSavedScreenHandler}>
            <FavoriteIcon />
            <Text>Favorite</Text>
          </CustomButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  txtContainer: {
    backgroundColor: colors.main,
    padding: 15,
    borderRadius: 10,
  },
  txt: {
    color: "#000",
    fontSize: 20,
    fontWeight: "700",
  },
  btnContainer: {
    marginTop: 20,
  },
});
