import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import SearchBar from '../components/SearchBar';
import AppDeReceitasProvider from '../Context/AppDeReceitasProvider';
import mockComida from '../mocks/comidas';

const dataSearchInput = 'search-input';
const dataTestRdIngredient = 'ingredient-search-radio';
const dataTestRdName = 'name-search-radio';
const dataTestRdFirstLetter = 'first-letter-search-radio';
const dataTestBtnRdSearch = 'exec-search-btn';

describe('Verifica SearchBar', () => {
  it('Verifica componets searchBar',() => {
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

  it.skip('Verifica Fetch Ingredients', async () => {
    renderWithRouter(
      <AppDeReceitasProvider>
        <SearchBar />
      </AppDeReceitasProvider>,
    );

    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockComida),
    });

    const inputSearch = screen.getByTestId(dataSearchInput);
    const rdIngredient = screen.getByTestId(dataTestRdIngredient);
    const btnRdSearch = screen.getByTestId(dataTestBtnRdSearch);

    userEvent.type(inputSearch, 'bacon');
    userEvent.click(rdIngredient);
    userEvent.click(btnRdSearch);

    
  });
});
