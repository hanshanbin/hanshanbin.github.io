import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Header() {
  const [click, setClick] = useState(false);
  const onClick = () => setClick(!click);

  const [subBar, setSubBar] = useState(false);

  const showSubBar = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 800 && window.innerWidth >= 1200) {
      setSubBar(true);
    } else {
      setSubBar(false);
    }
  };

  window.addEventListener("scroll", showSubBar);

  return (
    <>
      <header className={subBar ? "header hidden" : "header"}>
        <nav className="nav container">
          <Link to="/" className="nav-title">
            <div className="nav-title__occupation">Product Designer</div>
            <div className="nav-title__name">Hans Lee</div>
          </Link>

          <div className="nav-menu">
            <ul className={click ? "nav-menu__list-active" : "nav-menu__list"}>
              <li className="menu-icon-xMark nav-menu__item" onClick={onClick}>
                <FontAwesomeIcon icon={faXmark} />
              </li>

              <li className="nav-menu__item">
                <Link className="nav-menu__link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-menu__item">
                <Link className="nav-menu__link" to="/features">
                  Features
                </Link>
              </li>
              <li className="nav-menu__item">
                <Link className="nav-menu__link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <FontAwesomeIcon
            className="menu-icon-hamburger"
            icon={faBars}
            onClick={onClick}
          />
        </nav>
      </header>

      <header className={subBar ? "header-sub" : "header-sub sub-hidden"}>
        <div className="header-sub-wrapper">
          <ul className="header-sub-lists">
            <li className="header-sub-list__link">
              <Link to="/about">About</Link>
            </li>
            <li className="header-sub-list__link">
              <Link to="/features">Features</Link>
            </li>
            <li className="header-sub-list__link">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
