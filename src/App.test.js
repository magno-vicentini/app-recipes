import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

const dataTestinputEmail = 'email-input';
const dataTestinputPassword = 'password-input';
const dataTestBtnLogin = 'login-submit-btn';

test('Farewell, front-end', () => {
  render(<App />);

  const inputEmail = screen.getByTestId(dataTestinputEmail);
  const inputPassword = screen.getByTestId(dataTestinputPassword);
  const btnLogin = screen.getByTestId(dataTestBtnLogin);

  expect(inputEmail).toBeInTheDocument();
  expect(inputPassword).toBeInTheDocument();
  expect(btnLogin).toBeInTheDocument();
});
