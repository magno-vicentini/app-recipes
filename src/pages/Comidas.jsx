import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ResultCard from '../components/ResultCard';
import AppDeReceitasContext from '../Context/AppDeReceitasContext';
import useCategory from '../hooks/useCategory';

function Comidas() {
  const [twelveFoods, setTwelveFoods] = useState([]);
  const [mealsCategories, setMealsCategories] = useState([]);
  const TWELVE = 12;

  const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  useEffect(() => {
    const fetchMeals = async () => {
      const { meals } = await fetch(URL).then((response) => response.json());
      setTwelveFoods(meals.slice(0, TWELVE));
    };
    fetchMeals();
  }, []);

  useCategory('themealdb', setMealsCategories, 'meals');
  const { render } = useContext(AppDeReceitasContext);

  return (
    <div>
      <Header titlePage="Comidas" />
      {render.length > 0
        && render.map((e, i) => {
          if (i < TWELVE) {
            return (
              <ResultCard
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
      {twelveFoods.map((food, index) => (
        <div key={ food.idMeal } data-testid={ `${index}-recipe-card` }>
          <img src={ food.strMealThumb } alt="" data-testid={ `${index}-card-img` } />
          <p data-testid={ `${index}-card-name` }>{food.strMeal}</p>
        </div>
      ))}
      {
        mealsCategories.map((meal) => (
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
    </div>
  );
}

Comidas.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Comidas;
