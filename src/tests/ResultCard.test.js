import { screen } from '@testing-library/react';
import React from 'react';
import ResultCard from '../components/ResultCard';
import renderWithRouter from './renderWithRouter';

const name = 'Apple Frangipan Tart';
const image = 'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg';

describe('', () => {
  it('Verifica component ResultCard', async () => {
    renderWithRouter(
      <ResultCard
        index="1"
        name={ name }
        image={ image }
        type="recipe"
      />,
    );

    const cardRecipe = screen.getByTestId('1-recipe-card');
    const cardName = screen.getByTestId('1-card-name');
    const cardImg = screen.getByTestId('1-card-img');

    expect(cardRecipe).toBeInTheDocument();
    expect(cardName.innerHTML).toBe(name);
    expect(cardImg.src).toContain(image);
  });
});
