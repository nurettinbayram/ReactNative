import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [inputTextValue, setInputTextValue] = useState("");
  const [coursGoals, setCoursGoals] = useState([]);

  function inputGoalHandler(inputText) {
    setInputTextValue(inputText);
  }
  function buttonGoalHandler() {
    setCoursGoals((currentGoal) => [
      ...currentGoal,
      { text: inputTextValue, id: Math.random().toString() },
    ]);
    console.log(coursGoals);
  }

  return (
    <View style={titleStyles.screen}>
      <View style={titleStyles.inputContainer}>
        <TextInput
          placeholder="Add your goal.."
          style={titleStyles.txtInput}
          onChangeText={inputGoalHandler}
        />
        <Button
          title="Add Goal"
          style={titleStyles.btn}
          onPress={buttonGoalHandler}
        />
      </View>
      <View style={titleStyles.listContainer}>
        <Text style={titleStyles.listTitle}>List Of Goals</Text>
        <FlatList
          data={coursGoals}
          renderItem={(itemData) => {
            return (
              <View style={titleStyles.listItemBox}>
                <Text style={titleStyles.listItem}>
                  ✅ {itemData.item.text}
                </Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const titleStyles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    flex: 1,
    marginTop: 60,
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "blue",
    flex: 1,
  },
  txtInput: {
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 6,
    width: "75%",
    marginEnd: 20,
    padding: 5,
  },
  btn: {
    marginStart: 10,
  },
  listContainer: {
    flex: 4,
  },
  listTitle: {
    color: "#5e0acc",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 20,
  },
  listItemBox: {
    marginVertical: 4,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  listItem: {
    color: "white",
    fontSize: 18,
  },
});
