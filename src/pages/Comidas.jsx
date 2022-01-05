import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Comidas() {
  const txt = 'COMIDAS';
  return (
    <div>
      <Header />
      { txt }
      <Footer />
    </div>
  );
}

Comidas.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Comidas;
