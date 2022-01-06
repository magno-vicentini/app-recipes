import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ResultCard from '../components/ResultCard';
import AppDeReceitasContext from '../Context/AppDeReceitasContext';

function Comidas() {
  const TWELVE = 12;
  const { render } = useContext(AppDeReceitasContext);

  return (
    <div>
      <Header titlePage="Comidas" />
      {render.length > 0
        && render.map((e, i) => {
          if (i < TWELVE) {
            return (
              <ResultCard
                mealId={ e.idMeal }
                index={ i }
                key={ i }
                image={ e.strMealThumb }
                name={ e.strMeal }
              />
            );
          }
          return ('');
        })}
      <Footer />
    </div>
  );
}

Comidas.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Comidas;
