<<<<<<< HEAD
import React from 'react';

function Bebidas() {
  const txt = 'Bebidas';
  return (
    <div className="Bebidas-content">
      {txt}
=======
import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ResultCard from '../components/ResultCard';
import AppDeReceitasContext from '../Context/AppDeReceitasContext';

function Bebidas() {
  const TWELVE = 12;
  const { render } = useContext(AppDeReceitasContext);

  return (
    <div className="Bebidas-content">
      <Header titlePage="Bebidas" />
      {render.length > 0
        && render.map((e, i) => {
          if (i < TWELVE) {
            return (
              <ResultCard
                drinkId={ e.idDrink }
                index={ i }
                key={ i }
                image={ e.strDrinkThumb }
                name={ e.strDrink }
              />
            );
          }
          return ('');
        })}
      <Footer />
>>>>>>> 674181e55b4e347dff248e3723c859af225ee6c1
    </div>
  );
}

export default Bebidas;
