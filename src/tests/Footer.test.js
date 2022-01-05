import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';

const dataTestinputEmail = 'email-input';
const dataTestinputPassword = 'password-input';
const dataTestBtnLogin = 'login-submit-btn';

const dataTestMenuFooter = 'footer';
const dataTestBtnDrinks = 'drinks-bottom-btn';
const dataTestExplorar = 'explore-bottom-btn';
const dataTestBtnFood = 'food-bottom-btn';

const email = 'test@test.com';
const password = '1234567';

describe('Testes Footer Component', () => {
  it('Teste não pode haver header na tela de login', () => {
    renderWithRouter(<App />);

    const menuFooter = screen.queryByTestId(dataTestMenuFooter);
    expect(menuFooter).not.toBeInTheDocument();
  });

  it('Verifica Footer na pagina após login', () => {
    renderWithRouter(<App />);

    const inputEmail = screen.getByTestId(dataTestinputEmail);
    const inputPassword = screen.getByTestId(dataTestinputPassword);
    const btnLogin = screen.getByTestId(dataTestBtnLogin);

    userEvent.type(inputEmail, email);
    userEvent.type(inputPassword, password);
    userEvent.click(btnLogin);

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

  it.skip('Verifica direcionamento para o Explorar Page', () => {
    renderWithRouter(<App />);

    const btnExplorar = screen.getByTestId(dataTestExplorar);

    userEvent.click(btnExplorar);
    // Continuar
  });

  it.skip('Verifica direcionamento para o Drink Page', () => {
    renderWithRouter(<App />);

    const btnDrink = screen.getByTestId(dataTestBtnDrinks);

    userEvent.click(btnDrink);
    // Continuar
  });

  it.skip('Verifica direcionamento para o Food Page', () => {
    renderWithRouter(<App />);

    const btnFood = screen.getByTestId(dataTestBtnFood);

    userEvent.click(btnFood);
    // Continuar
  });
});
