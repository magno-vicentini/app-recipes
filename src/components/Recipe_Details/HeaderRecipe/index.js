import React, { useState } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../../images/blackHeartIcon.svg';
import shareIcon from '../../../images/shareIcon.svg';

export default function HeaderRecipe({ image, title, subtitle }) {
  const [isFavorite, setFavorite] = useState(false);
  const toggleFavorite = () => {
    setFavorite(!isFavorite);
  };

  return (
    <div className="header-recipe-container">
      <img
        src={ image }
        alt={ title }
      />
      <div className="header-recipe-content">
        <h2>{ title }</h2>
        <h4>{ subtitle }</h4>
        <div className="icons-content">
          <img src={ shareIcon } alt="share icon" />
          {isFavorite
            ? (
              <button
                type="button"
                onClick={ toggleFavorite }
              >
                <img
                  src={ blackHeartIcon }
                  alt="black heart"
                />
              </button>
            )
            : (
              <button
                type="button"
                onClick={ toggleFavorite }
              >
                <img
                  src={ whiteHeartIcon }
                  alt="white heart"
                />
              </button>
            )}
        </div>
      </div>
    </div>
  );
}

HeaderRecipe.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
