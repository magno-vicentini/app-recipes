import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import AppDeReceitasContext from '../../Context/AppDeReceitasContext';
import { fetchDrinkApi, fetchMealApi } from '../../services/fetchAPI';

export default function Search() {
  const { handleRadioChange } = useContext(AppDeReceitasContext);
  const { pathname } = useLocation();
  const handleClick = async (e) => {
    e.preventDefault();
    if (pathname === '/comidas') {
      const respost = await fetchMealApi('i', 'lemon');
      console.log(respost);
    } else if (pathname === '/explorar/comidas/area') {
      const respost = await fetchMealApi('a', 'canadian');
      console.log(respost);
    } else if (pathname === '/bebidas') {
      const respost = await fetchDrinkApi('i', 'vodka');
      console.log(respost);
    } else {
      console.log('error');
    }
  };

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
        onClick={ handleClick }
      >
        Buscar
      </button>
    </div>
  );
}
