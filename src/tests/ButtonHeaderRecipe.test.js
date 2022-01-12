import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Button from '../components/Recipe_Details/HeaderRecipe/Buttons';
import AppDeReceitasProvider from '../Context/AppDeReceitasProvider';
import renderWithRouter from './renderWithRouter';

let isFavorite = false;
const btnFavoriteTest = 'favorite-btn';

const setFavorite = (payload) => {
  isFavorite = payload;
  return isFavorite;
};

describe.skip('Verifica component Button em HeaderRecipe', () => {
  it('Verifica component Button em HeaderRecipe', () => {
    renderWithRouter(
      <AppDeReceitasProvider>
        <Button
          typeRecipe={ ['Meal', 'comida'] }
          isFavorite={ isFavorite }
          setFavorite={ setFavorite }
        />
      </AppDeReceitasProvider>,
    );

    const btnShare = screen.getByTestId('share-btn');
    const btnFavorite = screen.getByTestId(btnFavoriteTest);

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
          renderTest
        />
      </AppDeReceitasProvider>,
    );

    const btnShare = screen.getByTestId('share-btn');
    const btnFavorite = screen.getByTestId(btnFavoriteTest);

    expect(isFavorite).toBe(false);
    userEvent.click(btnFavorite);
    expect(isFavorite).toBe(true);

    userEvent.click(btnShare);
  });

  it('Verifica buttons LocalStorage True', () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(['pao']));
    setFavorite(false);
    renderWithRouter(
      <AppDeReceitasProvider>
        <Button
          typeRecipe={ ['Meal', 'comida'] }
          isFavorite={ isFavorite }
          setFavorite={ setFavorite }
          renderTest
        />
      </AppDeReceitasProvider>,
    );

    const btnFavorite = screen.getByTestId(btnFavoriteTest);

    expect(isFavorite).toBe(false);
    userEvent.click(btnFavorite);
    expect(isFavorite).toBe(true);
  });

  it('Verifica buttons LocalStorage false', () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(['pao']));
    setFavorite(true);
    renderWithRouter(
      <AppDeReceitasProvider>
        <Button
          typeRecipe={ ['Meal', 'comida'] }
          isFavorite={ isFavorite }
          setFavorite={ setFavorite }
          renderTest
        />
      </AppDeReceitasProvider>,
    );

    const btnFavorite = screen.getByTestId(btnFavoriteTest);

    expect(isFavorite).toBe(true);
    userEvent.click(btnFavorite);
    expect(isFavorite).toBe(false);
  });
});
