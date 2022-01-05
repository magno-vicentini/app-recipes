import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExplorarComidas() {
  const txt = 'ExplorarComidas';
  return (
    <div className="ExplorarComidas-content">
      <Header showSearch={ false } titlePage="Explorar Comidas" />
      {txt}
      <Footer />
    </div>
  );
}

export default ExplorarComidas;
