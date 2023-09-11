import React from "react";
import "./SearchForm.css";
import search from "../../images/search.svg";

function SearchForm() {
  return (
    <section className="SearchForm">
      <div className="SearchForm__container">
        <form className="SearchForm__form">
          <div className="SearchForm__field">
            <div className="SearchForm__initiate">
              <img className="SearchForm__image" src={search} alt="поиск" />
              <input placeholder="Фильм" className="SearchForm__input"></input>
            </div>
            <button className="SearchForm__button" type="submit">
              Найти
            </button>
          </div>
          <div className="SearchForm__switch">
            <input
              className="SearchForm__toggle"
              type="checkbox"
              id="toggle-button"
            />
            <label className="SearchForm__shortfilms">Короткометражки</label>
          </div>
        </form>
      </div>
    </section>
  );
}
export default SearchForm;