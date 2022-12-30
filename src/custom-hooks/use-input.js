import { useState } from "react";

const useInput = function (validateInputFn) {
  const [input, setInput] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);
  const handleInputChange = function (event) {
    setInput(event.target.value);
  };
  const handleInputIsTouched = function () {
    setInputIsTouched(true);
  };
  const inputHasError = validateInputFn(input);

  const inputIsInvalid = inputHasError && inputIsTouched;

  return {
    input,
    handleInputChange,
    handleInputIsTouched,
    inputHasError,
    inputIsInvalid,
  };
};

export default useInput;
