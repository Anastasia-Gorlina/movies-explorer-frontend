function FilterCheckbox() {
  return (
    <div className="FilterCheckbox">
      <label className="FilterCheckbox__text">
        <input className="FilterCheckbox__input" type="checkbox" id="short" name="short-films" value="yes" />
        <span className="FilterCheckbox__visible-checkbox"></span>
        <span className="FilterCheckbox__text">Короткометражки</span>
      </label>
    </div>
  );
}

export default FilterCheckbox;