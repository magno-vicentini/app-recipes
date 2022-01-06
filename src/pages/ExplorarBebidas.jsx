import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExplorarBebidas() {
  const txt = 'ExplorarBebidas';
  return (
    <div className="ExplorarBebidas-content">
      <Header showSearch={ false } titlePage="Explorar Bebidas" />
      {txt}
      <Footer />
    </div>
  );
}

export default ExplorarBebidas;
