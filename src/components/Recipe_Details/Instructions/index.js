import React from 'react';
import PropTypes from 'prop-types';
import './instructions.css';

export default function Instructions({ instructionsText }) {
  return (
    <div className="instructions-container">
      <h2>Instructions</h2>
      <div>
        <p
          data-testid="instructions"
        >
          {instructionsText}
        </p>
      </div>
    </div>
  );
}

Instructions.propTypes = {
  instructionsText: PropTypes.string,
};

Instructions.defaultProps = {
  instructionsText: '',
};
