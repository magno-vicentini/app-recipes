import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import HeaderRecipe from '../components/Recipe_Details/HeaderRecipe';
import Ingredients from '../components/Recipe_Details/Ingredients';
import Instructions from '../components/Recipe_Details/Instructions';
import Video from '../components/Recipe_Details/Video';
import Recommended from '../components/Recipe_Details/Recommended';
import { fetchRecipe, fetchDrinkApi } from '../services/fetchAPI';
import './style/Detalhes.css';

function DetalhesComida() {
  const TWENTY = 20;

  const [recommendeds, setRecommendeds] = useState([]);
  const [buttomText, setButtomText] = useState('Iniciar Receita');
  const [showButton, setShowButton] = useState(true);
  const [recipe, setRecipe] = useState({});
  const [recipeIngredients, setRecipeIngredients] = useState([]);

  const { params } = useRouteMatch();

  const getRecipe = async () => {
    const recommendedsResult = await fetchDrinkApi('s', '');
    setRecommendeds(recommendedsResult.drinks);
    const recipeObj = await fetchRecipe('food', params.id);
    const recipeResult = recipeObj.meals[0];
    setRecipe(recipeResult);
    const ingredients = [];
    for (let i = 1; i <= TWENTY; i += 1) {
      const ingredient = recipeResult[`strIngredient${i}`];
      const measure = recipeResult[`strMeasure${i}`];
      const letMeasure = measure === null ? '-' : measure;
      if (ingredient) {
        ingredients.push(`${ingredient} - ${letMeasure}`);
      }
    }
    setRecipeIngredients(ingredients);
  };
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

  useEffect(() => {
    getRecipe();
  }, []);

  useEffect(() => {
    const thisRecipe = doneRecipes && doneRecipes.find((e) => e.id === params.id);
    if (thisRecipe) {
      setShowButton(!showButton);
    }
    if (inProgressRecipes
      && inProgressRecipes.meals
      && inProgressRecipes.meals[params.id]) {
      setButtomText('Continuar Receita');
    }
  }, [doneRecipes, inProgressRecipes]);

  const handleClick = (e) => {
    e.preventDefault();
    if (buttomText === 'Iniciar Receita') {
      const newInProgress = { ...inProgressRecipes };
      const key = params.id;
      newInProgress.meals = {
        ...newInProgress.meals,
        [key]: recipeIngredients,
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(newInProgress));
      setButtomText('Continuar Receita');
    }
  };

  return (
    <div className="DetalhesComida-container">
      {recipe !== {} && (
        <div className="details-food-content">
          <HeaderRecipe
            image={ recipe.strMealThumb }
            title={ recipe.strMeal }
            subtitle={ recipe.strCategory }
          />
          <Ingredients
            ingredients={ recipeIngredients }
          />
          <Instructions instructionsText={ recipe.strInstructions } />
          <Video link={ recipe.strYoutube } />
          <Recommended gender="drinks" recipes={ recommendeds } />
          { showButton && (
            <button
              className="btn-start-recipe"
              type="button"
              data-testid="start-recipe-btn"
              onClick={ handleClick }
            >
              { buttomText }
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default DetalhesComida;
