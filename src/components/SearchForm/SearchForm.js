import search from "../../images/search.svg";
import { useState, useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onClick, initialSearchStr = '', isShort, isMovie, setSearchStrSavedMovies = () => {} }) {
  const [searchStr, setSearchStr] = useState(localStorage.getItem('searchStr') || '');
  const [filmError, setFilmError] = useState('');
  const [needShortFilmFilter, setNeedShortFilmFilter] = useState(localStorage.getItem('needShortFilmFilter'));

  useEffect(() => {
    if(!isMovie) {
      setSearchStr(initialSearchStr)
    }
    setNeedShortFilmFilter(isShort)
  }, [initialSearchStr, isShort])

  useEffect(() => {
    //if (searchStr.length === 0) {
      onClick(searchStr, needShortFilmFilter);
    //}
  }, [needShortFilmFilter])

  const onCheckBoxClick = (value) => {
    setNeedShortFilmFilter(value);
    if(isMovie) {
    localStorage.setItem('needShortFilmFilter', value)
    }
  }

  function onChange(e) {
    setSearchStr(e.target.value);
    setSearchStrSavedMovies(e.target.value);
    if(isMovie) {
      localStorage.setItem('searchStr', e.target.value)
    }
   /* if (e.target.value.length === 0) {
      setFilmError('Нужно ввести ключевое слово.');
    } else {
      setFilmError('');
    }*/
  }

  function handleButtonClick(e) {
    e.preventDefault();
    /*if (searchStr.length === 0) {
      setFilmError('Нужно ввести ключевое слово.');
    } else {
      setFilmError('');
    }*/
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
              onClick={handleButtonClick}
              className="button SearchForm__button" 
              type="submit">
              Найти
            </button>
          </div>
          <FilterCheckbox className="SearchForm__checkbox" onCheckBoxClick={onCheckBoxClick} initState={needShortFilmFilter} />
          <h1>{!!searchStr}</h1>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;