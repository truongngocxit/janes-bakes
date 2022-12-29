import { useState } from "react";

const useInput = function (validateInputFn) {
  const [input, setInput] = useState("");
  const inputIsValid = validateInputFn(input);

  const handleInputChange = function (event) {
    setInput(event.target.value);
  };

  return {
    input,
    handleInputChange,
    inputIsValid,
  };
};

export default useInput;
