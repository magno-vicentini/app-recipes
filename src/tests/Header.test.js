import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import Header from '../components/Header';

import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

const dataTestBtnProfile = 'profile-top-btn';
const dataTestPageTitle = 'page-title';
const dataTestBtnSearch = 'search-top-btn';

const dataSearchInput = 'search-input';
const dataTestRdIngredient = 'ingredient-search-radio';
const dataTestRdName = 'name-search-radio';
const dataTestRdFirstLetter = 'first-letter-search-radio';
const dataTestBtnRdSearch = 'exec-search-btn';

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

  it.skip('Verifica botão e input de busca', () => {
    renderWithRouter(<Header />);

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

  it('Verifica direcionamento para o Perfil Page', () => {
    const { history } = renderWithRouter(<Header />);

    const btnProfile = screen.getByTestId(dataTestBtnProfile);

    userEvent.click(btnProfile);

    const { pathname } = history.location;
    expect(pathname).toBe('/perfil');
  });
});
