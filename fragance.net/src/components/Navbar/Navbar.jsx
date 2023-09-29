import { Link } from "react-router-dom";
import "./navbar.css";
import CartWidget from "./../CartWidget/CartWidget";
import Secciones from "./Secciones/Secciones";
import logo from "../../assets/img/logo.jpg";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <img
                  src={logo}
                  alt="Logo"
                  className="logo"
                  style={{ width: "50px" }}
                />
              </Link>
            </li>
            <Secciones />
          </ul>

          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
