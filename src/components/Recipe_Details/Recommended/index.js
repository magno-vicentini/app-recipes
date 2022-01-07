import React from 'react';
import PropTypes from 'prop-types';
import ResultCard from '../../ResultCard';
import './style.css';

export default function Recommended({ recipes, gender }) {
  const SIX = 6;
  return (
    <div className="recommended-container">
      <h2>Recomendadas</h2>
      <div className="recommended-content">
        {recipes.map((e, i) => {
          if (i < SIX) {
            return (
              <ResultCard
                type="recomendation"
                id={ gender === 'meals' ? e.idMeal : e.idDrink }
                index={ i }
                key={ i }
                image={ gender === 'meals' ? e.strMealThumb : e.strDrinkThumb }
                name={ gender === 'meals' ? e.strMeal : e.strDrink }
              />
            );
          }
          return ('');
        })}
      </div>
    </div>
  );
}

Recommended.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape(
    {},
  )).isRequired,
  gender: PropTypes.string.isRequired,
};
