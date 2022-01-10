import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import React from 'react';
import ProcessoComida from '../components/In_Progress/IngredientsInProgress';
import renderWithRouter from './renderWithRouter';

describe.skip('Testes ProcessoComida Page', () => {
  it('Verifica componets ProcessoComida page',async () => {
    await act(async () => {
      renderWithRouter(<ProcessoComida renderTest={ true }/>);
    });

    const id = screen.getByTestId('0-ingredient-step');
    expect(id).toBeInTheDocument();
  });

});
