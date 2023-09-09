import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <form className="SearchForm">
      <input
        type="text"
        className="SearchForm__input"
        name="film"
        required
        placeholder="Фильм"
      />
      <button
        className="button SearchForm__button"
        type="submit"
      >
      Найти</button>
      <FilterCheckbox className="SearchForm__checkbox"/>
    </form>
  );
}

export default SearchForm;