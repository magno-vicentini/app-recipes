import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import AppDeReceitasProvider from '../Context/AppDeReceitasProvider';
import DetalhesComida from '../pages/DetalhesComida';
import renderWithRouter from './renderWithRouter';
import mockComida, { ingradados } from '../mocks/comidas';
import fetchRecipe from '../services/fetchAPI';

describe('Verifica DetalhesComida Page', () => {
  jest.spyOn(fetchRecipe, 'fetchDrinkApi');
  it('Verifica component DetalhesComida', async () => {
    await act(async () => {
      renderWithRouter(
        <AppDeReceitasProvider >
          <DetalhesComida renderTest= { true } />
        </AppDeReceitasProvider>
      );
    })

    const btnStartRecipe = screen.getByTestId('start-recipe-btn');
    expect(btnStartRecipe).toBeInTheDocument();

    userEvent.click(btnStartRecipe);    
    
  });

  it('Verifica component HeaderRecipe', async () => {
    jest.spyOn(fetchRecipe, 'fetchDrinkApi');
    
    await act(async () => {
      renderWithRouter(
        <AppDeReceitasProvider >
          <DetalhesComida renderTest= { true } />
        </AppDeReceitasProvider>
      );
    })

    const recipePhoto = screen.getByTestId('recipe-photo');
    const recipeTitle = screen.getByTestId('recipe-title'); 
    const recipeCategory = screen.getByTestId('recipe-category');

    expect(recipePhoto).toBeInTheDocument();
    expect(recipePhoto.src).toBe(mockComida[0].strMealThumb);
    expect(recipeTitle).toBeInTheDocument();
    expect(recipeTitle.innerHTML).toBe(mockComida[0].strMeal);
    expect(recipeCategory).toBeInTheDocument();
    expect(recipeCategory.innerHTML).toBe(mockComida[0].strCategory);
    
  });

  it('Verifica component Ingredient', async () => {
    await act(async () => {
      renderWithRouter(
        <AppDeReceitasProvider >
          <DetalhesComida renderTest= { true } />
        </AppDeReceitasProvider>
      );
    })

    const ingredientsName0 = screen.getByTestId('0-ingredient-name-and-measure');
    const ingredientsName1 = screen.getByTestId('1-ingredient-name-and-measure');
    const ingredientsName2 = screen.getByTestId('2-ingredient-name-and-measure');

    expect(ingredientsName0.innerHTML).toBe(ingradados[0]);
    expect(ingredientsName1.innerHTML).toBe(ingradados[1]);
    expect(ingredientsName2.innerHTML).toBe(ingradados[2]);
    
  });
});
