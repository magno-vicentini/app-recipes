import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import React from 'react';
import ExplorarComidas from '../pages/ExplorarComidas';
import renderWithRouter from './renderWithRouter';
import { mockMeals } from '../mocks/comidas';

describe('Verifica component ExplorarComidas Page', () => {
  it('Verifica component ExplorarComidas Page',async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockMeals),
    });
    await act(async () => {
      renderWithRouter(<ExplorarComidas />);
    })

    const btnExploreIngredient = screen.getByTestId('explore-by-ingredient');
    const btnExploreSurprise = screen.getByTestId('explore-surprise');

    expect(btnExploreIngredient).toBeInTheDocument();
    expect(btnExploreSurprise).toBeInTheDocument();

    userEvent.click(btnExploreSurprise);
  });
});
