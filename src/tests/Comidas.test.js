import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import Comidas from '../pages/Comidas';
import AppDeReceitasProvider from '../Context/AppDeReceitasProvider';

const mockRender = [
  {
    idMeal: '52768',
    strMeal: 'Apple Frangipan Tart',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg'
  },
]

describe('', () => {
  it('Verifica component Comidas', async () => {
    renderWithRouter(
      <AppDeReceitasProvider>
        <Comidas />
      </AppDeReceitasProvider>,
    );

    const title = screen.getByText('Comidas');
    expect(title.innerHTML).toBe('Comidas');
  });
});
