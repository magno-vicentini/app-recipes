import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';

export default function LabelIngredient({
  e,
  inProgressRecipes,
  type,
  setInProgressRecipes,
}) {
  const [isChecked, setChecked] = useState(false);

  const { params: { id } } = useRouteMatch();

  const testCheked = () => {
    if (inProgressRecipes
      && inProgressRecipes[type][id].find((ingredient) => ingredient === e)) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  const gatInProgressRecipes = async () => {
    const getInProgress = await JSON.parse(localStorage.getItem('inProgressRecipes'));
    setInProgressRecipes(getInProgress);
  };

  useEffect(() => {
    testCheked();
    gatInProgressRecipes();
  }, []);

  const handleClick = ({ target: { value } }) => {
    if (inProgressRecipes
      && !inProgressRecipes[type][id].find((ingredient) => ingredient === e)) {
      inProgressRecipes[type][id] = [...inProgressRecipes[type][id], value];
    } else {
      const index = inProgressRecipes[type][id].indexOf(value);
      inProgressRecipes[type][id].splice(index, 1);
    }
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    setChecked(!isChecked);
  };

  return (
    <label htmlFor={ e }>
      <input
        type="checkbox"
        id={ e }
        name={ e }
        value={ e }
        checked={ isChecked }
        onChange={ handleClick }
      />
      <h4 className="ingredient-name">{e}</h4>
    </label>
  );
}

LabelIngredient.propTypes = {
  e: PropTypes.string,
  inProgressRecipes: PropTypes.shape([{}]),
  type: PropTypes.string,
  setInProgressRecipes: PropTypes.func.isRequired,
};

LabelIngredient.defaultProps = {
  e: '',
  inProgressRecipes: [{}],
  type: '',
};
