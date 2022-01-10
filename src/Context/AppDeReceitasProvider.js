import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppDeReceitasContext from './AppDeReceitasContext';
import mockComida from '../mocks/comidas';
import mockBebidas from '../mocks/bebidas';

const AppDeReceitasProveider = ({ children, renderTest = '' }) => {
  const [filter, setFilter] = useState('i');
  const [recipe, setRecipe] = useState({});
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [render, setRender] = useState([]);

  useEffect(() => {
    if(renderTest === 'comidas') setRender(mockComida);
    else if(renderTest === 'bebidas') setRender(mockBebidas);
  }, []);

  const handleRadioChange = ({ target }) => {
    if (target.value === 'ingredientes') {
      setFilter('i');
      setSearchInput('');
    } else if (target.value === 'nome') {
      setFilter('s');
      setSearchInput('');
    } else if (target.value === 'primeira letra') {
      setFilter('f');
      setSearchInput('');
    }
  };
  const context = {
    recipe,
    favoriteRecipes,
    setFavoriteRecipes,
    setRecipe,
    setRender,
    render,
    handleRadioChange,
    filter,
    setSearchInput,
    searchInput,
  };
  return (
    <AppDeReceitasContext.Provider value={ context }>
      { children }
    </AppDeReceitasContext.Provider>
  );
};

AppDeReceitasProveider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppDeReceitasProveider;
