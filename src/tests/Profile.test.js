import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import Perfil from '../pages/Perfil';
import { act } from 'react-dom/test-utils';

const email = 'test@test.com';

const dataTestEmailProfile = 'profile-email';
const dataTestBtnReceitasFeitas = 'profile-done-btn';
const dataTestBtnReceitasFavoritas = 'profile-favorite-btn';
const dataTestBtnSair = 'profile-logout-btn';

describe('Testes Perfil Page', () => {
  beforeEach(() => {
    localStorage.setItem('user', JSON.stringify({ email }));
  });
  afterEach(() => {
    localStorage.removeItem('user');
  });

  it('Verifica Perfil contem todos components na pagina', async () => {
    await act(async () => {
      renderWithRouter(<Perfil />);
    });    

    const emailProfile = screen.getByTestId(dataTestEmailProfile);
    const btnReceitasFeitas = screen.getByTestId(dataTestBtnReceitasFeitas);
    const btnReceitasFavoritas = screen.getByTestId(dataTestBtnReceitasFavoritas);
    const btnSair = screen.getByTestId(dataTestBtnSair);

    expect(emailProfile).toBeInTheDocument();
    expect(btnReceitasFeitas).toBeInTheDocument();
    expect(btnReceitasFavoritas).toBeInTheDocument();
    expect(btnSair).toBeInTheDocument();
  });

  it('Verifica Email esta no localStorage', async () => {
    await act(async () => {
      renderWithRouter(<Perfil />);
    });   

    const emailProfile = screen.getByTestId(dataTestEmailProfile);
    console.log(emailProfile.innerHTML);
    expect(emailProfile.innerHTML).toBe(email);
  });

  it('Verifica direcionamento para pagina Receitas Feitas', async () => {
    await act(async () => {
      const { history } = renderWithRouter(<Perfil />);

      const btnReceitasFeitas = screen.getByTestId(dataTestBtnReceitasFeitas);
      userEvent.click(btnReceitasFeitas);

      const { pathname } = history.location;
      expect(pathname).toBe('/receitas-feitas');
    });
  });

  it('Verifica direcionamento para pagina Receitas Favoritas', async () => {
    await act(async () => {
      const { history } = renderWithRouter(<Perfil />);

      const btnReceitasFavoritas = screen.getByTestId(dataTestBtnReceitasFavoritas);
      userEvent.click(btnReceitasFavoritas);

      const { pathname } = history.location;
      expect(pathname).toBe('/receitas-favoritas');
    });
  });

  it('Verifica direcionamento para pagina Login', async () => {
    await act(async () => {
      renderWithRouter(<Perfil />);      
    });

    const userName = JSON.parse(localStorage.getItem('user')).email;
    expect(userName).toBe(email);

    const btnSair = screen.getByTestId(dataTestBtnSair);
    userEvent.click(btnSair);

    // const { pathname } = history.location;
    // expect(pathname).toBe('/');

    const storage = JSON.parse(localStorage.getItem('user'));
    expect(storage).toBe(null);
  });
});
