import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import ResultCard from '../components/ResultCard';

const name = 'Apple Frangipan Tart';
const image = 'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg';

describe('', () => {
  it('Verifica component Comidas', async () => {
    renderWithRouter(<ResultCard index="1" name={ name } image={ image } />);

    const cardRecipe = screen.getByTestId('1-recipe-card');
    const cardName = screen.getByTestId('1-card-name');
    const cardImg = screen.getByTestId('1-card-img');
    
    expect(cardRecipe).toBeInTheDocument();
    expect(cardName.innerHTML).toBe(name);
    expect(cardImg.src).toContain(image);
  });
});
