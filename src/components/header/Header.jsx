import logoImg from "./../../img/logo.jpg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <img src={logoImg} alt="Logo" />
            <span> шаг за шагом к свободному общению на английском!</span>
          </div>
          <nav className="header__nav">
            <ul>
              <li>
                <a href="#!">Главная</a>
              </li>
              <li>
                <a href="#!">Игра</a>
              </li>
              <li>
                <a href="#!" className="header__nav-btn">
                  SIGN UP
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
