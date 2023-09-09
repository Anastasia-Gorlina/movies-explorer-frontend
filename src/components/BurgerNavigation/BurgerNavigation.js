import React, { useState } from 'react';
import Menu from '../Menu/Menu';

function BurgerNavigation() {
  const [isNavOpen, setNavOpen] = useState(false);
  function toggleMenuState() {
    setNavOpen(!isNavOpen)
  }
  return (
    <div className="BurgerNavigation">
      <button type="button" className="BurgerNavigation__button button" onClick={toggleMenuState}></button>
      <Menu isOpen={isNavOpen} onClose={toggleMenuState} />
    </div>
  );
}

export default BurgerNavigation;