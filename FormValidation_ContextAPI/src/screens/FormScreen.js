import { Alert, StyleSheet, Text, View } from "react-native";
import { useContext, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { COLOR } from "../utils/constant";
import { isEmail, isNotEmpty } from "../utils/validation";
import { DataContext } from "../Context-API/DataContextProvider";

export default function FormScreen() {
  const dataContext = useContext(DataContext);

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
  });

  const [formValidity, setFormValidity] = useState({
    name: true,
    lastname: true,
    email: true,
  });

  ///IMPORTANT : some methode.
  const isEmailInDataSet = dataContext.data.some(
    (user) => user.email === formData.email,
  );

  function checkEmailHandler() {
    const userData = {
      name: formData.name,
      lastname: formData.lastname,
      email: formData.email,
    };
    if (!isEmailInDataSet) {
      dataContext.addData(userData);
    } else {
      Alert.alert("Exists Data ", "The dataset already exists!", [
        { text: "OK" },
      ]);
    }
  }

  function clearInputs() {
    setFormData((current) => [
      ...current,
      { name: "", lastname: "", email: "" },
    ]);
  }

  function submitForm() {
    const nameValid = isNotEmpty(formData.name);
    const lastnameValid = isNotEmpty(formData.lastname);
    const emailValid = isEmail(formData.email);

    const isFormValid = nameValid && lastnameValid && emailValid;

    setFormValidity({
      name: nameValid,
      lastname: lastnameValid,
      email: emailValid,
    });

    if (!isFormValid) {
      Alert.alert("Invalid Input!", "Please fill out all inputs.");
      return;
    }

    const userData = {
      name: formData.name,
      lastname: formData.lastname,
      email: formData.email,
    };

    dataContext.addData(userData);

    setFormData({
      name: "",
      lastname: "",
      email: "",
    });
  }

  function inputBlurHandler(inputName) {
    let valid;

    if (inputName === "email") {
      valid = isEmail(formData[inputName]);
    } else {
      valid = isNotEmpty(formData[inputName]);
    }

    setFormValidity((currentValidity) => ({
      ...currentValidity,
      [inputName]: valid,
    }));

    return valid;
  }

  function inputChangeHandler(inputName, value) {
    setFormData((currentData) => ({
      ...currentData,
      [inputName]: value,
    }));

    setFormValidity((currentValidity) => ({
      ...currentValidity,
      [inputName]: true,
    }));
  }

  return (
    <View>
      <View style={styles.formInputs}>
        <View>
          {/* /// INPUT COMPONENTI FONKSIYONLARI GUNCELLENMESEYDI BU KOD CALISIRDI ANCAK name PARAMETRESI GONDERILEREK ONCHANGE
          /// VE ONBLUR FONKSIYONLARI NAME DONDURECEK SEKILDE TASARLANDI O YUZDEN ASAGIDAKI KODLAR DAHA PRATIK.
          <Input
            labelName="Name"
            name="name"
            onChangeText={(text) => inputChangeHandler("name", text)}
            value={formData.name}
            plaseholder="Enter your name..."
            onBlurHandler={() => inputBlurHandler("name")}
            isValid={formValidity.name}
          />
          */}
          <Input
            labelName="Name"
            name="name"
            onChangeText={inputChangeHandler}
            value={formData.name}
            plaseholder="Enter your name..."
            onBlurHandler={inputBlurHandler}
            isValid={formValidity.name}
          />
          <Input
            labelName="Lastname"
            name="lastname"
            onChangeText={inputChangeHandler}
            value={formData.lastname}
            plaseholder="Enter your lastname..."
            onBlurHandler={inputBlurHandler}
            isValid={formValidity.lastname}
          />
          <Input
            labelName="Email"
            name="email"
            onChangeText={inputChangeHandler}
            value={formData.email}
            plaseholder="Enter your email..."
            onBlurHandler={inputBlurHandler}
            isValid={formValidity.email}
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
