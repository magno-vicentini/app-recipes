import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ResultCard from '../components/ResultCard';
import AppDeReceitasContext from '../Context/AppDeReceitasContext';
import useCategoryMeals from '../hooks/useCategoryMeals';

function Comidas() {
  const searchFilter = 'search.php?s=';
  const [mealsCategories, setMealsCategories] = useState([]);
  const [filterUsed, setFilterUsed] = useState(searchFilter);
  const FIVE = 5;
  const TWELVE = 12;

  useCategoryMeals(setMealsCategories);
  const { render } = useContext(AppDeReceitasContext);

  return (
    <div>
      <Header titlePage="Comidas" />
      {
        mealsCategories.slice(0, FIVE).map((meal) => (
          <button
            data-testid={ `${meal.strCategory}-category-filter` }
            type="button"
            onClick={ () => ((filterUsed === searchFilter
              || filterUsed !== `filter.php?c=${meal.strCategory}`)
              ? setFilterUsed(`filter.php?c=${meal.strCategory}`)
              : setFilterUsed(searchFilter)) }
            key={ meal.strCategory }
          >
            {meal.strCategory}
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
      {render.length > 0
        && render.map((e, i) => {
          if (i < TWELVE) {
            return (
              <ResultCard
                type="recipe"
                id={ e.idMeal }
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
