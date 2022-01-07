import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import Button from '../components/Recipe_Details/HeaderRecipe/Buttons';
import AppDeReceitasProvider from '../Context/AppDeReceitasProvider';

let isFavorite = false;

const setFavorite = (payload) => {
   return isFavorite = payload;
};

describe('Verifica component Button em HeaderRecipe', () => {
  it('Verifica component Button em HeaderRecipe', () => {
    renderWithRouter(
      <AppDeReceitasProvider>
        <Button 
          typeRecipe={ ['Meal', 'comida'] }
          isFavorite={ isFavorite }
          setFavorite={ setFavorite }
        />
      </AppDeReceitasProvider>
    );

    const btnShare = screen.getByTestId('share-btn');
    const btnFavorite = screen.getByTestId('favorite-btn');

    expect(btnShare).toBeInTheDocument();
    expect(btnFavorite).toBeInTheDocument();

    expect(btnShare.innerHTML).toContain('shareIcon.svg');
    expect(btnFavorite.innerHTML).toContain('whiteHeartIcon.svg');
  });

  it('Verifica buttons', () => {
    renderWithRouter(
      <AppDeReceitasProvider>
        <Button 
          typeRecipe={ ['Meal', 'comida'] }
          isFavorite={ isFavorite }
          setFavorite={ setFavorite }
        />
      </AppDeReceitasProvider>
    );

    // const btnShare = screen.getByTestId('share-btn');
    const btnFavorite = screen.getByTestId('favorite-btn');

    expect(isFavorite).toBe(false);
    userEvent.click(btnFavorite);
    expect(isFavorite).toBe(true);
  });
});
