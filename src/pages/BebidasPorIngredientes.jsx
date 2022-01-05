import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function BebidasPorIngredientes() {
  const txt = 'BebidasPorIngredientes';
  return (
    <div className="BebidasPorIngredientes-content">
      <Header showSearch={ false } titlePage="Explorar Ingredientes" />
      {txt}
      <Footer />
    </div>
  );
}

export default BebidasPorIngredientes;
