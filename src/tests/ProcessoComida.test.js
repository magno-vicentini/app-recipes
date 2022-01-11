import { screen } from '@testing-library/react';
import AppDeReceitasProvider from '../Context/AppDeReceitasProvider';
import React from 'react';
import ProcessoComida from '../components/In_Progress/IngredientsInProgress';
import renderWithRouter from './renderWithRouter';
import mockComida, { mockMeals } from '../mocks/comidas';
import { fetchRecipe } from '../services/fetchAPI';

//jest.mock('../services/fetchAPI/');

describe('Testes ProcessoComida Page', () => {
  //fetchRecipe.mockResolvedValue(mockMeals);
  it('Verifica componets ProcessoComida page', () => {
    renderWithRouter(
      <AppDeReceitasProvider >
        <ProcessoComida />
      </AppDeReceitasProvider>
    );

    /*const recipeTitle = await screen.findByText(/Apple/i);
    const recipePhoto = screen.getByTestId('recipe-photo'); 
    const recipeCategory =  screen.getByTestId('recipe-category');
    expect(recipeTitle).toBeInTheDocument();
    expect(recipeTitle.innerHTML).toBe(mockComida[0].strMeal)
    expect(recipePhoto.src).toBe(mockComida[0].strMealThumb);
    expect(recipeCategory).toBeInTheDocument();
    expect(recipeCategory.innerHTML).toBe(mockComida[0].strCategory);*/
  })
});
