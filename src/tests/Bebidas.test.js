import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import AppDeReceitasProvider from '../Context/AppDeReceitasProvider';
import mockBebidas, { categoryDrink, mockDrinks } from '../mocks/bebidas';
import Bebidas from '../pages/Bebidas';
import renderWithRouter from './renderWithRouter';

describe('', () => {
  it('Test Button Category', async () => {
    await act(async () => {
      renderWithRouter(
        <AppDeReceitasProvider>
          <Bebidas renderTest />
        </AppDeReceitasProvider>,
      );
    });

    const btnCategory1 = await screen
    .findByTestId(`${categoryDrink[0].strCategory}-category-filter`);
    const btnCategory2 = await screen
    .findByTestId(`${categoryDrink[1].strCategory}-category-filter`);
    const btnCategory3 = await screen
    .findByTestId(`${categoryDrink[2].strCategory}-category-filter`);
    const btnCategory4 = await screen
    .findByTestId(`${categoryDrink[3].strCategory}-category-filter`);
    const btnCategory5 = await screen
    .findByTestId(`${categoryDrink[3].strCategory}-category-filter`);

    const btnAll = screen.getByTestId('All-category-filter');

    expect(btnCategory1).toBeInTheDocument();
    expect(btnCategory2).toBeInTheDocument();
    expect(btnCategory3).toBeInTheDocument();
    expect(btnCategory4).toBeInTheDocument();
    expect(btnCategory5).toBeInTheDocument();
    expect(btnAll).toBeInTheDocument();

    expect(btnCategory1).toBeInTheDocument();

    userEvent.click(btnCategory1);
    userEvent.click(btnCategory2);
    userEvent.click(btnCategory3);
    userEvent.click(btnCategory4);
    userEvent.click(btnCategory5);
    userEvent.click(btnAll);
  });

  it('Verifica component Bebidas', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockDrinks),
    });

    renderWithRouter(
      <AppDeReceitasProvider renderTest="bebidas">
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
