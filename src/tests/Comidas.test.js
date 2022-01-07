import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import Comidas from '../pages/Comidas';
import AppDeReceitasProvider from '../Context/AppDeReceitasProvider';
import mockComida, { categoryFood } from '../mocks/comidas';
import { act } from 'react-dom/test-utils';

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

  it('Test Button Category', async () => {
    await act(async () => {
      renderWithRouter(
        <AppDeReceitasProvider>
          <Comidas renderTest={ true } />
        </AppDeReceitasProvider>,
      );
    });

    const btnCategory1 = await screen.findByTestId(`${categoryFood[0].strCategory}-category-filter`);
    const btnCategory2 = await screen.findByTestId(`${categoryFood[1].strCategory}-category-filter`);
    const btnCategory3 = await screen.findByTestId(`${categoryFood[2].strCategory}-category-filter`);
    const btnCategory4 = await screen.findByTestId(`${categoryFood[3].strCategory}-category-filter`);
    const btnCategory5 = await screen.findByTestId(`${categoryFood[3].strCategory}-category-filter`);

    expect(btnCategory1).toBeInTheDocument();
    expect(btnCategory2).toBeInTheDocument();
    expect(btnCategory3).toBeInTheDocument();
    expect(btnCategory4).toBeInTheDocument();
    expect(btnCategory5).toBeInTheDocument();

    userEvent.click(btnCategory1);
  })
});
