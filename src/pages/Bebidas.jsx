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
                id={ e.idDrink }
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
    </div>
  );
}

export default Bebidas;
