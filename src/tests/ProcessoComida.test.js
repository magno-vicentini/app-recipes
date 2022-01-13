import { screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { Route, Switch } from 'react-router-dom';
import AppDeReceitasProvider from '../Context/AppDeReceitasProvider';
import ProcessoComida from '../pages/ProcessoComida';
import renderWithRouter from './renderWithRouter';
import { fetchRecipe } from '../services/fetchAPI';
import mockComida, { mockMeals, inProgressRecipes } from '../mocks/comidas';

jest.mock('../services/fetchAPI/');
describe('Testes ProcessoComida Page', () => {
  beforeEach(() => {
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  });
  fetchRecipe.mockResolvedValue(mockMeals);
  it('Verifica componets ProcessoComida page', async () => {
    await act(async () => {
      const { history } = renderWithRouter(
        <AppDeReceitasProvider>
          <Switch>
            <Route exact path="/comidas/:id/in-progress" component={ ProcessoComida } />
          </Switch>
        </AppDeReceitasProvider>,
      );
      history.push('comidas/52977/in-progress');
    });

    const recipeTitle = await screen.findByText(/Apple/i);
    const recipePhoto = screen.getByTestId('recipe-photo');
    const recipeCategory = screen.getByTestId('recipe-category');
    expect(recipeTitle).toBeInTheDocument();
    expect(recipeTitle).toBeInTheDocument();
    expect(recipeTitle.innerHTML).toBe(mockComida[0].strMeal);
    expect(recipePhoto.src).toBe(mockComida[0].strMealThumb);
    expect(recipeCategory).toBeInTheDocument();
    expect(recipeCategory.innerHTML).toBe(mockComida[0].strCategory);
  });
});
