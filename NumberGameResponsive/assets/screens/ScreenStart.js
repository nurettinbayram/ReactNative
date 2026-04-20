import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  useWindowDimensions,
  Platform,
  ///We wrap our component with KeyboardAvoidingView and ScrollView for more flexibility.
  ///They allow us to manage the keyboard more effectively.
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../../constans/Color";

export default function ScreenStart(props) {
  const [inputNumber, setInputNumber] = useState("");

  ///In case of screen rotation, we use useWindowDimensions instead of Dimensions.
  ///This is because Dimensions is evaluated only once at the beginning, so it won’t update after the component re-renders.
  ///useWindowDimensions return device width and height
  const { width, height } = useWindowDimensions();
  const marginTopDistanst = height < 500 ? 5 : 100;

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
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={styles.container}>
          <View style={[styles.subContainer, { marginTop: marginTopDistanst }]}>
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
                  <PrimaryButton onPress={inputClearHandler}>
                    Reset
                  </PrimaryButton>
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
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

/// bu kismi kapatiyorum cunku app ilk render edildiginde calisir ancak sorasinda calismaz bunun yerine
/// useWindowDimensions komponent icinde kullanilarak her durumda device yuksekligini ge genisligini ele alabilsin.
// const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    width: "100%",
  },

  subContainer: {
    flex: 1,
    ///base on divice height we set margin top
    // marginTop: deviceHeight < 500 ? 10 : 100, ///bu kismi kapattik nedenini yukarda belirttim.
    alignItems: "center",
    flexDirection: "column",
  },
  titleBox: {
    borderColor:
      Platform.OS === "ios" ? Colors.secondary500 : Colors.primary500,
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
    /// We can set style based on platform with Platform API
    // borderColor:
    //   Platform.OS === "ios" ? Colors.secondary500 : Colors.primary500,
    ///OR WE CAN SET STYLE WITH SELECT METHOD
    borderColor: Platform.select({
      ios: Colors.secondary500,
      android: Colors.primary600,
    }),
    borderWidth: 3,
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
