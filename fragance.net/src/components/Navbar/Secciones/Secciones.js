import React from "react";
import { Link } from "react-router-dom";

const Secciones = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          <button className="btn btn-secondary">
            <i className="fas fa-home fa-lg"></i> TODOS
          </button>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/modelo/Escencial">
          <button className="btn btn-secondary">
            <i className="fas fa-laptop fa-lg"></i> ESSENCIAL
          </button>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/modelo/Homem">
          <button className="btn btn-secondary">
            <i className="fas fa-mobile fa-lg"></i> HOM.EM
          </button>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/modelo/Kaiak">
          <button className="btn btn-secondary">
            <i className="fas fa-tv fa-lg"></i> KAIAK
          </button>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/modelo/Urbano">
          <button className="btn btn-secondary">
            <i className="fas fa-headphones fa-lg"></i> URBANO
          </button>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/modelo/Humor">
          <button className="btn btn-secondary">
            <i className="fas fa-headphones fa-lg"></i> HUMOR
          </button>
        </Link>
      </li>
    </ul>
  );
};

export default Secciones;
