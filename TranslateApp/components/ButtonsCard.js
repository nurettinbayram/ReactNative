import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./Button";
import { colors } from "../contstants/Colors";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";

export default function ButtonCard({
  removeWordOnPress,
  studyOnWordOnPress,
  saveWordOnList,
}) {
  return (
    <View style={styles.container}>
      <CustomButton onPressFuntion={removeWordOnPress}>
        <FontAwesome6 name="trash-can" size={20} color="black" />{" "}
        <Text>Remove</Text>
      </CustomButton>
      <CustomButton onPressFuntion={saveWordOnList}>
        <Entypo name="star-outlined" size={24} color="black" />{" "}
        <Text>Save</Text>
      </CustomButton>
      <CustomButton onPressFuntion={studyOnWordOnPress}>
        <Feather name="edit" size={22} color="black" /> <Text>Study</Text>
      </CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 100,
    backgroundColor: colors.pri,
    borderRadius: 14,
    shadowColor: "black",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 7,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 50,
    flexDirection: "row",
  },
});
