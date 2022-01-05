import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ComidasPorLocal() {
  const txt = 'ComidasPorLocal';
  return (
    <div className="ComidasPorLocal-content">
      <Header titlePage="Explorar Origem" />
      {txt}
      <Footer />
    </div>
  );
}

export default ComidasPorLocal;
