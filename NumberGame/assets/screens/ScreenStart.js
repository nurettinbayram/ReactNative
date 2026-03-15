import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../../constans/Color";

export default function ScreenStart(props) {
  const [inputNumber, setInputNumber] = useState("");

  function buttonConfirmHandler() {
    const inputNum = parseInt(inputNumber);
    if (isNaN(inputNum) || inputNum < 0 || inputNum > 100) {
      showAlert();
      return;
      // bu block calistiginda ruturnden sonrasi calismaz else ihtiyac yoktur
    }
    props.pickUserNumber(inputNum);
  }

  function showAlert() {
    Alert.alert(
      "Warning: Empty input!!!",
      "Please enter a number between 0 and 100!!!",
      [
        {
          text: "OK",
          onPress: () => inputClearHandler(),
          style: "destructive",
        },
      ],
    );
  }

  function inputNumberHandler(num) {
    setInputNumber(num);
  }

  function inputClearHandler() {
    setInputNumber("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>Guess My Number</Text>
        </View>

        <View style={styles.formBox}>
          <Text style={styles.text}>Enter a Number</Text>
          <TextInput
            value={inputNumber}
            style={styles.inputText}
            onChangeText={inputNumberHandler}
            placeholder="42"
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <View style={styles.buttonBox}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={inputClearHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={buttonConfirmHandler}>
                Confirm
              </PrimaryButton>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },

  subContainer: {
    flex: 1,
    // justifyContent: "center",
    marginTop: 100,
    alignItems: "center",
    flexDirection: "column",
  },
  titleBox: {
    borderColor: Colors.primary500,
    borderWidth: 3,
    padding: 20,
    margin: 20,
    backgroundColor: Colors.primary500,
    borderRadius: 15,
    elevation: 5,
    shadowColor: Colors.secondary500,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
  },
  title: {
    fontSize: 35,
    // burada indirilen fontlarin kullanimini goruyoruz
    fontFamily: "open-sans-bold",
  },
  inputText: {
    borderBottomColor: Colors.secondary500,
    borderBottomWidth: 3,
    fontSize: 25,
    marginTop: 14,
    width: 40,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "700",
    color: Colors.secondary500,
  },
  text: {
    fontSize: 25,
    fontFamily: "open-sans",
  },
  formBox: {
    backgroundColor: Colors.primary500,
    padding: 30,
    borderRadius: 15,
    alignItems: "center",
    elevation: 5,
    shadowColor: Colors.secondary500,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    width: "83%",
  },
  buttonBox: {
    flexDirection: "row",
    marginTop: 20,
  },
  buttonContainer: {
    flex: 1,
  },
});
