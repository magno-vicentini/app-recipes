import React, { useState } from 'react';

function Login({ history }) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  function validationLogin() {
    const regexLogin = /\S+@\S+\.\S+/;
    return !((regexLogin.test(userEmail) && userPassword.length > 6));
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
        id=""
        data-testid="email-input"
        onChange={ (e) => setUserEmail(e.target.value) }
      />
      <input
        type="password"
        value={ userPassword }
        id=""
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

export default Login;
