import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const inputEmail = screen.getByTestId('email-input');
const inputPassword = screen.getByAltText('password-input');
const btnLogin = screen.getByAltText('login-submit-btn');

const email = 'test@test.com';
const password = '123456';

describe('Testes Login Page', () => {
  beforeEach(() => {
    userEvent.type(inputEmail, '');
    userEvent.type(inputPassword, '');
  });

  it('Verifica se Inputs de Login existem', () => {
    renderWithRouter(<App />);

    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(btnLogin).toBeInTheDocument();
  });

  it('Verifica acesso dos Inputs', () => {
    renderWithRouter(<App />);

    userEvent.type(inputEmail, email);
    expect(inputEmail).toBeHaveValue(email);

    userEvent.type(inputPassword, password);
    expect(inputPassword).toBeHaveValue(password);
  });

  it('Verifica se email e password é válido', () => {
    renderWithRouter(<App />);

    userEvent.type(inputEmail, email);
    userEvent.type(inputPassword, password);
    expect(btnLogin).not.toBeDisabled();

    userEvent.type(inputEmail, 'invalidEmail');
    userEvent.type(inputPassword, password);
    expect(btnLogin).toBeDisabled();

    userEvent.type(inputEmail, email);
    userEvent.type(inputPassword, '1234');
    expect(btnLogin).toBeDisabled();
  });

  it('Verifica direcionamento da página após sucesso', () => {
    const { history } = renderWithRouter(<App />);

    userEvent.type(inputEmail, email);
    userEvent.type(inputPassword, password);
    userEvent.click(btnLogin);

    const { pathname } = history.location;
    expect(pathname).toBe('/comidas');
  });
});
