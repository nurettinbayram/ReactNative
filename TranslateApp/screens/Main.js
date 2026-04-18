import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import Card from "../components/Card";
import ButtonCard from "../components/ButtonsCard";
import CircleButton from "../components/CircleBtn";
import CustomButton from "../components/Button";
import { colors } from "../contstants/Colors";
import FavoriteIcon from "../components/FavoriteIcon";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Main({
  selectedWord,
  removeWordOnPress,
  studyOnWordOnPress,
  saveWordOnList,
  startScreenHandler,
  showSavedScreenHandler,
}) {
  const [isCardTurned, setIsCardTurned] = useState(false);

  function removeWordHandler() {
    removeWordOnPress();
    setIsCardTurned(false);
  }

  function studyWordHandler() {
    studyOnWordOnPress();
    setIsCardTurned(false);
  }

  function saveWordHandler() {
    saveWordOnList();
    setIsCardTurned(false);
  }

  return (
    <View style={styles.container}>
      <Card selectedWord={selectedWord} isCardTurned={isCardTurned} />
      <ButtonCard
        removeWordOnPress={removeWordHandler}
        studyOnWordOnPress={studyWordHandler}
        saveWordOnList={saveWordHandler}
        setIsCardTurned={setIsCardTurned}
      />
      <CircleButton
        isCardTurnedOnClick={() => setIsCardTurned(!isCardTurned)}
      />
      <View style={styles.pageBtnContainer}>
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
    flex: 1,
    alignItems: "center",
    marginTop: 100,
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
    margin: 20,
  },
  pageBtnContainer: {
    flexDirection: "row",
    marginTop: 30,
  },
});
