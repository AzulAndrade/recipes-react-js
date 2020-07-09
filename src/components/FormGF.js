import React, { useContext, useState } from "react";
import { CategoriesGFContext } from "../context/CategoriesGFContext";
import {
  FoodRecipesProvider,
  FoodRecipesContext,
} from "../context/FoodRecipesContext";
const FormGF = () => {
  const { categoriesGF } = useContext(CategoriesGFContext);
  const [search, setSearch] = useState({
    name: "",
    category: "",
  });
  const { searchRecipes, setConsult } = useContext(FoodRecipesContext);

  const getDatarecipe = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div class="recipe-post-area section-padding-80">
      <div class="recipe-post-search mb-80">
        <div class="container">
          <form
            className="col-12"
            onSubmit={(e) => {
              e.preventDefault();
              searchRecipes(search);
              setConsult(true);
            }}
          >
            <div class="elements-title mb-80">
            <h2>What kind of food lifts your mood?</h2>
            </div>
            <div class="row">
              <div class="col-12 col-lg-3">
                <input
                  name="name"
                  className="form-control"
                  type="text"
                  placeholder="Search..."
                  onChange={getDatarecipe}
                ></input>
              </div>
              <div class="col-12 col-lg-3">
                <select
                  class="select1"
                  name="category"
                  id="select2"
                  onChange={getDatarecipe}
                >
                  <option value="">Select Category</option>
                  {categoriesGF.map((category) => (
                    <option
                      key={category.strCategory}
                      value={category.strCategory}
                    >
                      {category.strCategory}
                    </option>
                  ))}
                </select>
              </div>
              <div class="col-12 col-lg-3 text-right">
                <button class="btn delicious-btn">Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default FormGF;
