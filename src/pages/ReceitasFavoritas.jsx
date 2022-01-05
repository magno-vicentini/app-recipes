import React from 'react';
import Header from '../components/Header';

function ReceitasFavoritas() {
  const txt = 'ReceitasFavoritas';
  return (
    <div className="ReceitasFavoritas-content">
      <Header showSearch={ false } titlePage="Receitas Favoritas" />
      {txt}
    </div>
  );
}

export default ReceitasFavoritas;
