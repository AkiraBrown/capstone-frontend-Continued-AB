import { useState, useEffect } from "react";
import { isAlpha } from "validator";

function InputCheck(placeholder) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [onBlur, setOnBlur] = useState(false);
  const [onFocus, setOnFocus] = useState(false);

  const [inputButtonState, setInputButtonState] = useState(true);

  useEffect(() => {
    if (onBlur || (onFocus && input.length > 1)) {
      if (input.length === 0) {
        setError(`${placeholder} cannot be empty`);
        setInputButtonState(true);
      } else if (!isAlpha(input)) {
        setError(`${placeholder} cannot have special characters`);
        setInputButtonState(true);
      } else {
        setError(false);
        setInputButtonState(false);
      }
    }
    // eslint-disable-next-line
  }, [input, onBlur, onFocus]);

  return [input, setInput, error, setOnFocus, setOnBlur, inputButtonState];
}

export default InputCheck;
