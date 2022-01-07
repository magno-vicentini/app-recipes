<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

function Bebidas() {
  const txt = 'Bebidas';
  return (
    <div className="Bebidas-content">
      {txt}
=======
import React, { useContext } from 'react';
=======
import React, { useContext, useEffect, useState } from 'react';
>>>>>>> 1e849d84a8e369eab32f9054b98f1fe40f4c345c
import Footer from '../components/Footer';
import Header from '../components/Header';
import ResultCard from '../components/ResultCard';
import AppDeReceitasContext from '../Context/AppDeReceitasContext';
import useCategory from '../hooks/useCategory';

function Bebidas() {
  const [twelveDrinks, setTwelveDrinks] = useState([]);
  const [drinksCategories, setDrinksCategories] = useState([]);
  const TWELVE = 12;

  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  useEffect(() => {
    const fetchDrinks = async () => {
      const { drinks } = await fetch(URL).then((response) => response.json());
      setTwelveDrinks(drinks.slice(0, TWELVE));
    };
    fetchDrinks();
  }, []);

  useCategory('thecocktaildb', setDrinksCategories, 'drinks');

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
      {twelveDrinks.map((food, index) => (
        <div key={ food.idDrink } data-testid={ `${index}-recipe-card` }>
          <img src={ food.strDrinkThumb } alt="" data-testid={ `${index}-card-img` } />
          <p data-testid={ `${index}-card-name` }>{food.strDrink}</p>
        </div>
      ))}
      {
        drinksCategories.map((meal) => (
          <button
            data-testid={ `${meal.strCategory}-category-filter` }
            type="button"
            key={ meal.strCategory }
          >
            {meal.strCategory}
          </button>
        ))
      }
      <Footer />
>>>>>>> 674181e55b4e347dff248e3723c859af225ee6c1
    </div>
  );
}

export default Bebidas;
