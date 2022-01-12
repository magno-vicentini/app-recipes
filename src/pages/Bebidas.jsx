import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ResultCard from '../components/ResultCard';
import AppDeReceitasContext from '../Context/AppDeReceitasContext';
import useCategoryDrinks from '../hooks/useCategoryDrinks';
import { categoryDrink } from '../mocks/bebidas';

function Bebidas({ renderTest = false }) {
  const searchFilter = 'search.php?s=';
  const [drinksCategories, setDrinksCategories] = useState([]);
  const [filterUsed, setFilterUsed] = useState(searchFilter);
  const TWELVE = 12;
  const FIVE = 5;

  const URL = `https://www.thecocktaildb.com/api/json/v1/1/${filterUsed}`;

  const { render,
    setRender,
    isFilterByIngredient } = useContext(AppDeReceitasContext);

  const fetchDrinks = async () => {
    const { drinks } = await fetch(URL).then((response) => response.json());
    setRender(drinks)
  };
  useEffect(() => {
    if (!isFilterByIngredient) {
      fetchDrinks();
      if (renderTest) {
        setDrinksCategories(categoryDrink);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterUsed]);

  useCategoryDrinks(setDrinksCategories);

  return (
    <div className="Bebidas-content">
      <Header titlePage="Bebidas" />
      {
        drinksCategories.slice(0, FIVE).map((drink) => (
          <button
            data-testid={ `${drink.strCategory}-category-filter` }
            type="button"
            onClick={ () => ((filterUsed === searchFilter
              || filterUsed !== `filter.php?c=${drink.strCategory}`)
              ? setFilterUsed(`filter.php?c=${drink.strCategory}`)
              : setFilterUsed(searchFilter)) }
            key={ drink.strCategory }
          >
            {drink.strCategory}
          </button>
        ))
      }
      <button
        data-testid="All-category-filter"
        type="button"
        onClick={ () => setFilterUsed(searchFilter) }
      >
        All
      </button>
      {render
        && render.map((e, i) => {
          if (i < TWELVE) {
            return (
              <Link key={ i } to={ `/bebidas/${e.idDrink}` }>
                <ResultCard
                  type="recipe"
                  id={ e.idDrink }
                  index={ i }
                  image={ e.strDrinkThumb }
                  name={ e.strDrink }
                />
              </Link>
            );
          }
          return ('');
        })}
      <Footer />
    </div>
  );
}

export default Bebidas;
