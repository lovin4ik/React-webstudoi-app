import "./header.css";
//
import NavBar from "./NavBar/NavBar";
import Address from "./Address/Address";
//
const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__wrapper">
          <NavBar />
          <Address />
        </div>
      </div>
    </header>
  );
};

export default Header;
