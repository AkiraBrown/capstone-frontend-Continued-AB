import { useState, useEffect } from "react";

function DobCheck() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [onBlur, setOnBlur] = useState(false);
  const [onFocus, setOnFocus] = useState(false);

  const [dobButtonState, setDobButtonState] = useState(true);

  useEffect(() => {
    if (onBlur || onFocus) {
      let value = underAgeValidate(input);

      if (!value) {
        setError("You need to be 13 or older to sign up!");
        setDobButtonState(true);
      } else {
        setError(false);
        setDobButtonState(false);
      }
    }
    // eslint-disable-next-line
  }, [input]);

  function underAgeValidate(birthday) {
    let parsedBirthday = birthday.replace(/-/g, "/");

    let myBirthday = new Date(parsedBirthday);

    let currentDate = new Date().toJSON().slice(0, 10) + " 01:00:00";

    let myAge = (Date.now(currentDate) - myBirthday) / 31557600000;

    if (myAge > 13) {
      return true;
    } else {
      return false;
    }
  }

  return [input, setInput, error, setOnFocus, setOnBlur, dobButtonState];
}

export default DobCheck;
