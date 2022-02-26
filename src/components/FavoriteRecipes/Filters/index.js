import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default function Filters({ setFilter }) {
  const handleClick = (e) => {
    e.preventDefault();
    const { target: { innerHTML } } = e;
    setFilter(innerHTML);
  };

  return (
    <div className="filter-container">
      <div className="button-filter">
        <button
          onClick={ handleClick }
          type="button"
          data-testid="filter-by-all-btn"
        >
          All
        </button>
      </div>
      <div className="button-filter">
        <button
          onClick={ handleClick }
          type="button"
          data-testid="filter-by-food-btn"
        >
          Food
        </button>
      </div>
      <div className="button-filter">
        <button
          onClick={ handleClick }
          type="button"
          data-testid="filter-by-drink-btn"
        >
          Drinks
        </button>
      </div>
    </div>
  );
}

Filters.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
