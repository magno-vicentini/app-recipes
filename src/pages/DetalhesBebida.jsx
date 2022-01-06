import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import HeaderRecipe from '../components/Recipe_Details/HeaderRecipe';
import Ingredients from '../components/Recipe_Details/Ingredients';
import Instructions from '../components/Recipe_Details/Instructions';
import Recommended from '../components/Recipe_Details/Recommended';
import { fetchRecipe, fetchDrinkApi } from '../services/fetchAPI';

function DetalhesBebida() {
  const TWENTY = 20;
  const [recommendeds, setRecommendeds] = useState([]);
  const [recipe, setRecipe] = useState({});
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [recipeMeasures, setRecipeMeasures] = useState([]);
  const { params } = useRouteMatch();
  const getRecipe = async () => {
    const recommendedsResult = await fetchDrinkApi('s', '');
    setRecommendeds(recommendedsResult.drinks);
    const recipeObj = await fetchRecipe('food', params.id);
    const recipeResult = recipeObj.drinks[0];
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
    <div className="details-drink-container">
      {recipe !== {} && (
        <div className="details-food-content">
          <HeaderRecipe
            image={ recipe.strDrinkThumb }
            title={ recipe.strDrink }
            subtitle={ `${recipe.strCategory} - ${recipe.strAlcoholic}` }
          />
          <Ingredients
            ingredients={ recipeIngredients }
            measures={ recipeMeasures }
          />
          <Instructions instructionsText={ recipe.strInstructions } />
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

export default DetalhesBebida;
