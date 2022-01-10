import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import ExplorarBebidas from '../pages/ExplorarBebidas';
import renderWithRouter from './renderWithRouter';

describe('Verifica component ExplorarBebidas Page', () => {
  it('Verifica component ExplorarBebidas Page', () => {
    renderWithRouter(<ExplorarBebidas />);

    const btnExploreIngredient = screen.getByTestId('explore-by-ingredient');
    const btnExploreSurprise = screen.getByTestId('explore-surprise');

    expect(btnExploreIngredient).toBeInTheDocument();
    expect(btnExploreSurprise).toBeInTheDocument();

    // userEvent.click(btnExploreFood);
  });
});
