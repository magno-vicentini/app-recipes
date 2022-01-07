import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import AppDeReceitasProvider from '../Context/AppDeReceitasProvider';
import DetalhesComida from '../pages/DetalhesComida';
import renderWithRouter from './renderWithRouter';

describe('Verifica component Button em HeaderRecipe', () => {
  it('Verifica component Button em HeaderRecipe', async () => {
    await act(async () => {
      renderWithRouter(
        <AppDeReceitasProvider >
          <DetalhesComida />
        </AppDeReceitasProvider>
      );
    })

    const btnStartRecipe = screen.getByTestId('start-recipe-btn');

    expect(btnStartRecipe).toBeInTheDocument();

    userEvent.click(btnStartRecipe);
  });
});
