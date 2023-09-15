import search from "../../images/search.svg";
import { useState, useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onClick, initialSearchStr = '', isShort }) {
  const [searchStr, setSearchStr] = useState('');
  const [filmError, setFilmError] = useState('');
  const [needShortFilmFilter, setNeedShortFilmFilter] = useState(false);

  useEffect(() => {
    setSearchStr(initialSearchStr)
    setNeedShortFilmFilter(isShort) 
  }, [initialSearchStr, isShort])

  useEffect(() => {
    //if (searchStr.length === 0) {
      onClick(searchStr, needShortFilmFilter);
    //}
  }, [needShortFilmFilter])

  function onChange(e) {
    setSearchStr(e.target.value);
   /* if (e.target.value.length === 0) {
      setFilmError('Нужно ввести ключевое слово.');
    } else {
      setFilmError('');
    }*/
  }

  function handleButtonClick(e) {
    e.preventDefault();
    if (searchStr.length === 0) {
      setFilmError('Нужно ввести ключевое слово.');
    } else {
      setFilmError('');
    }
    onClick(searchStr, needShortFilmFilter, true);
  }

  return (
    <section className="SearchForm">
      <div className="SearchForm__container">
        <form className="SearchForm__form">
          <div className="SearchForm__field">
            <div className="SearchForm__initiate">
              <img className="SearchForm__image" src={search} alt="поиск" />
              <input
                placeholder="Фильм"
                type="text"
                name="film"
                required
                className="SearchForm__input" 
                value={searchStr}
                onChange={onChange}>
              </input>
            </div>
            <span className="SearchForm__error">{filmError}</span>
            <button 
              disabled={!searchStr}
              onClick={handleButtonClick}
              className="button SearchForm__button" 
              type="submit">
              Найти
            </button>
          </div>
          <FilterCheckbox className="SearchForm__checkbox" onCheckBoxClick={setNeedShortFilmFilter} initState={needShortFilmFilter} />
          <h1>{!!searchStr}</h1>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;