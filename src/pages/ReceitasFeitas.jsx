import React from 'react';
import Header from '../components/Header';

function ReceitasFeitas() {
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
    </div>
  );
}

export default ReceitasFeitas;
