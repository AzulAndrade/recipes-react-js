import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const FoodModalContext = createContext();
const FoodModalProvider = (props) => {
  //state del provider
  const [idrecipe, setidrecipe] = useState(null);

  //receta es un objeto que inicia vacio
  const [recipeInfo, setRecipe] = useState({});

  useEffect(() => {
    const getRecipe = async () => {
      if (!idrecipe) return;
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idrecipe}`;
      const result = await axios.get(url);
      setRecipe(result.data.meals[0]);
    };
    getRecipe();
  }, [idrecipe]);
  return (
    <FoodModalContext.Provider value={{ recipeInfo, setidrecipe, setRecipe }}>
      {props.children}
    </FoodModalContext.Provider>
  );
};

export default FoodModalProvider;
