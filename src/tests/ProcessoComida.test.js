// import { screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import AppDeReceitasProvider from '../Context/AppDeReceitasProvider';
import ProcessoComida from '../pages/ProcessoComida';
import renderWithRouter from './renderWithRouter';
import { fetchRecipe } from '../services/fetchAPI';
import { mockMeals, inProgressRecipes } from '../mocks/comidas';
import IngredientsInProgress from '../components/In_Progress/IngredientsInProgress';

const ComponentToMock = () => <div>A mock!</div>; 

/* import IngredientsInProgress from '../components/In_Progress/IngredientsInProgress';
import mockComida, { mockMeals } from '../mocks/comidas';
import { fetchRecipe } from '../services/fetchAPI'; */

//jest.mock('../services/fetchAPI/');

describe.skip('Testes ProcessoComida Page', () => {
  beforeEach(() => {
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    IngredientsInProgress = jest.fn().mockReturnValue(ComponentToMock);
  });
  //fetchRecipe.mockResolvedValue(mockMeals);
  it('Verifica componets ProcessoComida page', async () => {
    await act(async () => {
      renderWithRouter(
        <AppDeReceitasProvider>
          <ProcessoComida />
        </AppDeReceitasProvider>,
      );
    });
    /* const recipeTitle = await screen.findByText(/Apple/i);
    const recipePhoto = screen.getByTestId('recipe-photo');
    const recipeCategory = screen.getByTestId('recipe-category');
    expect(recipeTitle).toBeInTheDocument();
    expect(recipeTitle.innerHTML).toBe(mockComida[0].strMeal);
    expect(recipePhoto.src).toBe(mockComida[0].strMealThumb);
    expect(recipeCategory).toBeInTheDocument();
    expect(recipeCategory.innerHTML).toBe(mockComida[0].strCategory); */
  });
});
