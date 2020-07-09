import React, { useContext, useState, Fragment } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import { RecipesContext } from "../context/RecipesContext";

const Form = () => {
  const [search, setSearch] = useState({
    name: "",
    category: "",
  });

  //en lugar de pasarle las cosas por props, se las pasamos por useContext
  const { categories } = useContext(CategoriesContext);
  const { searchRecipes, setConsult } = useContext(RecipesContext);
  const getData = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Fragment>
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
                <h2>What kind of drink lifts your mood?</h2>
              </div>
              <div class="row">
                <div class="col-12 col-lg-3">
                  <input
                    name="name"
                    className="form-control"
                    type="text"
                    placeholder="Search..."
                    onChange={getData}
                  ></input>
                </div>
                <div class="col-12 col-lg-3">
                  <select
                    class="select1"
                    name="category"
                    onChange={getData}
                    id="select2"
                  >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
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
                  {/* onClick={FUNCION QUE MUESTRA DIVS DE RESULT} 
              a partir de ese click se muestra Recipe.js */}
                  <button class="btn delicious-btn">Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Form;
