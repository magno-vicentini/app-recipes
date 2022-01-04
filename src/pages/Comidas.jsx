import React, { useState } from 'react';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchButton from '../inputs/Search';

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
        >
          <img src={ searchIcon } alt="icon-search" />
        </button>
      </header>
      { inputSearch && <SearchButton /> }
    </>
  );
}

export default Comidas;
