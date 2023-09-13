import { useEffect } from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'
import { useFormWithValidation } from '../../customHooks/validation';
import validator from 'validator';

function Register({ onSubmit, error, clearErors, disabledForm }) {

  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();

  useEffect(() => { return clearErors() }, [])

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ email: values.email, password: values.password, name: values.name })
  }

  return (
    <section className="register">
      <div className="register__container">
      <Link to="/">
        <img src={logo} alt="Фильмосерч лого" className="register__logo" />
      </Link>
        <form className="register__form" name='register'>
          <h2 className="register__header">Добро пожаловать!</h2>
          <label className="register__form-field">Имя
            <input
              id="register-name-input"
              type="text"
              className="register__input"
              name="name"
              required
              placeholder="Имя"
              minLength="2"
              maxLength="30"
              value={values.name || ''}
              onChange={handleChange}
              readOnly={disabledForm}
            />
            <span className='register__error-validation register__error-validation_show'>{errors.password || ''}</span>
          </label>
          <label className="register__form-field">Email
            <input
              id="register-email-input"
              type="text"
              className="register__input"
              name="email"
              required
              placeholder="Email"
              value={values.email || ''}
              onChange={handleChange}
              readOnly={disabledForm}
            />
            <span className='register__error-validation register__error-validation_show'>
              {values.email ? (validator.isEmail(values.email) ? '' : 'Некорректный email') : '' || errors.email}
            </span>
          </label>
          <label className="register__form-field">Пароль
            <input
              id="register-password-input"
              type="password"
              className="register__input"
              name="password"
              required
              placeholder="Пароль"
              value={values.password || ''}
              onChange={handleChange}
              readOnly={disabledForm}
            />
            <span className='register__error-validation register__error-validation_show'>{errors.password || ''}</span>
          </label>
          <span className={`register__error ${error}`}>При регистрации пользователя произошла ошибка.</span>
          <span className={`register__error register__error_show`}>{error}</span>
          <button
            className={'button register__button'}
            onClick={handleSubmit}
            type="submit"
            disabled={!isValid || disabledForm  || !validator.isEmail(values.email)}>Зарегистрироваться</button>
          <div className="register__caption">
            <p className="register__caption-text">Уже зарегистрированы?</p>
            <Link to='/signin' className="register__caption-link link">Войти</Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;