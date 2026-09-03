import { Alert, StyleSheet, Text, View } from "react-native";
import { useContext, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { COLOR } from "../utils/constant";
import { isEmail, isNotEmpty } from "../utils/validation";
import { DataContext } from "../Context-API/DataContextProvider";
import useInput from "../hooks/useInput";

export default function FormScreen() {
  const dataContext = useContext(DataContext);

  const {
    value: nameValue,
    setValue: setNameValue,
    inputBlurHandler: nameBlureHandler,
    inputChangeHandler: nameChangeHandler,
    hasError: nameHasError,
  } = useInput("", (value) => isNotEmpty(value));

  const {
    value: lastnameValue,
    setValue: setLastnameValue,
    inputBlurHandler: lastnameBlureHandler,
    inputChangeHandler: lastnameChangeHandler,
    hasError: lastnameHasError,
  } = useInput("", (value) => isNotEmpty(value));

  const {
    value: emailValue,
    setValue: setEmailValue,
    inputBlurHandler: emailBlureHandler,
    inputChangeHandler: emailChangeHandler,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value));

  function submitForm() {
    const isFormValid = nameHasError && lastnameHasError && emailHasError;

    if (isFormValid) {
      Alert.alert("Invalid Input!", "Please fill out all inputs.");
      return;
    }

    const userData = {
      name: nameValue,
      lastname: lastnameValue,
      email: emailValue,
    };

    dataContext.addData(userData);

    setNameValue("");
    setLastnameValue("");
    setEmailValue("");
  }

  return (
    <View>
      <View style={styles.formInputs}>
        <View>
          <Input
            labelName="Name"
            name="name"
            onChangeText={nameChangeHandler}
            value={nameValue}
            plaseholder="Enter your name..."
            onBlurHandler={nameBlureHandler}
            hasError={nameHasError}
          />
          <Input
            labelName="Lastname"
            name="lastname"
            onChangeText={lastnameChangeHandler}
            value={lastnameValue}
            plaseholder="Enter your lastname..."
            onBlurHandler={lastnameBlureHandler}
            hasError={lastnameHasError}
          />
          <Input
            labelName="Email"
            name="email"
            onChangeText={emailChangeHandler}
            value={emailValue}
            plaseholder="Enter your email..."
            onBlurHandler={emailBlureHandler}
            hasError={emailHasError}
          />
        </View>
      </View>
      <View>
        <Button buttonName="Submit" onPressHandler={submitForm} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formInputs: {
    marginHorizontal: 8,
    marginVertical: 20,
    borderBottomWidth: 2,
    borderBottomColor: COLOR.primary,
    paddingBottom: 10,
  },
});
