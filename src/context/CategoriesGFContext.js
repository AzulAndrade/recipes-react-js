import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

//createContext crea el contexto llamado CategoriesGFContext
export const CategoriesGFContext = createContext();

//Provider es donde se van a encontrar las funciones y los states
const CategoriesGFProvider = (props) => {
  //creamos el state del context
  const [categoriesGF, setCategoriesGF] = useState([]);

  //ejecutamos el llamado a la API
  useEffect(() => {
    const getCategoriesGF = async () => {
      const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
      const categoriesGF = await Axios.get(url);
      setCategoriesGF(categoriesGF.data.meals);
    };
    getCategoriesGF();
  }, []);
  return (
    <CategoriesGFContext.Provider
      value={{
        categoriesGF,
      }}
    >
      {props.children}
    </CategoriesGFContext.Provider>
  );
};

export default CategoriesGFProvider;
