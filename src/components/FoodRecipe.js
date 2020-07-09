import React, { useContext, useEffect, useState, browserHistory } from "react";
import { FoodModalContext } from "../context/FoodModalContext";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import recipeFoodPost from "./recipeFoodPost";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
  },
}));

const FoodRecipe = ({ recipe }) => {
  // Configuración del modal de material-ui
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //extraemos valores del context
  const { recipeInfo, setidrecipe, setRecipe } = useContext(FoodModalContext);

  //muestra los ingredientes
  const showIngredients = (recipeInfo) => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (recipeInfo[`strIngredient${i}`]) {
        ingredients.push(
          <li>
            {recipeInfo[`strIngredient${i}`]}
            {/* {recipeInfo[`strMeasure${i}`]} */}
          </li>
        );
      }
    }

    return ingredients;
  };
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <div className=" single-best-recipe-area">
          <div className=" recipe-content">
            <img
              className="card-img-top"
              src={recipe.strMealThumb}
              alt={`Image from ${recipe.strMeal}`}
            ></img>
            <h5 className="card-header">{recipe.strMeal}</h5>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setidrecipe(recipe.idMeal);
              setRecipe({});
              handleOpen();
            }}
          >
            Read Recipe
          </button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={() => {
          //una vez que se cierra el modal, queremos limpiar
          //el state del idrecipe, para eso, vuelve a null
          setidrecipe(null);
          handleClose();
        }}
      >
        <div
          style={modalStyle}
          class={classes.paper}
          id="myModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-body">
                <Router path="/recipeFoodPost">
                  <recipeFoodPost recipeInfo={recipeInfo} />
                </Router>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FoodRecipe;
