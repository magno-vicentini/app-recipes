import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import LabelIngredient from './LabelIngredient';

export default function IngredientsInProgress({ ingredients, type }) {
  const [inProgressRecipes, setInProgressRecipes] = useState([]);

  const gatInProgressRecipes = async () => {
    const getInProgress = await JSON.parse(localStorage.getItem('inProgressRecipes'));
    setInProgressRecipes(getInProgress);
  };

  useEffect(() => {
    gatInProgressRecipes();
  }, []);

  return (
    <div className="ingredients-container">
      <h2>Ingredientes</h2>
      <div className="ingredients-content">
        <ul>
          {ingredients.map((e, i) => (
            <li
              key={ i }
              data-testid={ `${i}-ingredient-step` }
            >
              <LabelIngredient
                e={ e }
                inProgressRecipes={ inProgressRecipes }
                type={ type }
                setInProgressRecipes={ setInProgressRecipes }
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

IngredientsInProgress.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
};
