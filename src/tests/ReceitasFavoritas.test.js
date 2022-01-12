import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import React from 'react';
import AppDeReceitasProvider from '../Context/AppDeReceitasProvider';
import ReceitasFavoritas from '../pages/ReceitasFavoritas';
import renderWithRouter from './renderWithRouter';
import { favoriteRecipes } from '../mocks/comidas';

describe('Testes ReceitasFavoritas Page', () => {
  beforeEach(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  });
  it('ReceitasFavoritas Page', async () => {
    await act(async () => {
      renderWithRouter(
        <AppDeReceitasProvider>
          <ReceitasFavoritas />
        </AppDeReceitasProvider>,
      );
    });
    const btnFilterFood = screen.getByTestId('filter-by-food-btn');
    const btnFilterDrinks = screen.getByTestId('filter-by-drink-btn');

    expect(btnFilterFood).toBeInTheDocument();
    expect(btnFilterDrinks).toBeInTheDocument();

    userEvent.click(btnFilterFood);

    const foodFiltered = await screen.findByTestId('0-horizontal-image');

    expect(foodFiltered).toBeInTheDocument();
    expect(foodFiltered.src).toBe(favoriteRecipes[0].image);

    /* userEvent.click(btnFilterDrinks);

    const drinkFiltered = await screen.findByTestId('0-horizontal-image');

    expect(drinkFiltered).toBeInTheDocument();
    expect(drinkFiltered.src).toBe(favoriteRecipes[1].image);  */
  });
});
