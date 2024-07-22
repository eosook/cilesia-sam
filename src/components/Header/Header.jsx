import "./Header.scss";
import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Cilesia Logo" />
      <nav className="header__nav">
        <ul className="menu">
          <li className="menu__item">Home</li>
          <li className="menu__item">Services</li>
          <li className="menu__item">FAQ</li>
        </ul>
      </nav>
    </header>
  );
}
