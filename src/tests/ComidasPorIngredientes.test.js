import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import AppDeReceitasProvider from '../Context/AppDeReceitasProvider';
import ComidasPorIngredientes from '../pages/ComidasPorIngredientes';
import renderWithRouter from './renderWithRouter';
import { fetchMealApi, fetchIngredients } from '../services/fetchAPI';
import { mockMeals } from '../mocks/comidas';

jest.mock('../services/fetchAPI/');

describe('ComidasPorIngredientes Page', () => {
  fetchMealApi.mockResolvedValue(mockMeals);
  fetchIngredients.mockResolvedValue(mockMeals);
  it('Verifica component ComidasPorIngredientes', async () => {
    await act(async () => {
      renderWithRouter(
        <AppDeReceitasProvider >
          <ComidasPorIngredientes />
        </AppDeReceitasProvider>,
      );
    })
    const btnIngrandient = await screen.findByTestId('0-ingredient-card');
    expect(btnIngrandient).toBeInTheDocument();
    userEvent.click(btnIngrandient);
  })
});
