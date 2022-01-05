import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

const dataTestinputEmail = 'email-input';
const dataTestinputPassword = 'password-input';
const dataTestBtnLogin = 'login-submit-btn';

const dataTestBtnProfile = 'profile-top-btn';
const dataTestPageTitle = 'page-title';
const dataTestBtnSearch = 'search-top-btn';

const dataSearchInput = 'search-input';
const dataTestRdIngredient = 'ingredient-search-radio';
const dataTestRdName = 'name-search-radio';
const dataTestRdFirstLetter = 'first-letter-search-radio';
const dataTestBtnRdSearch = 'exec-search-btn';

const email = 'test@test.com';
const password = '1234567';

describe('Testes Header Component', () => {
  it('Teste não pode haver header na tela de login', () => {
    renderWithRouter(<App />);

    const comidaText = screen.queryByText(/comida/i);
    expect(comidaText).not.toBeInTheDocument();
  });

  it('Verifica Header na pagina após login', () => {
    renderWithRouter(<App />);

    const inputEmail = screen.getByTestId(dataTestinputEmail);
    const inputPassword = screen.getByTestId(dataTestinputPassword);
    const btnLogin = screen.getByTestId(dataTestBtnLogin);

    userEvent.type(inputEmail, email);
    userEvent.type(inputPassword, password);
    userEvent.click(btnLogin);

    const btnProfile = screen.getByTestId(dataTestBtnProfile);
    const pageTitle = screen.getByTestId(dataTestPageTitle);
    const btnSearch = screen.getByTestId(dataTestBtnSearch);

    expect(btnProfile).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
    expect(btnSearch).toBeInTheDocument();

    expect(btnProfile.innerHTML).toContain(profileIcon);
    expect(btnSearch.innerHTML).toContain(searchIcon);
  });

  it('Verifica botão e input de busca', () => {
    renderWithRouter(<App />);

    const btnSearch = screen.getByTestId(dataTestBtnSearch);
    expect(btnSearch).toBeInTheDocument();

    userEvent.click(btnSearch);

    const inputSearch = screen.queryByTestId(dataSearchInput);
    const rdIngredient = screen.queryByTestId(dataTestRdIngredient);
    const rdName = screen.queryByTestId(dataTestRdName);
    const rdFirstLetter = screen.queryByTestId(dataTestRdFirstLetter);
    const btnRdSearch = screen.queryByTestId(dataTestBtnRdSearch);

    expect(inputSearch).toBeInTheDocument();
    expect(rdIngredient).toBeInTheDocument();
    expect(rdName).toBeInTheDocument();
    expect(rdFirstLetter).toBeInTheDocument();
    expect(btnRdSearch).toBeInTheDocument();

    userEvent.click(btnSearch);

    expect(inputSearch).not.toBeInTheDocument();
    expect(rdIngredient).not.toBeInTheDocument();
    expect(rdName).not.toBeInTheDocument();
    expect(rdFirstLetter).not.toBeInTheDocument();
    expect(btnRdSearch).not.toBeInTheDocument();
  });

  it.skip('Verifica direcionamento para o Perfil Page', () => {
    renderWithRouter(<App />);

    const btnProfile = screen.getByTestId(dataTestBtnProfile);

    userEvent.click(btnProfile);
    // Continuar
  });
});
