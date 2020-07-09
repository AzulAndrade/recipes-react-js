import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";
export const FoodRecipesContext = createContext();

const FoodRecipesProvider = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [search, searchRecipes] = useState({
    name: "",
    category: "",
  });
  const { name, category } = search;
  const [consult, setConsult] = useState(false);

  useEffect(() => {
    if (consult) {
      const getRecipes = async () => {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`;
        const result = await Axios.get(url);
        console.log("result", result.data.meals);
        setRecipes(result.data.meals);
      };

      getRecipes();
    }
  }, [search]);
  return (
    <FoodRecipesContext.Provider value={{ recipes, searchRecipes, setConsult }}>
      {props.children}
    </FoodRecipesContext.Provider>
  );
};

export default FoodRecipesProvider;
