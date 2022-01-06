import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import Comidas from '../pages/Comidas';
import AppDeReceitasProvider from '../Context/AppDeReceitasProvider';
import mockComida from '../mocks/comidas';

describe('', () => {
  it('Verifica component Comidas', async () => {
    renderWithRouter(
      <AppDeReceitasProvider renderTest={ 'comidas' }>
        <Comidas />
      </AppDeReceitasProvider>,
    );

    const title = screen.getByText('Comidas');
    expect(title.innerHTML).toBe('Comidas');

    const cardRecipe = screen.getByTestId('1-recipe-card');
    const cardName = screen.getByTestId('1-card-name');
    const cardImg = screen.getByTestId('1-card-img');

    expect(cardRecipe).toBeInTheDocument();
    expect(cardName).toBeInTheDocument();
    expect(cardImg).toBeInTheDocument();

    expect(cardName.innerHTML).toContain(mockComida[1].strMeal);
    expect(cardImg.src).toContain(mockComida[1].strMealThumb);
  });
});
