import React from 'react';
import PropTypes from 'prop-types';
import ResultCard from '../../ResultCard';

export default function Recommended({ recipes }) {
  const SIX = 6;
  return (
    <div className="recommended-container">
      <h2>Recomendadas</h2>
      <div className="recommended-content">
        {recipes.map((e, i) => {
          if (i <= SIX) {
            return (
              <ResultCard
                id={ e.idMeal }
                index={ i }
                key={ i }
                image={ e.strMealThumb }
                name={ e.strMeal }
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
};
