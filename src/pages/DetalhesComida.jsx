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
  const [showButton, setShowButton] = useState(true);
  const [recipe, setRecipe] = useState({});
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [recipeMeasures, setRecipeMeasures] = useState([]);

  const { params } = useRouteMatch();

  const getRecipe = async () => {
    const recommendedsResult = await fetchDrinkApi('s', '');
    setRecommendeds(recommendedsResult.drinks);
    const recipeObj = await fetchRecipe('food', params.id);
    const recipeResult = recipeObj.meals[0];
    setRecipe(recipeResult);
    const ingredients = [];
    const measures = [];
    for (let i = 1; i <= TWENTY; i += 1) {
      const ingredient = recipeResult[`strIngredient${i}`];
      const measure = recipeResult[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(ingredient);
        measures.push(measure);
      }
    }
    setRecipeIngredients(ingredients);
    setRecipeMeasures(measures);
  };
  const donedRecipes = JSON.parse(localStorage.getItem('doneRecipes'));

  useEffect(() => {
    getRecipe();
  }, []);

  useEffect(() => {
    const thisRecipe = donedRecipes && donedRecipes.find((e) => e.id === params.id);
    if (donedRecipes && thisRecipe) {
      setShowButton(!showButton);
    }
  }, [donedRecipes]);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   const obj = {
  //     id: params.id,
  //     isStarted: true,
  //   };
  //   setOpenRecipes([...openRecipes, obj]);
  // };

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
            measures={ recipeMeasures }
          />
          <Instructions instructionsText={ recipe.strInstructions } />
          <Video link={ recipe.strYoutube } />
          <Recommended gender="drinks" recipes={ recommendeds } />
          { showButton && (
            <button
              className="btn-start-recipe"
              type="button"
              data-testid="start-recipe-btn"
              // onClick={ handleClick }
            >
              Iniciar Receita
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default DetalhesComida;
