import { screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import Ingredients from '../components/Recipe_Details/Ingredients';
import renderWithRouter from './renderWithRouter';

const ingradados = [
  'ovo',
  'carne',
  'salada',
]


describe('Verifica component Button em HeaderRecipe', () => {
  it('Verifica component Button em HeaderRecipe', async () => {
    await act(async () => {
      renderWithRouter(<Ingredients ingredients={ ingradados } />);
    })

    const ingredientsName0 = screen.getByTestId('0-ingredient-name-and-measure');
    const ingredientsName1 = screen.getByTestId('1-ingredient-name-and-measure');
    const ingredientsName2 = screen.getByTestId('2-ingredient-name-and-measure');

    expect(ingredientsName0.innerHTML).toBe(ingradados[0]);
    expect(ingredientsName1.innerHTML).toBe(ingradados[1]);
    expect(ingredientsName2.innerHTML).toBe(ingradados[2]);
  });
});
