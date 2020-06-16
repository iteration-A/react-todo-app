import { useState, useEffect } from "react";

const useInputForm = (initialValue = "", max = 100) => {
  const [something, setSomething] = useState(initialValue);

  const [wordsLeft, setWordsLeft] = useState(max);

  const changeSomething = ({ target: { value } }) => {
    if (value.length <= max) {
      setSomething(value);
    }
  };

  useEffect(() => {
    if (something === "") return setWordsLeft(max);
    setWordsLeft(max - something.length);
  }, [something, max, wordsLeft]);

  return [something, changeSomething, wordsLeft];
};

export default useInputForm;
