const checkLocalStorage = () => {
  if (window.localStorage.getItem("todos") === null) return [];
  return JSON.parse(window.localStorage.getItem("todos"));
};

export default checkLocalStorage;
