import React from 'react';
import PropTypes from 'prop-types';

export default function Instructions({ instructionsText }) {
  return (
    <div className="instructions-container">
      <h2>Instructions</h2>
      <div className="instructions-content">
        <p>{instructionsText}</p>
      </div>
    </div>
  );
}

Instructions.propTypes = {
  instructionsText: PropTypes.string.isRequired,
};
