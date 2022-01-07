import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Bebidas from '../pages/Bebidas';
import AppDeReceitasProvider from '../Context/AppDeReceitasProvider';
import mockBebidas, { categoryDrink } from '../mocks/bebidas';
import { act } from 'react-dom/test-utils';

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

  it('Test Button Category', async () => {
    await act(async () => {
      renderWithRouter(
        <AppDeReceitasProvider>
          <Bebidas renderTest={ true } />
        </AppDeReceitasProvider>,
      );
    });

    const btnCategory1 = await screen.findByTestId(`${categoryDrink[0].strCategory}-category-filter`);
    const btnCategory2 = await screen.findByTestId(`${categoryDrink[1].strCategory}-category-filter`);
    const btnCategory3 = await screen.findByTestId(`${categoryDrink[2].strCategory}-category-filter`);
    const btnCategory4 = await screen.findByTestId(`${categoryDrink[3].strCategory}-category-filter`);
    const btnCategory5 = await screen.findByTestId(`${categoryDrink[3].strCategory}-category-filter`);

    expect(btnCategory1).toBeInTheDocument();
    expect(btnCategory2).toBeInTheDocument();
    expect(btnCategory3).toBeInTheDocument();
    expect(btnCategory4).toBeInTheDocument();
    expect(btnCategory5).toBeInTheDocument();
  })
});
