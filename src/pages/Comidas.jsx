import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function Comidas() {
  return (
    <>
      <Header />
      Comidas
    </>
  );
}

Comidas.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Comidas;
