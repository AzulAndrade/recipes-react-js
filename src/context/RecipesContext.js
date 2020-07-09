import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";
export const RecipesContext = createContext();

const RecipesProvider = (props) => {
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
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}
              `;
        const result = await Axios.get(url);

        setRecipes(result.data.drinks);
      };

      getRecipes();
    }
  }, [search]);
  return (
    <RecipesContext.Provider value={{ recipes, searchRecipes, setConsult }}>
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
