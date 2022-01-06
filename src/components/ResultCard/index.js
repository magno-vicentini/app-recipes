import React from 'react';
import PropTypes from 'prop-types';

export default function ResultCard({ index, name, image }) {
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <p data-testid={ `${index}-card-name` }>{ name }</p>
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
};
