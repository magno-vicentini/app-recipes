import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const dataTestinputEmail = 'email-input';
const dataTestinputPassword = 'password-input';
const dataTestBtnLogin = 'login-submit-btn';

const email = 'test@test.com';
const password = '1234567';

describe('Testes Login Page', () => {
  it('Verifica se Inputs de Login existem', () => {
    renderWithRouter(<App />);

    const inputEmail = screen.getByTestId(dataTestinputEmail);
    const inputPassword = screen.getByTestId(dataTestinputPassword);
    const btnLogin = screen.getByTestId(dataTestBtnLogin);

    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(btnLogin).toBeInTheDocument();
  });

  it('Verifica acesso dos Inputs', () => {
    renderWithRouter(<App />);

    const inputEmail = screen.getByTestId(dataTestinputEmail);
    const inputPassword = screen.getByTestId(dataTestinputPassword);

    userEvent.type(inputEmail, email);
    expect(inputEmail).toHaveValue(email);

    userEvent.type(inputPassword, password);
    expect(inputPassword).toHaveValue(password);
  });

  it('Verifica se email e password é válido', () => {
    renderWithRouter(<App />);

    const inputEmail = screen.getByTestId(dataTestinputEmail);
    const inputPassword = screen.getByTestId(dataTestinputPassword);
    const btnLogin = screen.getByTestId(dataTestBtnLogin);

    userEvent.type(inputEmail, email);
    userEvent.type(inputPassword, password);
    expect(btnLogin).toBeEnabled();

    userEvent.type(inputEmail, 'invalidEmail');
    userEvent.type(inputPassword, password);
    expect(btnLogin).toBeDisabled();

    userEvent.type(inputEmail, email);
    userEvent.type(inputPassword, '12345');
    expect(btnLogin).toBeDisabled();
  });

  it('Verifica direcionamento da página após sucesso', () => {
    renderWithRouter(<App />);

    const inputEmail = screen.getByTestId(dataTestinputEmail);
    const inputPassword = screen.getByTestId(dataTestinputPassword);
    const btnLogin = screen.getByTestId(dataTestBtnLogin);

    userEvent.type(inputEmail, email);
    userEvent.type(inputPassword, password);
    userEvent.click(btnLogin);

    const comidaText = screen.getByText(/comida/i);
    expect(comidaText).toBeInTheDocument();
  });
});
