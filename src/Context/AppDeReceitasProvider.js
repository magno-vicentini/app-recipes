import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppDeReceitasContext from './AppDeReceitasContext';

const AppDeReceitasProveider = ({ children }) => {
  const [filter, setFilter] = useState('');
  const handleRadioChange = ({ target }) => {
    setFilter(target.value);
  };
  const context = {
    handleRadioChange,
    filter,
  };
  return (
    <AppDeReceitasContext.Provider value={ context }>
      { children }
    </AppDeReceitasContext.Provider>
  );
};

AppDeReceitasProveider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppDeReceitasProveider;
