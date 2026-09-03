import { useState } from "react";

export default function useInput(initialValue, validationFn) {
  const [value, setValue] = useState(initialValue);
  const [isEdited, setisEdited] = useState(false);

  const isValid = validationFn(value);

  function inputBlurHandler() {
    setisEdited(true);
  }

  function inputChangeHandler(value) {
    setValue(value);
    setisEdited(false);
  }

  return {
    value,
    setValue,
    inputBlurHandler,
    inputChangeHandler,
    hasError: isEdited && !isValid,
  };
}
