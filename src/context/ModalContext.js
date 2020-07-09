import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ModalContext = createContext();
const ModalProvider = (props) => {

  //state del provider
  const [idrecipe, setidrecipe] = useState(null);

  //receta es un objeto que inicia vacio
    const [recipeInfo, setRecipe]=useState({});

  useEffect(() => {
    const getRecipe = async () => {
      if (!idrecipe) return;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}
            `;
      const result = await axios.get(url);
      setRecipe(result.data.drinks[0]);
    };
    getRecipe();
  }, [idrecipe]);
  return (
    <ModalContext.Provider
      value={{ recipeInfo,
        setidrecipe,
        setRecipe
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
