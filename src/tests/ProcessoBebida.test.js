import { screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { Route, Switch } from 'react-router-dom';
import AppDeReceitasProvider from '../Context/AppDeReceitasProvider';
import ProcessoBebida from '../pages/ProcessoBebida';
import renderWithRouter from './renderWithRouter';
import { fetchRecipe } from '../services/fetchAPI';
import mockDrink, { mockDrinks, inProgressRecipes } from '../mocks/bebidas';

jest.mock('../services/fetchAPI/');
describe('Testes ProcessoBebida Page', () => {
  beforeEach(() => {
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  });
  fetchRecipe.mockResolvedValue(mockDrinks);
  it('Verifica componets ProcessoBebida page', async () => {
    await act(async () => {
      const { history } = renderWithRouter(
        <AppDeReceitasProvider>
          <Switch>
            <Route exact path="/bebidas/:id/in-progress" component={ ProcessoBebida } />
          </Switch>
        </AppDeReceitasProvider>,
      );
      history.push('bebidas/15997/in-progress');
    });

    const recipeTitle = await screen.findByText(/a1/i);
    const recipePhoto = screen.getByTestId('recipe-photo');
    const recipeCategory = screen.getByTestId('recipe-category');
    expect(recipeTitle).toBeInTheDocument();
    expect(recipeTitle.innerHTML).toBe(mockDrink[0].strDrink);
    expect(recipePhoto.src).toBe(mockDrink[0].strDrinkThumb);
    expect(recipeCategory).toBeInTheDocument();
  });
});
