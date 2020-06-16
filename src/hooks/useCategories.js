import { useState, useEffect } from "react";

const useCategories = () => {
  const [categories, setCategories] = useState(
    JSON.parse(window.localStorage.getItem("categories")) || []
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
