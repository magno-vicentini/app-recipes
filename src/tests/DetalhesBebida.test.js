import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import AppDeReceitasProvider from '../Context/AppDeReceitasProvider';
import DetalhesBebida from '../pages/DetalhesBebida';
import renderWithRouter from './renderWithRouter';
import mockDrink, { mockDrinks } from '../mocks/bebidas';
import { mockMeals } from '../mocks/comidas';
import { fetchRecipe, fetchMealApi } from '../services/fetchAPI';

jest.mock('../services/fetchAPI/');

describe('Verifica component Button em HeaderRecipe', () => {
  fetchMealApi.mockResolvedValue(mockMeals);
  fetchRecipe.mockResolvedValue(mockDrinks);
  it('Verifica component Button em HeaderRecipe', async () => {
    await act(async () => {
      renderWithRouter(
        <AppDeReceitasProvider>
          <DetalhesBebida />
        </AppDeReceitasProvider>,
      );
    });

    const btnStartRecipe = screen.getByTestId('start-recipe-btn');

    expect(btnStartRecipe).toBeInTheDocument();

    userEvent.click(btnStartRecipe);
  });

  it('Verifica component HeaderRecipe', async () => {
    renderWithRouter(
      <AppDeReceitasProvider>
        <DetalhesBebida />
      </AppDeReceitasProvider>,
    );

    const recipeTitle = await screen.findByText(/a1/i);
    const recipePhoto = screen.getByTestId('recipe-photo');
    const recipeCategory = screen.getByTestId('recipe-category');
    expect(recipeTitle).toBeInTheDocument();
    expect(recipeTitle.innerHTML).toBe(mockDrink[0].strDrink);
    expect(recipePhoto.src).toBe(mockDrink[0].strDrinkThumb);
    expect(recipeCategory).toBeInTheDocument();
    expect(recipeCategory.innerHTML)
      .toBe(`${mockDrink[0].strCategory} - ${mockDrink[0].strAlcoholic}`);
  });
});
