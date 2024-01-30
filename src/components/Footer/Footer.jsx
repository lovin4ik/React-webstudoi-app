import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__wrapper">
          <nav>
            <a href="/" className="footer__logo">
              <span>Web</span>Studio
            </a>
            <ul>
              <li>
                <a href="/">м. Київ, пр-т Лесі Українки, 26</a>
              </li>
              <li>
                <a href="/">info@devstudio.com</a>
              </li>
              <li>
                <a href="/">+38 096 111 11 11</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
