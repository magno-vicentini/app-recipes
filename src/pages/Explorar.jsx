import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Explorar() {
  const txt = 'Explorar';
  return (
    <div className="Explorar-content">
      <Header showSearch={ false } titlePage="Explorar" />
      {txt}
      <Footer />
    </div>
  );
}

export default Explorar;
