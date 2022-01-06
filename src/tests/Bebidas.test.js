import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import Bebidas from '../pages/Bebidas';
import AppDeReceitasProvider from '../Context/AppDeReceitasProvider';
import mockBebidas from '../mocks/bebidas';

describe('', () => {
  it('Verifica component Bebidas', async () => {
    renderWithRouter(
      <AppDeReceitasProvider renderTest={ 'bebidas' }>
        <Bebidas />
      </AppDeReceitasProvider>,
    );

    const title = screen.getByText('Bebidas');
    expect(title.innerHTML).toBe('Bebidas');

    const cardRecipe = screen.getByTestId('0-recipe-card');
    const cardName = screen.getByTestId('0-card-name');
    const cardImg = screen.getByTestId('0-card-img');

    expect(cardRecipe).toBeInTheDocument();
    expect(cardName).toBeInTheDocument();
    expect(cardImg).toBeInTheDocument();

    expect(cardName.innerHTML).toContain(mockBebidas[0].strDrink);
    expect(cardImg.src).toContain(mockBebidas[0].strDrinkThumb);
  });
});
