import "./Header.scss";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const toPage = (page) => {
        navigate('/' + page);
    }

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Cilesia Logo" />
      <nav className="header__nav">
        <ul className="menu">
          <li className="menu__item" onClick={() => toPage("")}>Home</li>
          <li className="menu__item" onClick={() => toPage("questions")}>FAQ</li>
          <li className="menu__item" onClick={() => toPage("services")}>Services</li>
          <li className="menu__item" onClick={() => toPage("book")}>Book</li>
          <li className="menu__item" onClick={() => toPage("contact")}>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
