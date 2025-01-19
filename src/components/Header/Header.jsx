import "./Header.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import burger from "../../assets/images/burger-bar.png";
import logo from "../../assets/images/logo.png";
import arrowDown from "../../assets/images/down-arrow.png";

export default function Header() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const toPage = (page) => {
    navigate("/" + page);
    setShowMenu(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="header">
      <div className="header-bar">
        <img
          className="header__logo"
          src={logo}
          alt="Cilesia Logo"
          onClick={() => toPage("")}
        />
        <nav className="header__nav">
          <img
            className="menu-burger"
            src={burger}
            onClick={() => setShowMenu(!showMenu)}
          ></img>
          <ul className="menu">
            <li className="menu__item" onClick={() => toPage("")}>
              Home
            </li>
            <li className="menu__item" onClick={() => toPage("faq")}>
              FAQ
            </li>
            {/* <li className="menu__item" onClick={() => toPage("services")}>
              Services
            </li> */}
            {/* <div className="book-dropdown">
              <button
                className="book-dropdown__button"
                onClick={() => toPage("book")}
              >
                Book
              </button>
              <div className="book-dropdown__menu">
                <li className="menu__item" onClick={() => toPage("policy")}>
                  Policy
                </li>
                <li className="menu__item" onClick={() => toPage("care")}>
                  Care
                </li>
              </div>
            </div> */}
            <li className="menu__item" onClick={() => toPage("policy")}>
              Policy
            </li>
            <li className="menu__item" onClick={() => toPage("care")}>
              Care
            </li>
            <li className="menu__item" onClick={() => toPage("contact")}>
              Contact
            </li>
            <li className="menu__item menu__item--book" onClick={() => toPage("book")}>
              Book now
            </li>
          </ul>
        </nav>
      </div>

      <div className={showMenu ? "dropdown-menu" : "hide-menu"}>
        <ul className="dropdown-menu__list">
          <li className="dropdown-menu__item" onClick={() => toPage("")}>
            Home
          </li>
          <li
            className="dropdown-menu__item"
            onClick={() => toPage("faq")}
          >
            FAQ
          </li>
          {/* <li
            className="dropdown-menu__item"
            onClick={() => toPage("services")}
          >
            Services
          </li> */}
          <li className="dropdown-menu__item" onClick={() => toPage("policy")}>
            Policy
          </li>
          <li className="dropdown-menu__item" onClick={() => toPage("care")}>
            Care
          </li>
          <li className="dropdown-menu__item" onClick={() => toPage("contact")}>
            Contact
          </li>
          <li className="dropdown-menu__item" onClick={() => toPage("book")}>
            Book
          </li>
        </ul>
      </div>
    </header>
  );
}
