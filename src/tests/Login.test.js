import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Login from '../pages/Login';
import renderWithRouter from './renderWithRouter';

const dataTestinputEmail = 'email-input';
const dataTestinputPassword = 'password-input';
const dataTestBtnLogin = 'login-submit-btn';

const dataTestMenuFooter = 'footer';

const email = 'test@test.com';
const password = '1234567';

describe('Testes Login Page', () => {
  it('Teste não pode haver header na tela de login', () => {
    renderWithRouter(<Login />);

    const menuFooter = screen.queryByTestId(dataTestMenuFooter);
    expect(menuFooter).not.toBeInTheDocument();
  });

  it('Teste não pode haver header na tela de login', () => {
    renderWithRouter(<Login />);

    const comidaText = screen.queryByText(/comida/i);
    expect(comidaText).not.toBeInTheDocument();
  });

  it('Verifica se Inputs de Login existem', () => {
    renderWithRouter(<Login />);

    const inputEmail = screen.getByTestId(dataTestinputEmail);
    const inputPassword = screen.getByTestId(dataTestinputPassword);
    const btnLogin = screen.getByTestId(dataTestBtnLogin);

    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(btnLogin).toBeInTheDocument();
  });

  it('Verifica acesso dos Inputs', () => {
    renderWithRouter(<Login />);

    const inputEmail = screen.getByTestId(dataTestinputEmail);
    const inputPassword = screen.getByTestId(dataTestinputPassword);

    userEvent.type(inputEmail, email);
    expect(inputEmail).toHaveValue(email);

    userEvent.type(inputPassword, password);
    expect(inputPassword).toHaveValue(password);
  });

  it('Verifica se email e password é válido', () => {
    renderWithRouter(<Login />);

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

  it('Verifica direcionamento da página após sucesso', async () => {
    const { history } = renderWithRouter(<Login />);

    const inputEmail = screen.getByTestId(dataTestinputEmail);
    const inputPassword = screen.getByTestId(dataTestinputPassword);
    const btnLogin = screen.getByTestId(dataTestBtnLogin);

    userEvent.type(inputEmail, email);
    userEvent.type(inputPassword, password);
    fireEvent.click(btnLogin);

    const { pathname } = history.location;
    expect(pathname).toBe('/comidas');
  });
});
