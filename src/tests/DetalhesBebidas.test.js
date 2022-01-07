import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import DetalhesBebida from '../pages/DetalhesBebida';
import AppDeReceitasProvider from '../Context/AppDeReceitasProvider';

describe('Verifica component Button em HeaderRecipe', () => {
  it('Verifica component Button em HeaderRecipe', async () => {
    await act(async () => {
      renderWithRouter(
        <AppDeReceitasProvider >
          <DetalhesBebida />
        </AppDeReceitasProvider>
      );
    })

    const btnStartRecipe = screen.getByTestId('start-recipe-btn');

    expect(btnStartRecipe).toBeInTheDocument();

    userEvent.click(btnStartRecipe);
  });
});
