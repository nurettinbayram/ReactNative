import { StyleSheet, View } from "react-native";
import { useState } from "react";

//---------------3. PARTY LIBRARY------------------
import { LinearGradient } from "expo-linear-gradient";

//--------------SCREENS-----------
import Main from "./screens/Main";
import StartScreen from "./screens/StartScreen";
import ListOfSavedWords from "./screens/ListOfSavedWords";
import EmptyListPage from "./screens/EmptyListPage";

//-------------COMPONENTS------

//------------Constants----------
import { colors } from "./contstants/Colors";
import { words } from "./contstants/words_1000_2000";
// import { words } from "./contstants/test";

export default function MainApp() {
  const [isStartScreenOn, setIsStartScreenOn] = useState(true);
  const [isShowSaveWordsOn, setIsShowSaveWordsOn] = useState(false);
  const [wordsList, setWordsList] = useState(words);
  const [index, setIndex] = useState(0);
  const [savedWords, setSavedWords] = useState([]);

  ///-------------- LOGIC METHODS----------------------
  function randomIndex() {
    return Math.floor(Math.random() * wordsList.length);
  }

  function randomWord(wordsList) {
    return wordsList[index];
  }

  ///------------COMPONENT'S METHODS-----------------
  function removeWordFromList() {
    setWordsList((currentList) =>
      currentList.filter((element, i) => i != index),
    );
    console.log(
      "[" +
        wordsList[index].en +
        " - " +
        wordsList[index].tr +
        "]" +
        " IS REMOVED!!!",
    );
  }

  function saveWordOnList() {
    setSavedWords((currentList) => [...currentList, wordsList[index]]);
    setIndex(randomIndex());
    console.log(
      "[" +
        wordsList[index].en +
        " - " +
        wordsList[index].tr +
        "]" +
        " IS SAVED!!!",
    );
  }

  function studyOnWords() {
    setIndex(randomIndex());
    console.log(
      "[" +
        wordsList[index].en +
        " - " +
        wordsList[index].tr +
        "]" +
        " KEEP STUDYING.",
    );
  }

  function showSaveWords() {
    setIsStartScreenOn(false);
    setIsShowSaveWordsOn(true);
  }

  ///--------------START SCREEN-----------------
  function startScreenHandler() {
    setIsShowSaveWordsOn(false);
    setIsStartScreenOn(!isStartScreenOn);
    setWordsList;
  }

  if (isStartScreenOn) {
    return (
      <StartScreen
        startScreenHandler={startScreenHandler}
        showSaveWordsScreen={showSaveWords}
      />
    );
  }

  ///--------------SAVED WORDS SCREEN-----------------
  /// BU BOLUM COK ONEMLI VE HATTA COMPONENTE BURAYA NASIL INDEX GONDERILDIGINE IYI BAK.
  function deleteWordHandler(i) {
    setSavedWords((currentSaveList) =>
      currentSaveList.filter((item, index) => index != i),
    );
  }

  if (isShowSaveWordsOn) {
    return (
      <ListOfSavedWords
        savedWords={savedWords}
        startScreenHandler={startScreenHandler}
        deleteWord={deleteWordHandler}
      />
    );
  }

  ///------------- If study list is empty show this page.--------------------
  if (wordsList.length <= 0) {
    return (
      <EmptyListPage
        startScreenHandler={startScreenHandler}
        showSavedScreenHandler={showSaveWords}
      />
    );
  }

  ///--------------MAIN SCREEN-----------------
  return (
    <Main
      selectedWord={randomWord(wordsList)}
      removeWordOnPress={removeWordFromList}
      studyOnWordOnPress={studyOnWords}
      saveWordOnList={saveWordOnList}
      startScreenHandler={startScreenHandler}
      showSavedScreenHandler={showSaveWords}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingTop: 55,
  },
});
