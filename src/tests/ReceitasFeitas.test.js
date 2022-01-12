import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import AppDeReceitasProvider from '../Context/AppDeReceitasProvider';
import ReceitasFeitas from '../pages/ReceitasFeitas';
import renderWithRouter from './renderWithRouter';
import { doneRecipes } from '../mocks/comidas';

describe('Testes ReceitasFeitas Page', () => {
  beforeEach(() => {
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
  });
  it('ReceitasFeitas Page', () => {
    renderWithRouter(
      <AppDeReceitasProvider>
        <ReceitasFeitas />
      </AppDeReceitasProvider>,
    );

    const btnFilterAll = screen.getByTestId('filter-by-all-btn');
    const btnFilterFood = screen.getByTestId('filter-by-food-btn');
    const btnFilterDrink = screen.getByTestId('filter-by-drink-btn');
    const btnShare = screen.getAllByTestId('share-btn');

    expect(btnFilterAll).toBeInTheDocument();
    expect(btnFilterFood).toBeInTheDocument();
    expect(btnFilterDrink).toBeInTheDocument();
    expect(btnShare[0]).toBeInTheDocument();

    userEvent.click(btnFilterAll);
    userEvent.click(btnFilterDrink);
    userEvent.click(btnFilterFood);
    userEvent.click(btnShare[0]);
  });
});
