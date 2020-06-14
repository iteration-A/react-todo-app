import { useState } from "react";

const useCategories = (initialValues = []) => {
  const [categories, setCategories] = useState(initialValues);

  const addCategory = (categoryName) => {
    if (categories.indexOf(categoryName) === -1)
      setCategories([...categories, categoryName]);
  };

  return [categories, addCategory];
};

export default useCategories;
