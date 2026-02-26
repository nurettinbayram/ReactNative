import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Modal,
  Image,
  Alert,
} from "react-native";
import { useState } from "react";

export default function GoalInput(props) {
  const [inputTextValue, setInputTextValue] = useState("");

  function inputGoalHandler(inputText) {
    setInputTextValue(inputText);
  }

  function buttonGoalHandler() {
    if (inputTextValue) {
      props.buttonHandler(inputTextValue);
      setInputTextValue("");
    }
    // Eger Bu eklenmezse bu kismi gelistir
    else {
      Alert.alert("Empty Input", "Please ebter a goal!!!", [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed"),
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  }

  return (
    <Modal visible={props.modelEfect} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          placeholder="Add your goal.."
          style={styles.txtInput}
          onChangeText={inputGoalHandler}
          value={inputTextValue}
        />
        <View style={styles.btnContainer}>
          <Button
            title="Add Goal"
            style={styles.btn}
            color={"#b180f0"}
            onPress={buttonGoalHandler}
          />
          <Button
            title="Cencel"
            color={"#f31282"}
            onPress={props.modelCencel}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#311b6b",
  },
  txtInput: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 6,
    width: "70%",
    padding: 7,
    backgroundColor: "#e9e5e5",
  },
  btn: {
    marginStart: 10,
  },
  btnContainer: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-around",
    marginTop: 15,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});
