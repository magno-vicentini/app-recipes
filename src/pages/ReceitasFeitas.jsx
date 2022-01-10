import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

function ReceitasFeitas() {
  const [allRecipesDone, setAllRecipesDone] = useState([]);

  useEffect(() => {
    setAllRecipesDone(JSON.parse(localStorage.getItem('doneRecipes')));
  }, []);

  return (
    <div className="ReceitasFeitas-content">
      <Header showSearch={ false } titlePage="Receitas Feitas" />
      <button
        type="button"
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>
      {allRecipesDone.map((recipe) => (
        <div key={ recipe.id }>
          <img src={ recipe.image } alt={ recipe.name } />
        </div>
      ))}
    </div>
  );
}

export default ReceitasFeitas;
