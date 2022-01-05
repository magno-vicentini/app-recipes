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

  it('Verifica botão de busca', () => {
    renderWithRouter(<App />);

    const btnSearch = screen.getByTestId(dataTestBtnSearch);
    const inputSearch = screen.queryByTestId(dataSearchInput);

    expect(btnSearch).toBeInTheDocument();
    expect(inputSearch).not.toBeInTheDocument();

    userEvent.click(btnSearch);
    // expect(inputSearch).toBeInTheDocument();
    // userEvent.click(BtnSearch);
    // expect(inputSearch).not.toBeInTheDocument();
  });

  it.skip('Verifica direcionamento para o Perfil page', () => {
    renderWithRouter(<App />);

    const btnProfile = screen.getByTestId(dataTestBtnProfile);

    userEvent.click(btnProfile);
    // Continuar
  });
});
