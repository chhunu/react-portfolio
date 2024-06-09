import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <div id="header" className="fixed-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <h1 className="logo me-auto me-lg-0">
            <a href="index.html">CHRISSY</a>
          </h1>

          <a href="index.html" className="logo">
            <img src="assets/img/logo.png" alt="" className="img-fluid" />
          </a>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <Link className="active" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <a href="resume.html">Resume</a>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="portfolio.html">Portfolio</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
            <i
              className="
bi bi-list mobile-nav-toggle"
            ></i>
          </nav>

          <div
            className="
header-social-links"
          >
            <a
              href="#"
              className="
twitter"
            >
              <i
                className="
bi bi-twitter"
              ></i>
            </a>
            <a
              href="#"
              className="
facebook"
            >
              <i
                className="
bi bi-facebook"
              ></i>
            </a>
            <a
              href="#"
              className="
instagram"
            >
              <i
                className="
bi bi-instagram"
              ></i>
            </a>
            <a
              href="#"
              className="
linkedin"
            >
              <i
                className="
bi bi-linkedin"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
