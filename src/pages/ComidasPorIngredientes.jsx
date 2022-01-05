import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ComidasPorIngredientes() {
  const txt = 'ComidasPorIngredientes';
  return (
    <div className="ComidasPorIngredientes-content">
      <Header showSearch={ false } titlePage="Explorar Ingredientes" />
      {txt}
      <Footer />
    </div>
  );
}

export default ComidasPorIngredientes;
