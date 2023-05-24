import React, {useEffect, useState} from "react";

import "./Header.scss";

import logo from "../../assets/Logotype.png";
import iron from "../../assets/iron.png";
import burgerMenuIcon from "../../assets/burgerMenuLogo.png";
import searchIcon from "../../assets/searchIcon.png";

const Header = ({ onBurgerMenuOpen, onChange }) => {

  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsHidden(scrollPosition > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isHidden ? 'hidden' : ''}`}>
      <div className="header__icons">
        <button onClick={onBurgerMenuOpen} className="header__burger_menu">
          <img src={burgerMenuIcon} alt="burgerMenuIcon" />
        </button>
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__search">
          <label className="header__search-label" htmlFor="search">
            <img src={searchIcon} alt="searchIcon" />
          </label>
          <input onChange={onChange} className="header__search-input" type="text" id="search" required={true}/>
        </div>
      </div>
      <div className="header__menu">
        <ul className="header__items">
          <li>
            Demos <img src={iron} alt="" />
          </li>
          <li>
            Posts <img src={iron} alt="" />
          </li>
          <li>
            Categories <img src={iron} alt="" />
          </li>
          <li>
            Shop <img src={iron} alt="" />
          </li>
          <li>Buy now</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
