import React, { useContext, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ResultCard from '../components/ResultCard';
import AppDeReceitasContext from '../Context/AppDeReceitasContext';
import useCategoryDrinks from '../hooks/useCategoryDrinks';
import { categoryDrink } from '../mocks/bebidas';

function Bebidas({ renderTest = false }) {
  const [twelveDrinks, setTwelveDrinks] = useState([]);
  const [drinksCategories, setDrinksCategories] = useState([]);
  const [filterUsed, setFilterUsed] = useState('search.php?s=');
  const TWELVE = 12;
  const FIVE = 5;

  const URL = `https://www.thecocktaildb.com/api/json/v1/1/${filterUsed}`;
  useEffect(() => {
    const fetchDrinks = async () => {
      const { drinks } = await fetch(URL).then((response) => response.json());
      setTwelveDrinks(drinks.slice(0, TWELVE));
      if (renderTest) {
        setDrinksCategories(categoryDrink);
      }
    };
    fetchDrinks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterUsed]);

  useCategoryDrinks(setDrinksCategories);

  const { render } = useContext(AppDeReceitasContext);

  return (
    <div className="Bebidas-content">
      <Header titlePage="Bebidas" />
      {render.length > 0
        && render.map((e, i) => {
          if (i < TWELVE) {
            return (
              <ResultCard
                type="recipe"
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

      {
        drinksCategories.slice(0, FIVE).map((drink) => (
          <button
            data-testid={ `${drink.strCategory}-category-filter` }
            type="button"
            onClick={ () => setFilterUsed(`filter.php?c=${drink.strCategory}`) }
            key={ drink.strCategory }
          >
            {drink.strCategory}
          </button>
        ))
      }
      {twelveDrinks.map((food, index) => (
        <div key={ food.idDrink } data-testid={ `${index}-recipe-card` }>
          <img src={ food.strDrinkThumb } alt="" data-testid={ `${index}-card-img` } />
          <p data-testid={ `${index}-card-name` }>{food.strDrink}</p>
        </div>
      ))}

      <Footer />
    </div>
  );
}

export default Bebidas;
