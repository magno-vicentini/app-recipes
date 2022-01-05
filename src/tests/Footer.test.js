import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import Footer from '../components/Footer';

import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';

const dataTestMenuFooter = 'footer';
const dataTestBtnDrinks = 'drinks-bottom-btn';
const dataTestExplorar = 'explore-bottom-btn';
const dataTestBtnFood = 'food-bottom-btn';

describe('Testes Footer Component', () => {
  it('Verifica Footer na pagina após login', () => {
    renderWithRouter(<Footer />);

    const menuFooter = screen.getByTestId(dataTestMenuFooter);
    const btnDrink = screen.getByTestId(dataTestBtnDrinks);
    const btnExplorar = screen.getByTestId(dataTestExplorar);
    const btnFood = screen.getByTestId(dataTestBtnFood);

    expect(menuFooter).toBeInTheDocument();
    expect(btnDrink).toBeInTheDocument();
    expect(btnExplorar).toBeInTheDocument();
    expect(btnFood).toBeInTheDocument();

    expect(btnDrink.innerHTML).toContain(drinkIcon);
    expect(btnExplorar.innerHTML).toContain(exploreIcon);
  });

  it('Verifica direcionamento para o Explorar Page', () => {
    const { history } = renderWithRouter(<Footer />);

    const btnExplorar = screen.getByTestId(dataTestExplorar);
    userEvent.click(btnExplorar);

    const { pathname } = history.location;
    expect(pathname).toBe('/explorar');
  });

  it('Verifica direcionamento para o Drink Page', () => {
    const { history } = renderWithRouter(<Footer />);

    const btnDrink = screen.getByTestId(dataTestBtnDrinks);
    userEvent.click(btnDrink);

    const { pathname } = history.location;
    expect(pathname).toBe('/bebidas');
  });

  it('Verifica direcionamento para o Food Page', () => {
    const { history } = renderWithRouter(<Footer />);

    const btnFood = screen.getByTestId(dataTestBtnFood);
    userEvent.click(btnFood);

    const { pathname } = history.location;
    expect(pathname).toBe('/comidas');
  });
});
