import "./nav-bar.css";
const NavBar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="logo">
        <span>Web</span>Studio
      </a>
      <ul className="navbar__menu">
        <li>
          <a href="/">Студія</a>
        </li>
        <li>
          <a href="/">Портфоліо</a>
        </li>
        <li>
          <a href="/">Контакти</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
