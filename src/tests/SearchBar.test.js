import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import SearchBar from '../components/SearchBar';
import AppDeReceitasProvider from '../Context/AppDeReceitasProvider';

const dataSearchInput = 'search-input';
const dataTestRdIngredient = 'ingredient-search-radio';
const dataTestRdName = 'name-search-radio';
const dataTestRdFirstLetter = 'first-letter-search-radio';
const dataTestBtnRdSearch = 'exec-search-btn';

describe('', () => {
  it('Verifica componets searchBar', async () => {
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

    userEvent.type(inputSearch, 'comida')
    expect(inputSearch.value).toBe('comida');

    userEvent.click(rdIngredient)
    expect(rdIngredient.checked).toBe(true);
    expect(rdName.checked).toBe(false);
    expect(rdFirstLetter.checked).toBe(false);

    userEvent.click(rdName)
    expect(rdName.checked).toBe(true);
    expect(rdIngredient.checked).toBe(false);
    expect(rdFirstLetter.checked).toBe(false);

    userEvent.click(rdFirstLetter)
    expect(rdFirstLetter.checked).toBe(true);
    expect(rdIngredient.checked).toBe(false);
    expect(rdName.checked).toBe(false);
  });
});
