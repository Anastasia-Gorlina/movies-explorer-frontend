import { useEffect, useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import { useFormWithValidation } from '../../customHooks/validation';
import validator from 'validator';

function Profile({ onSubmit, onSignout, updateProfileStats, clearErors, disabledForm }) {

  const [inputIsReadOnly, setInputIsReadOnly] = useState(true);
  const { values, handleChange, resetForm, errors, isValid, setValues } = useFormWithValidation();
  const currentUser = useContext(CurrentUserContext);

  useEffect(() =>{ return clearErors()}, [clearErors])

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  useEffect(() => {
    if (currentUser.name && currentUser.email) {
      setValues({ name: currentUser.name, email: currentUser.email })
    }
  }, [currentUser]);

  useEffect(() => {
    if (updateProfileStats.type === 'error') {
      setInputIsReadOnly(false)
    } else {
      setInputIsReadOnly(true)
    }
  }, [updateProfileStats]);

  function onEdit(e) {
    setInputIsReadOnly(false);
  }

  function updateUser(e) {
    e.preventDefault();
    onSubmit({ email: values.email, name: values.name })
  }

  return (
    <section className="Profile">
      <form className="profile__form">
        <div className="profile__form-top">
          <p className="Profile__title">Привет, {currentUser.data.name}!</p>
          <div className="profile__data">
            <div className="profile__data-line">
              <p className="profile__data-text">Имя</p>
              <label className="profile__data-label" >
                <input
                  className="profile__data-input"
                  name='name'
                  type="text"
                  required
                  placeholder="Имя"
                  minLength="2"
                  maxLength="30"
                  value={values.name || ''}
                  onChange={handleChange}
                  readOnly={inputIsReadOnly || disabledForm}
                ></input>
                <span className='profile__error-validation profile__error-validation_show'>{errors.name || ''}</span>
              </label>
            </div>
            <div className="profile__data-line">
              <p className="profile__data-text">E-mail</p>
              <label className="profile__data-label" >
                <input
                  className="profile__data-input"
                  type="email"
                  name='email'
                  value={values.email || ''}
                  required
                  placeholder="Email"
                  onChange={handleChange}
                  readOnly={inputIsReadOnly || disabledForm}
                ></input>
               <span className='profile__error-validation profile__error-validation_show'>
                { values.email ? (validator.isEmail(values.email) ? '' : 'Некорректный email') : '' || errors.email}
                </span>
              </label>
            </div>
            <div className="profile__data-line"></div>
          </div>
        </div>
        <div className="profile__form-bottom">

        <span className={updateProfileStats.type === 'error' ? 'profile__error' : 'profile__success'}>{updateProfileStats.text || ''}</span>
        {
            inputIsReadOnly && <>
              <p className='profile__edit' onClick={onEdit}>Редактировать</p>
              <Link to='/' onClick={onSignout} className='link profile__sign-out'>Выйти из аккаунта</Link>
            </>
          }
          {
            !inputIsReadOnly && <button className='button profile__button-save' onClick={updateUser}
              type="submit" disabled={!isValid || (values.name === currentUser.data.name && values.email === currentUser.data.email) || disabledForm  || !validator.isEmail(values.email)}>Сохранить</button>
          }
        </div>
      </form>
    </section>
  );
}

export default Profile;