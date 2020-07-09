import React, { Fragment } from "react";
import Form from "./components/Form";
import FormGF from "./components/FormGF";
import Header from "./components/Header";
import Contact from "./components/Contact";

import FoodHeader from "./components/FoodHeader";
import DrinksHeader from "./components/DrinksHeader";

import RecipesList from "./components/RecipesList";
import RecipesListGF from "./components/RecipesListGF";

import ModalProvider from "./context/ModalContext";
import FoodModalProvider from "./context/FoodModalContext";

import CategoriesProvider from "./context/CategoriesContext";
import CategoriesGFProvider from "./context/CategoriesGFContext";

import RecipesProvider, { RecipesContext } from "./context/RecipesContext";
import FoodRecipesProvider, {
  FoodRecipesContext,
} from "./context/FoodRecipesContext";

import RecipePost from "./components/RecipePost";
import RecipeFoodPost from "./components/RecipeFoodPost";

function App() {
  return (
    <CategoriesProvider>
      <RecipesProvider>
        <CategoriesGFProvider>
          <FoodRecipesProvider>
            <ModalProvider>
              <FoodModalProvider>
                <Header />
                <DrinksHeader />
                <Form /> 
                <RecipesList />
                <FoodHeader />
                <FormGF />
                <RecipesListGF />
                <Contact/>
              </FoodModalProvider>
            </ModalProvider>
          </FoodRecipesProvider>
        </CategoriesGFProvider>
      </RecipesProvider>
    </CategoriesProvider>
  );
}

export default App;
