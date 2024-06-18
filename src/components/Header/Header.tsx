// import "./_header.scss"
// import logo from "../../images/icons/icon1.svg"

const Header = () => {
  return (
    <header className="header">
      <div className="container header-wrapper">
        <a href="#" className="logo">
          <div className="logo-wrapper">
            <img src='' alt="Icon" />
          </div>
          <span className="logo-text">КИНОПОИСК</span>
        </a>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-list__item"><a href="#">Избранные фильмы</a></li>
            <li className="nav-list__item"><a href="#">О нас</a></li>
            <li className="nav-list__item"><a href="#">Контакты</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;