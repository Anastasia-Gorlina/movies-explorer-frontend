import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [passTouched, setPassTouched] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('Поле Email не должно быть пустым.');
  const [passError, setPassError] = useState('Поле Пароль не должно быть пустым.');

  const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  useEffect(() => {
    if (emailError || passError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passError]);

  function handleEmailChange(e) {
    setEmail(e.target.value);
    if (!String(e.target.value).toLowerCase().match(EMAIL_REGEX)) {
      setEmailError('Некорректный email');
    } else {
      setEmailError('');
    }
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    if (e.target.value.length < 2) {
      setPassError('Обязательная длина поля от 2 символов.');
    } else {
      setPassError('');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    window.location.href = 'movies';
  }

  function blurHandler(e) {
    switch (e.target.name) {
      case 'email':
        setEmailTouched(true);
        break;
      case 'pass':
        setPassTouched(true);
        break;
      default:
        break;
    }
  }
  return (
    <section className="Login">
      <div className="Login__container">
        <img src={logo} alt="Фильмосерч лого" className="Login__logo" />
        <form className="Login__form" name='login'>
          <h2 className="Login__title">Рады видеть!</h2>
          <label className="Login__form-field">Email
            <input
              id="Login-email-input"
              type="text"
              className="Login__input"
              name="email"
              required
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              onBlur={blurHandler}
            />
            <span className={`Login__error-validation ${(emailTouched && emailError) && 'Login__error-validation_show'}`}>{emailError}</span>
          </label>
          <label className="Login__form-field">Пароль
            <input
              id="Login-password-input"
              type="password"
              className="Login__input"
              name="pass"
              required
              placeholder="Пароль"
              minLength="2"
              value={password}
              onChange={handlePasswordChange}
              onBlur={blurHandler}
            />
            <span className={`Login__error-validation ${(passTouched && passError) && 'Login__error-validation_show'}`}>{passError}</span>
          </label>
          <span className={`Login__error ${error}`}>Вы ввели неправильный логин или пароль.</span>
          <button
            className={`Login__button ${!formValid && 'Login__button_disabled'} button`}
            onClick={handleSubmit}
            type="submit"
            disabled={!formValid}>
            Войти</button>
          <div className="Login__caption">
            <p className="Login__caption-text">Ещё не зарегистрированы?</p>
            <Link to="/sign-up" className="Login__caption-link link">Регистрация</Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;