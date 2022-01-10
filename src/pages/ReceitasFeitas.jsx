import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import './style/ReceitasFeitas.css';

function ReceitasFeitas() {
  const [allRecipesDone, setAllRecipesDone] = useState([]);
  const [recipesFiltered, setRecipesFiltered] = useState([]);
  const [showIsCopy, setShowIsCopy] = useState(false);
  const TWO_SECONDS = 2000;

  useEffect(() => {
    setAllRecipesDone(JSON.parse(localStorage.getItem('doneRecipes')));
    setRecipesFiltered(JSON.parse(localStorage.getItem('doneRecipes')));
  }, []);

  function copyRecipeLink(pathDetail) {
    const link = `http://localhost:3000${pathDetail}`;
    navigator.clipboard.writeText(link);
    setShowIsCopy(true);
    setTimeout(() => setShowIsCopy(false), TWO_SECONDS);
  }

  return (
    <div className="ReceitasFeitas-content">
      <Header showSearch={ false } titlePage="Receitas Feitas" />
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => setRecipesFiltered(allRecipesDone) }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => setRecipesFiltered(allRecipesDone
          .filter((ele) => ele.type === 'comida')) }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => setRecipesFiltered(allRecipesDone
          .filter((ele) => ele.type === 'bebida')) }
      >
        Drinks
      </button>
      {recipesFiltered.map((recipe, index) => {
        const pathDetail = `/${recipe.type}s/${recipe.id}`;
        return (
          <div key={ recipe.id }>
            <Link to={ pathDetail }>
              <h1 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h1>
            </Link>
            <Link to={ pathDetail }>
              <img
                className="recipe-image"
                src={ recipe.image }
                alt={ recipe.name }
                data-testid={ `${index}-horizontal-image` }
              />
            </Link>
            <button
              type="button"
              data-testid="share-btn"
              onClick={ () => copyRecipeLink(pathDetail) }
              src={ shareIcon }
            >
              <img
                src={ shareIcon }
                alt="share icon"
                data-testid={ `${index}-horizontal-share-btn` }
              />
            </button>
            { showIsCopy ? <p>Link copiado!</p> : '' }
            <h3
              data-testid={ `${index}-horizontal-done-date` }
            >
              { `Feita em: ${recipe.doneDate}` }
            </h3>
            {(recipe.type === 'comida') ? (
              <div>
                <p
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  { `${recipe.area} - ${recipe.category}` }
                </p>
                { recipe.tags
                  .map((tag) => (
                    <button
                      type="button"
                      key={ tag }
                      data-testid={ `${index}-${tag}-horizontal-tag` }
                    >
                      { tag }
                    </button>))}
              </div>
            ) : (
              <h3
                data-testid={ `${index}-horizontal-top-text` }
              >
                { recipe.alcoholicOrNot }
              </h3>
            )}

          </div>

        );
      })}
    </div>
  );
}

export default ReceitasFeitas;
