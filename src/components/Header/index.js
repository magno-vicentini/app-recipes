/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import SearchBar from '../SearchBar';
import '../../styles/Header.css';

function Header({ showSearch = true, titlePage }) {
  const [inputSearch, setInputSearch] = useState(false);

  function showInput() {
    return (inputSearch === false) ? setInputSearch(true) : setInputSearch(false);
  }

  return (
    <div className="header-container">
      <header className="header-card">
        <Link
          data-testid="profile-top-btn"
          to="/perfil"
          src={ profileIcon }
        >
          <img src={ profileIcon } alt="icon-profile" />
        </Link>
        <h1 data-testid="page-title">{ titlePage }</h1>
        { showSearch && (
          <div className="button-search">
            <img src={ searchIcon } alt="icon-search" onClick={ () => showInput() } />
          </div>
        )}
      </header>
      { inputSearch && <SearchBar /> }
    </div>
  );
}

Header.propTypes = {
  showSearch: PropTypes.bool,
  titlePage: PropTypes.string.isRequired,
};

Header.defaultProps = {
  showSearch: true,
};

export default Header;
