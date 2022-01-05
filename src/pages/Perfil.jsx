import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Perfil() {
  const txt = 'Perfil';
  return (
    <div className="Perfil-content">
      <Header />
      {txt}
      <Footer />
    </div>
  );
}

export default Perfil;
