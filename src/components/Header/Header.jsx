import "./Header.scss";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const toHomePage = () => {
        navigate("/");
    }

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Cilesia Logo" />
      <nav className="header__nav">
        <ul className="menu">
          <li className="menu__item" onClick={toHomePage}>Home</li>
          <li className="menu__item">Services</li>
          <li className="menu__item">FAQ</li>
        </ul>
      </nav>
    </header>
  );
}
