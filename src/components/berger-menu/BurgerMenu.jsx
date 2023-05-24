import React, { useRef } from "react";
import "./BurgerMenu.scss";

import {useClickOutside} from '../../hooks/useClickOutside'

import iron from "../../assets/iron.png";
import logo from "../../assets/Logotype.png";
import close from "../../assets/burgerMenuCloseBtn.png";

const BurgerMenu = ({ isBurgerMenuOpen, onClose }) => {

  const burgerMenuRef = useRef(null);

  useClickOutside(burgerMenuRef, onClose)

  return (
    <div ref={burgerMenuRef} className={`BurgerMenu ${isBurgerMenuOpen && "BurgerMenuOpen"}`}>
      <header className="BurgerMenu__header">
        <img src={logo} alt="" />
        <button onClick={onClose} className="BurgerMenu__close">
          <img src={close} alt="" />
        </button>
      </header>
      <nav className="BurgerMenu__nav">
        <ul className="BurgerMenu__items">
          <li>
            Demos <img src={iron} alt="" />
          </li>
          <hr />
          <li>
            Posts <img src={iron} alt="" />
          </li>
          <hr />
          <li>
            Categories <img src={iron} alt="" />
          </li>
          <hr />
          <li>
            Shop <img src={iron} alt="" />
          </li>
          <hr />
          <li>Buy now</li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
