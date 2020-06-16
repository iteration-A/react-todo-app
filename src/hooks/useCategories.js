import { useState, useEffect } from "react";

const useCategories = () => {
  const categoriesInLocalStorage =
    JSON.parse(window.localStorage.getItem("categories")) || [];

  const [categories, setCategories] = useState(
    categoriesInLocalStorage.length > 0 ? categoriesInLocalStorage : ["Life"]
  );

  const addCategory = (categoryName) => {
    if (categories.indexOf(categoryName) === -1)
      setCategories([...categories, categoryName]);
  };

  useEffect(() => {
    window.localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  return [categories, addCategory];
};

export default useCategories;
