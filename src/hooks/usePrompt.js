import { useState } from "react";

const usePrompt = (initialValue = false) => {
  const [status, setStatus] = useState(initialValue);

  const close = () => setStatus(false);
  const open = () => setStatus(true);

  return [status, open, close];
};

export default usePrompt;
