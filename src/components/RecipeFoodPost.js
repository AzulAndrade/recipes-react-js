import React, { useContext, Fragment, useState, browserHistory } from "react";
import { FoodModalContext } from "../context/FoodModalContext";

const RecipeFoodPost = ({ recipe }) => {
  const { recipeInfo, setidrecipe, setRecipe } = useContext(FoodModalContext);
  const showIngredients = (recipeInfo) => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (recipeInfo[`strIngredient${i}`]) {
        ingredients.push(
          <li>
            {recipeInfo[`strIngredient${i}`]} {recipeInfo[`strMeasure${i}`]}
          </li>
        );
      }
    }

    return ingredients;
  };

  return (
    <Fragment>
      {/* <Header /> */}

      <div class="recipe-post-area">
        <div class="recipe-content-area">
          <div class="container">
            <div class="row">
              <div class="col-12 mb-5">
                <div class="recipe-headline my-5">
                  <h2>{recipeInfo.strDrink}</h2>
                  <h6>{showIngredients(recipeInfo)}</h6>
                </div>

                  <h4>Instructions.</h4>
                  {/* <p>{recipeInfo.strInstructions}</p> */}
                </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default RecipeFoodPost;
