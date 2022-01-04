import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import Header from '../componentes/Header';

import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

const inputEmail = screen.getByTestId('email-input');
const inputPassword = screen.getByAltText('password-input');
const btnLogin = screen.getByAltText('login-submit-btn');
const inputSearch = screen.getByTestId('search-input');

const email = 'test@test.com';
const password = '123456';

const dataTestProfile = screen.getByTestId('profile-top-btn');
const dataTestPageTitle = screen.getByTestId('page-title');
const dataTestBtnSearch = screen.getByTestId('search-top-btn');

describe('Testes Header Component', () => {
  it('Teste não pode haver header na tela de login', () => {
    renderWithRouter(<App />);

    expect(dataTestProfile).not.TobeInTheDocument();
    expect(dataTestPageTitle).not.TobeInTheDocument();
    expect(dataTestBtnSearch).not.TobeInTheDocument();
  });

  it('Verifica Header na pagina após login', () => {
    const { history } = renderWithRouter(<App />);

    userEvent.type(inputEmail, email);
    userEvent.type(inputPassword, password);
    userEvent.click(btnLogin);

    const { pathname } = history.location;
    expect(pathname).toBe('/comidas');

    expect(dataTestProfile).TobeInTheDocument();
    expect(dataTestPageTitle).TobeInTheDocument();
    expect(dataTestBtnSearch).TobeInTheDocument();

    expect(dataTestProfile.src).toContain(profileIcon);
    expect(dataTestBtnSearch.src).toContain(searchIcon);
  });

  it('Verifica direcionamento para o Perfil page', () => {
    const { history } = renderWithRouter(<App />);

    userEvent.type(inputEmail, email);
    userEvent.type(inputPassword, password);
    userEvent.click(btnLogin);

    userEvent.click(dataTestProfile);

    const { pathname } = history.location;
    expect(pathname).toBe('/perfil');
  });

  it('Verifica botão de busca', () => {
    renderWithRouter(<App />);

    userEvent.type(inputEmail, email);
    userEvent.type(inputPassword, password);
    userEvent.click(btnLogin);

    expect(inputSearch).not.TobeInTheDocument();

    userEvent.click(dataTestBtnSearch);
    expect(inputSearch).TobeInTheDocument();
    userEvent.click(dataTestBtnSearch);
    expect(inputSearch).not.TobeInTheDocument();
  });
});
