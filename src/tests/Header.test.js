import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Header from '../components/Header';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import renderWithRouter from './renderWithRouter';

const dataTestBtnProfile = 'profile-top-btn';
const dataTestPageTitle = 'page-title';
const dataTestBtnSearch = 'search-top-btn';

describe('Testes Header Component', () => {
  it('Verifica Header na pagina após login', () => {
    renderWithRouter(<Header />);

    const btnProfile = screen.getByTestId(dataTestBtnProfile);
    const pageTitle = screen.getByTestId(dataTestPageTitle);
    const btnSearch = screen.getByTestId(dataTestBtnSearch);

    expect(btnProfile).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
    expect(btnSearch).toBeInTheDocument();

    expect(btnProfile.innerHTML).toContain(profileIcon);
    expect(btnSearch.innerHTML).toContain(searchIcon);
  });

  it('Verifica direcionamento para o Perfil Page', () => {
    const { history } = renderWithRouter(<Header />);

    const btnProfile = screen.getByTestId(dataTestBtnProfile);

    userEvent.click(btnProfile);

    const { pathname } = history.location;
    expect(pathname).toBe('/perfil');
  });
});
