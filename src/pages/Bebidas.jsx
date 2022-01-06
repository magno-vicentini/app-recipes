import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Bebidas() {
  const txt = 'Bebidas';
  return (
    <div className="Bebidas-content">
      <Header titlePage="Bebidas" />
      {txt}
      <Footer />
    </div>
  );
}

export default Bebidas;
