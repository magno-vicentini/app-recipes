import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

function Login() {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const SIX = 6;

  function validationLogin() {
    const regexLogin = /\S+@\S+\.\S+/;
    return !((regexLogin.test(userEmail) && userPassword.length > SIX));
  }

  function startLocalStorage() {
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify({ email: userEmail }));
    history.push('/comidas');
  }

  return (
    <form
      onSubmit={ (e) => {
        e.preventDefault();
        startLocalStorage();
      } }
    >
      <input
        type="email"
        value={ userEmail }
        data-testid="email-input"
        onChange={ (e) => setUserEmail(e.target.value) }
      />
      <input
        type="password"
        value={ userPassword }
        data-testid="password-input"
        onChange={ (e) => setUserPassword(e.target.value) }
      />
      <button
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
