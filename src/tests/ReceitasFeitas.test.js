import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import AppDeReceitasProvider from '../Context/AppDeReceitasProvider';
import ReceitasFeitas from '../pages/ReceitasFeitas';
import renderWithRouter from './renderWithRouter';

describe('Testes ReceitasFeitas Page', () => {
  it('ReceitasFeitas Page', () => {
    renderWithRouter(
      <AppDeReceitasProvider >
        <ReceitasFeitas />
      </AppDeReceitasProvider>
    );

    const btnFilterAll = screen.getByTestId('filter-by-all-btn');
    const btnFilterFood = screen.getByTestId('filter-by-food-btn');
    const btnFilterDrink = screen.getByTestId('filter-by-drink-btn');

    expect(btnFilterAll).toBeInTheDocument();
    expect(btnFilterFood).toBeInTheDocument();
    expect(btnFilterDrink).toBeInTheDocument();

    userEvent.click(btnFilterAll);
  });
});
