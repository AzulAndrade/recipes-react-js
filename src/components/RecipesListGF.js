import React, { useContext } from "react";
import { FoodRecipesContext } from "../context/FoodRecipesContext";
import FoodRecipe from "./FoodRecipe";

const RecipesListGF = () => {
  const { recipes } = useContext(FoodRecipesContext);
  return (
    <div className="row mt-5">
      {recipes.map((recipe) => (
        <FoodRecipe key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
};
export default RecipesListGF;
