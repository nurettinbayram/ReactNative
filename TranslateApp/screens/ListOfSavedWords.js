import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../contstants/Colors";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import CustomButton from "../components/Button";

export default function ListOfSavedWords({
  savedWords,
  startScreenHandler,
  deleteWord,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.TitleContainer}>
        <View style={styles.titleBox}>
          <Text style={styles.titleTxt}>English</Text>
        </View>
        <View style={styles.titleBox}>
          <Text style={styles.titleTxt}>Turkish</Text>
        </View>
      </View>
      <FlatList
        data={savedWords}
        /// BURADA SILME FONKSIYONUNA ID OLMADAN INDEX ILE NASIL PARAMETRE SAGLANDIGINA DIKKAT ET.
        renderItem={({ item, index }) => (
          <View
            style={
              index % 2 == 0 ? styles.listContainer : styles.listContainerBg
            }
          >
            <View style={styles.wordBox}>
              <Text style={styles.listTxt}>{item.en}</Text>
            </View>
            <View style={styles.wordBox}>
              <Text style={styles.listTxt}>{item.tr}</Text>
              <Pressable onPress={() => deleteWord(index)}>
                <FontAwesome6 name="trash-can" size={20} color="black" />
              </Pressable>
            </View>
          </View>
        )}
      />

      <View style={styles.btnContainer}>
        <CustomButton onPressFuntion={startScreenHandler}>
          <AntDesign name="home" size={24} color="black" /> <Text>Home</Text>
        </CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  TitleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: colors.pri,
    borderBottomWidth: 5,
    borderBottomColor: colors.main,
    paddingVertical: 10,
  },
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderColor: colors.main,
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
  listContainerBg: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderColor: colors.main,
    borderBottomWidth: 1,
    paddingVertical: 5,
    backgroundColor: colors.sec,
  },
  listTxt: {
    textAlign: "left",
    fontSize: 18,
  },
  wordBox: {
    width: "40%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleTxt: {
    fontSize: 20,
  },
  titleBox: {
    width: "40%",
  },
  marginLeft: {
    marginLeft: 30,
  },
  btnContainer: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    borderTopWidth: 5,
    borderColor: colors.main,
  },
});
