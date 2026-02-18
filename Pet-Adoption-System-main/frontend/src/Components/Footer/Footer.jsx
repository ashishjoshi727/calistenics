import React from "react";
import { Link } from "react-router-dom";
import logo from './Image/logo.png'
import './Footer.css'

const Footer = (props) => {
  return (
    <footer className="footer">
      <div>
        <Link className="logo-container" to="/">
          <img className="navbar-logo" src={logo} alt="PawFinds Logo" />
          <p>{props.title}</p>
        </Link>
      </div>
      <div className="below-footer">
        <p>
          You can reach me at{" "}
          <a className="mail-links" href="mailto:bhavisingh@gmail.com">
            bhavisingh@gmail.com
          </a>
        </p>
        <p>
          <a
            className="contact-links"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i> Linkedin
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a
            className="contact-links"
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i> GitHub
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a
            className="contact-links"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram"></i> Instagram
          </a>
          
        </p>
        <p>&copy; 2025 Bhavya Singh</p>
      </div>
    </footer>
  );
};

export default Footer;