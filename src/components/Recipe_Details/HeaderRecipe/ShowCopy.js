import React from 'react';
import PropTypes from 'prop-types';

export default function ShowCopy({ showIsCopy }) {
  return (
    showIsCopy ? <p>Link copiado!</p> : ''
  );
}

ShowCopy.propTypes = {
  showIsCopy: PropTypes.bool.isRequired,
};
