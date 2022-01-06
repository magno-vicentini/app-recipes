import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import HeaderRecipe from '../components/Recipe_Details/HeaderRecipe';
import Ingredients from '../components/Recipe_Details/Ingredients';
import Instructions from '../components/Recipe_Details/Instructions';
import Video from '../components/Recipe_Details/Video';
import Recommended from '../components/Recipe_Details/Recommended';
import { fetchRecipe, fetchMealApi } from '../services/fetchAPI';

function DetalhesComida() {
  const TWENTY = 20;
  const [recommendeds, setRecommendeds] = useState([]);
  const [recipe, setRecipe] = useState({});
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [recipeMeasures, setRecipeMeasures] = useState([]);
  const { params } = useRouteMatch();
  const getRecipe = async () => {
    const recommendedsResult = await fetchMealApi('s', '');
    setRecommendeds(recommendedsResult.meals);
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

  useEffect(() => {
    getRecipe();
  }, []);

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
          <Recommended recipes={ recommendeds } />
          <button
            type="button"
            data-testid="start-recipe-btn"
          >
            Iniciar Receita
          </button>
        </div>
      )}
    </div>
  );
}

export default DetalhesComida;
