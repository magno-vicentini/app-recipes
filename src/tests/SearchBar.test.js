import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import SearchBar from '../components/SearchBar';
import AppDeReceitasProvider from '../Context/AppDeReceitasProvider';
import renderWithRouter from './renderWithRouter';

const dataSearchInput = 'search-input';
const dataTestRdIngredient = 'ingredient-search-radio';
const dataTestRdName = 'name-search-radio';
const dataTestRdFirstLetter = 'first-letter-search-radio';
const dataTestBtnRdSearch = 'exec-search-btn';

describe('Verifica SearchBar', () => {
  it('Verifica componets searchBar', () => {
    renderWithRouter(
      <AppDeReceitasProvider>
        <SearchBar />
      </AppDeReceitasProvider>,
    );

    const inputSearch = screen.getByTestId(dataSearchInput);
    const rdIngredient = screen.getByTestId(dataTestRdIngredient);
    const rdName = screen.getByTestId(dataTestRdName);
    const rdFirstLetter = screen.getByTestId(dataTestRdFirstLetter);
    const btnRdSearch = screen.getByTestId(dataTestBtnRdSearch);

    expect(inputSearch).toBeInTheDocument();
    expect(rdIngredient).toBeInTheDocument();
    expect(rdName).toBeInTheDocument();
    expect(rdFirstLetter).toBeInTheDocument();
    expect(btnRdSearch).toBeInTheDocument();

    userEvent.type(inputSearch, 'comida');
    expect(inputSearch.value).toBe('comida');

    userEvent.click(rdIngredient);
    expect(rdIngredient.checked).toBe(true);
    expect(rdName.checked).toBe(false);
    expect(rdFirstLetter.checked).toBe(false);

    userEvent.click(rdName);
    expect(rdName.checked).toBe(true);
    expect(rdIngredient.checked).toBe(false);
    expect(rdFirstLetter.checked).toBe(false);

    userEvent.click(rdFirstLetter);
    expect(rdFirstLetter.checked).toBe(true);
    expect(rdIngredient.checked).toBe(false);
    expect(rdName.checked).toBe(false);
  });
});
