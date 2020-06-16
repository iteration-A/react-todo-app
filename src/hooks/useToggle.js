import { useState } from "react";

const useToggle = (initialValue = false) => {
  const [something, setSomething] = useState(initialValue);

  const toggleSomething = () => setSomething(!something);

  return [something, toggleSomething];
};

export default useToggle;
