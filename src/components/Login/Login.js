import { useEffect } from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'
import { useFormWithValidation } from '../../customHooks/validation';
import validator from 'validator';

function Login({ onSubmit, error, clearErors, disabledForm }) {

  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();

  useEffect(() => { return clearErors() }, [])

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ email: values.email, password: values.password })
  }

  return (
    <section className="Login">
      <div className="Login__container">
      <Link to="/movies">
        <img src={logo} alt="Логотип" className="Login__logo" />
      </Link>
        <form className="Login__form" name='login'>
          <h2 className="Login__title">Рады видеть!</h2>
          <label className="Login__form-field">Email
            <input
              id="Login-email-input"
              type="text"
              className="Login__input"
              name="email"
              required
              placeholder="email"
              value={values.email || ''}
              onChange={handleChange}
              readOnly={disabledForm}
            />
            <span className='login__error-validation login__error-validation_show'>
              {values.email ? (validator.isEmail(values.email) ? '' : 'Некорректный email') : '' || errors.email}
            </span>
          </label>
          <label className="Login__form-field">Пароль
            <input
              id="Login-password-input"
              type="password"
              className="Login__input"
              name="password"
              required
              placeholder="Пароль"
              minLength="2"
              value={values.password || ''}
              onChange={handleChange}
              readOnly={disabledForm}
            />
            <span className='Login__error-validation Login__error-validation_show'>{errors.password || ''}</span>
          </label>
          <span className='Login__error Login__error_show'>{error}</span>
          <button
            className='Login__button button'
            onClick={handleSubmit}
            type="submit"
            disabled={!isValid || disabledForm || !validator.isEmail(values.email)}
          >Войти</button>
          <div className="Login__caption">
            <p className="Login__caption-text">Ещё не зарегистрированы?</p>
            <Link to="/signup" className="Login__caption-link link">Регистрация</Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;