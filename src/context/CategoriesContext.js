import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
//creamos el context
export const CategoriesContext = createContext();

//donde estan las funciones y los state
const CategoriesProvider = (props) => {
  //creamos state del context
  const [categories, setCategories] = useState([]);

  //llamado a la api
  useEffect(() => {
    const getCategories = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const categories = await axios.get(url);
      setCategories(categories.data.drinks);
    };
    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {props.children}
    </CategoriesContext.Provider>
  );
};
export default CategoriesProvider;
