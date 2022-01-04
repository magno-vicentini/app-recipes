import React, { useState } from 'react';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchButton from '../components/inputs/Search';

function Comidas({ history }) {
  const [inputSearch, setInputSearch] = useState(false);

  function showInput() {
    return (inputSearch === false) ? setInputSearch(true) : setInputSearch(false);
  }
  return (
    <>
      <header>
        <button
          data-testId="profile-top-btn"
          type="button"
          onClick={ () => history.push('./perfil') }
          src={ profileIcon }
        >
          <img src={ profileIcon } alt="icon-profile" />
        </button>
        <h1 data-testId="page-title">Comidas</h1>
        <button
          data-testId="search-top-btn"
          type="button"
          onClick={ () => showInput() }
          src={ searchIcon }
        >
          <img src={ searchIcon } alt="icon-search" />
        </button>
      </header>
      { inputSearch && <SearchButton /> }
    </>
  );
}

Comidas.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Comidas;
