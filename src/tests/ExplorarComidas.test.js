import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import ExplorarComidas from '../pages/ExplorarComidas';
import renderWithRouter from './renderWithRouter';

describe('Verifica component ExplorarComidas Page', () => {
  it('Verifica component ExplorarComidas Page', () => {
    renderWithRouter(<ExplorarComidas />);

    const btnExploreIngredient = screen.getByTestId('explore-by-ingredient');
    const btnExploreSurprise = screen.getByTestId('explore-surprise');

    expect(btnExploreIngredient).toBeInTheDocument();
    expect(btnExploreSurprise).toBeInTheDocument();

    // userEvent.click(btnExploreFood);
  });
});
