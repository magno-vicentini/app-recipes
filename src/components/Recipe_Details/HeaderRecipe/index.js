import React from 'react';
import PropTypes from 'prop-types';

export default function HeaderRecipe({ src, title, subtitle }) {
  return (
    <div className="header-recipe-container">
      <img
        src={ src }
        alt={ title }
      />
      <h2>{ title }</h2>
      <h4>{ subtitle }</h4>
    </div>
  );
}

HeaderRecipe.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
