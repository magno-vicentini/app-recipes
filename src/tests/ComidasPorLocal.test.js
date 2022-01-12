import { screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import AppDeReceitasProvider from '../Context/AppDeReceitasProvider';
import ComidasPorLocal from '../pages/ComidasPorLocal';
import renderWithRouter from './renderWithRouter';
import { fetchAreas, fetchMealApi } from '../services/fetchAPI';
import { mockMeals } from '../mocks/comidas';

jest.mock('../services/fetchAPI/');

describe('ComidasPorLocal Page', () => {
  fetchAreas.mockResolvedValue(mockMeals);
  fetchMealApi.mockResolvedValue(mockMeals);
  it('Verifica component ComidasPorLocal', async () => {
    await act(async () => {
      renderWithRouter(
        <AppDeReceitasProvider>
          <ComidasPorLocal />
        </AppDeReceitasProvider>,
      );
    });

    const SelectArea = screen.getByTestId('explore-by-area-dropdown');
    const areaOption = screen.getByTestId('area1-option');
    expect(SelectArea).toBeInTheDocument();
    expect(areaOption).toBeInTheDocument();

    fireEvent.change(SelectArea, {target: { value: 'area1-option' }} );
    fireEvent.change(SelectArea, {target: { value: 'All' }} );
  });
});
