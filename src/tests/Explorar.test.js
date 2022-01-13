import { screen } from '@testing-library/react';
import React from 'react';
import Explorar from '../pages/Explorar';
import renderWithRouter from './renderWithRouter';

describe('Verifica component Explorar Page', () => {
  it('Verifica component Explorar Page', () => {
    renderWithRouter(<Explorar />);

    const btnExploreFood = screen.getByTestId('explore-food');
    const btnExploreDrink = screen.getByTestId('explore-drinks');

    expect(btnExploreFood).toBeInTheDocument();
    expect(btnExploreDrink).toBeInTheDocument();

    // userEvent.click(btnExploreFood);
  });
});
