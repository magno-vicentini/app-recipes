import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import AppDeReceitasProvider from '../Context/AppDeReceitasProvider';
import BebidasPorIngredientes from '../pages/BebidasPorIngredientes';
import renderWithRouter from './renderWithRouter';
import { fetchDrinkApi, fetchIngredients } from '../services/fetchAPI';
import { mockDrinks } from '../mocks/bebidas';

jest.mock('../services/fetchAPI/');

describe('BebidasPorIngredientes Page', () => {
  fetchDrinkApi.mockResolvedValue(mockDrinks);
  fetchIngredients.mockResolvedValue(mockDrinks);
  it('Verifica component BebidasPorIngredientes', async () => {
    await act(async () => {
      renderWithRouter(
        <AppDeReceitasProvider>
          <BebidasPorIngredientes />
        </AppDeReceitasProvider>,
      );
    });

    const btnIngrandient = await screen.findByTestId('0-ingredient-card');
    expect(btnIngrandient).toBeInTheDocument();
    userEvent.click(btnIngrandient);
  });
});
