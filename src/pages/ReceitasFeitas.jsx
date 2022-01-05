import React from 'react';
import Header from '../components/Header';

function ReceitasFeitas() {
  const txt = 'ReceitasFeitas';
  return (
    <div className="ReceitasFeitas-content">
      <Header showSearch={ false } titlePage="Receitas Feitas" />
      {txt}
    </div>
  );
}

export default ReceitasFeitas;
