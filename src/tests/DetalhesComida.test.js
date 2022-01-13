import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import AppDeReceitasProvider from '../Context/AppDeReceitasProvider';
import DetalhesComida from '../pages/DetalhesComida';
import renderWithRouter from './renderWithRouter';
import { mockDrinks } from '../mocks/bebidas';
import mockComida, { mockMeals } from '../mocks/comidas';
import { fetchRecipe, fetchDrinkApi } from '../services/fetchAPI';

jest.mock('../services/fetchAPI/');

describe('Verifica DetalhesComida Page', () => {
  fetchDrinkApi.mockResolvedValue(mockDrinks);
  fetchRecipe.mockResolvedValue(mockMeals);
  it('Verifica component DetalhesComida', async () => {
    await act(async () => {
      renderWithRouter(
        <AppDeReceitasProvider>
          <DetalhesComida />
        </AppDeReceitasProvider>,
      );
    });

    const btnStartRecipe = screen.getByTestId('start-recipe-btn');
    expect(btnStartRecipe).toBeInTheDocument();

    userEvent.click(btnStartRecipe);
  });

  it.skip('', () => {
    const mockedFetch = (url) => {
      switch (url) {
      case 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52768':
        return Promise.resolve({ json: jest.fn().mockResolvedValue(mockMeals) });
      default: return url;
      }
    };
    jest.spyOn(global, 'fetch').mockImplementation(mockedFetch);
    console.log(fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52768'));
  });

  it('Verifica component HeaderRecipe', async () => {
    renderWithRouter(
      <AppDeReceitasProvider>
        <DetalhesComida />
      </AppDeReceitasProvider>,
    );

    const recipeTitle = await screen.findByText(/Apple/i);
    const recipePhoto = screen.getByTestId('recipe-photo');
    const recipeCategory = screen.getByTestId('recipe-category');
    expect(recipeTitle).toBeInTheDocument();
    expect(recipeTitle.innerHTML).toBe(mockComida[0].strMeal);
    expect(recipePhoto.src).toBe(mockComida[0].strMealThumb);
    expect(recipeCategory).toBeInTheDocument();
    expect(recipeCategory.innerHTML).toBe(mockComida[0].strCategory);
  });
});
