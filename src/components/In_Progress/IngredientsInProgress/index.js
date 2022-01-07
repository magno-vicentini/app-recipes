import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';

export default function IngredientsInProgress({ ingredients }) {
  const [inProgressRecipes, setInProgressRecipes] = useState([]);

  const gatInProgressRecipes = async () => {
    const getInProgress = await JSON.parse(localStorage.getItem('inProgressRecipes'));
    setInProgressRecipes(getInProgress);
  };

  const { params } = useRouteMatch();

  useEffect(() => {
    gatInProgressRecipes();
  }, []);

  const testChecked = (e) => {
    if (inProgressRecipes[params.id]) {
      const test = inProgressRecipes[params.id].find((ingredient) => ingredient === e);
      return (test);
    }
    return (false);
  };

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
              <label htmlFor={ e }>
                <input
                  type="checkbox"
                  id={ e }
                  name={ e }
                  checked={ testChecked(e) }
                />
                <h4 className="ingredient-name">{e}</h4>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

IngredientsInProgress.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};
