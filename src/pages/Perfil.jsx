import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Perfil.css';

function Perfil() {
  const [email, setEmail] = useState();
  const history = useHistory();
  const getEmail = async () => {
    const emailObj = await JSON.parse(localStorage.getItem('user'));
    setEmail(emailObj.email);
  };

  useEffect(() => {
    getEmail();
  }, []);

  const resetLocalStorage = () => {
    localStorage.removeItem('mealsToken');
    localStorage.removeItem('cocktailsToken');
    localStorage.removeItem('doneRecipes');
    localStorage.removeItem('favoriteRecipes');
    localStorage.removeItem('inProgressRecipes');
    localStorage.removeItem('user');
    history.push('/');
  };

  return (
    <div className="perfil-container">
      <Header showSearch={ false } titlePage="Perfil" />
      <div className="perfil-card">
        <h1 data-testid="profile-email">
          {email}
        </h1>
        <div className="perfil-buttons">
          <button
            type="button"
            data-testid="profile-done-btn"
            onClick={ () => history.push('/receitas-feitas') }
          >
            Receitas Feitas
          </button>
        </div>
        <div className="perfil-buttons">
          <button
            type="button"
            data-testid="profile-favorite-btn"
            onClick={ () => history.push('/receitas-favoritas') }
          >
            Receitas Favoritas
          </button>
        </div>
        <div className="perfil-buttons">
          <button
            type="button"
            data-testid="profile-logout-btn"
            onClick={ () => resetLocalStorage() }
          >
            Sair
          </button>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Perfil;
