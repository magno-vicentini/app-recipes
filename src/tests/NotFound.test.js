import { screen, render } from '@testing-library/react';
import React from 'react';
import NotFound from '../pages/NotFound';

describe('NotFound Page', () => {
  it('Verifica component NotFound', () => {
    render(<NotFound />);

    const btnIngrandient = screen.getByText(/Not Found/i);
    expect(btnIngrandient).toBeInTheDocument();
  });
});
