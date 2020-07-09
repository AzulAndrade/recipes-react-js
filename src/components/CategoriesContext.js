import React, {createContext, useState} from 'react';

export const CategoriesContext = createContext();

const CategoriesProvider = (props) => {
    const [hola, setHola] = useState ('hola');


    return(
        <CategoriesContext.Provider
        value={{
            hola
        }}>
            {props.children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider;