import { useState } from "react";

const useInputForm = (initialValue = "") => {
  const [something, setSomething] = useState(initialValue);

  const changeSomething = ({ target: { value } }) => setSomething(value);

  return [something, changeSomething];
};

export default useInputForm;
