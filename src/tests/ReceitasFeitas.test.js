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
        <ReceitasFeitas renderTest />
      </AppDeReceitasProvider>,
    );
    const btnShareTestId = ('share-btn');
    const btnFilterAll = screen.getByTestId('filter-by-all-btn');
    const btnFilterFood = screen.getByTestId('filter-by-food-btn');
    const btnFilterDrink = screen.getByTestId('filter-by-drink-btn');

    expect(btnFilterAll).toBeInTheDocument();
    expect(btnFilterFood).toBeInTheDocument();
    expect(btnFilterDrink).toBeInTheDocument();

    userEvent.click(btnFilterDrink);
    const btnShareDrink = screen.getByTestId(btnShareTestId);
    expect(btnShareDrink).toBeInTheDocument();
    userEvent.click(btnShareDrink);

    userEvent.click(btnFilterFood);
    const btnShareFood = screen.getByTestId(btnShareTestId);
    expect(btnShareFood).toBeInTheDocument();
    userEvent.click(btnShareFood);

    userEvent.click(btnFilterAll);
    const btnShareAll = screen.getAllByTestId(btnShareTestId);
    expect(btnShareAll[0]).toBeInTheDocument();
    expect(btnShareAll[1]).toBeInTheDocument();
  });
});
