import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import '../styles/Login.css';

function Login() {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const THREE = 3;

  function validationLogin() {
    const regexLogin = /\S+@\S+\.\S+/;
    return !((regexLogin.test(userEmail) && userPassword.length > THREE));
  }

  const inProgressObj = { cocktails: {}, meals: {} };

  function startLocalStorage() {
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify({ email: userEmail }));
    localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressObj));
    localStorage.setItem('doneRecipes', JSON.stringify([]));
    history.push('/comidas');
  }

  return (
    <form
      className="login-container"
      onSubmit={ (e) => {
        e.preventDefault();
        startLocalStorage();
      } }
    >
      <h1>App Recipes</h1>
      <label htmlFor="login-email">
        Email:
        <input
          id="login-email"
          type="email"
          value={ userEmail }
          placeholder="example@example.com"
          data-testid="email-input"
          onChange={ (e) => setUserEmail(e.target.value) }
        />
      </label>
      <label htmlFor="login-pass">
        Password:
        <input
          id="login-pass"
          type="password"
          value={ userPassword }
          data-testid="password-input"
          onChange={ (e) => setUserPassword(e.target.value) }
        />
      </label>
      <button
        className={ (validationLogin()) ? 'invalid-button' : 'valid-button' }
        type="submit"
        data-testid="login-submit-btn"
        disabled={ validationLogin() }
      >
        Entrar
      </button>
    </form>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
