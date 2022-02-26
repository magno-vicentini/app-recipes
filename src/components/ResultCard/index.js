import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ResultCard.css';

export default function ResultCard({ index, name, image, type }) {
  return (
    <div
      data-testid={ `${index}-${type}-card` }
      className="recipe-card"
    >
      <p
        data-testid={ type === 'recipe'
          ? `${index}-card-name`
          : `${index}-${type}-title` }
      >
        { name }

      </p>
      <img
        src={ image }
        data-testid={ `${index}-card-img` }
        alt={ name }
      />
    </div>
  );
}

ResultCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
