import { useState, useEffect } from 'react';

function FilterCheckbox({ onCheckBoxClick, initState }) {

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(initState)
  }, [initState])

  function toggleCheckbox() {
    setIsChecked(!isChecked);
    onCheckBoxClick(!isChecked);
  }

  return (
    <div className="FilterCheckbox">
      <label className="FilterCheckbox__text">
        <input className="FilterCheckbox__input" type="checkbox" id="short" name="short-films" checked={isChecked} onChange={toggleCheckbox}  />
        <span className="FilterCheckbox__visible-checkbox" ></span>
        <span className="FilterCheckbox__text">Короткометражки</span>
      </label>
    </div>
  );
}

export default FilterCheckbox;