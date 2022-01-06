import React from 'react';
import PropTypes from 'prop-types';

export default function Ingredients({ ingredients, measures }) {
  return (
    <div className="ingredients-container">
      <h2>Ingredientes</h2>
      <div className="ingredients-content">
        <ul>
          {ingredients.map((e, i) => <li key={ i }>{`${e} - ${measures[i]}`}</li>)}
        </ul>
      </div>
    </div>
  );
}

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  measures: PropTypes.arrayOf(PropTypes.string).isRequired,
};
