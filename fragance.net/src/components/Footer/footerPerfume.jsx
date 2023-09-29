import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const footerPerfume = () => {
  const facebookLink = "https://www.facebook.com/tu_pagina_de_facebook";
  const instagramLink = "https://www.instagram.com/tu_cuenta_de_instagram";
  const linkedinLink = "https://www.linkedin.com/in/tu_perfil_de_linkedin";
  const gmailLink = "mailto:tucorreo@gmail.com";
  return (
    <footer className="bg-dark text-light text-center py-3">
      <div className="container">
        <a
          href={facebookLink}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon mr -2"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>

        <a
          href={instagramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon mr-2"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href={linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon mr-2"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href={gmailLink} className="social-icon mr-2">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <p>&copy; {new Date().getFullYear()} Fragance-Net </p>
      </div>
    </footer>
  );
};

export default footerPerfume;
