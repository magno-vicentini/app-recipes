import React, { useContext } from 'react';
import AppDeReceitasContext from '../../Context/AppDeReceitasContext';

export default function Search() {
  const { handleRadioChange } = useContext(AppDeReceitasContext);

  return (
    <div className="search-content">
      <input
        type="text"
        data-testid="search-input"
        placeholder="Search Recipe"
      />
      <div
        className="filters-inputs-container"
        onChange={ handleRadioChange }
      >
        <label htmlFor="ingredient-filter">
          <input
            id="ingredient-filter"
            type="radio"
            value="ingredientes"
            name="filter"
            data-testid="ingredient-search-radio"
          />
          Ingredientes
        </label>
        <label htmlFor="name-filter">
          <input
            id="name-filter"
            type="radio"
            value="nome"
            name="filter"
            data-testid="name-search-radio"
          />
          Nome
        </label>
        <label htmlFor="first-letter-filter">
          <input
            id="first-letter-filter"
            type="radio"
            value="primeira letra"
            name="filter"
            data-testid="first-letter-search-radio"
          />
          Primeira letra
        </label>
      </div>
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Buscar
      </button>
    </div>
  );
}
