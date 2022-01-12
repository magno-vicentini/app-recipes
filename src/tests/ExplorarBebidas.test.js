import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import React from 'react';
import ExplorarBebidas from '../pages/ExplorarBebidas';
import renderWithRouter from './renderWithRouter';
import { mockDrinks } from '../mocks/bebidas';

describe('Verifica component ExplorarBebidas Page', () => {
  it('Verifica component ExplorarBebidas Page', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockDrinks),
    });
    await act(async () => {
      renderWithRouter(<ExplorarBebidas />);
    });

    const btnExploreIngredient = screen.getByTestId('explore-by-ingredient');
    const btnExploreSurprise = screen.getByTestId('explore-surprise');

    expect(btnExploreIngredient).toBeInTheDocument();
    expect(btnExploreSurprise).toBeInTheDocument();

    userEvent.click(btnExploreSurprise);
  });
});
