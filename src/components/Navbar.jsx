/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

export default function NavbarUser() {
  return (
    <nav className="navbar navbar-expand-sm fixed-top navbar-light">
      <div className="container">
        <a className="navbar-brand custom-user-logo" href="#"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto custom-user-font">
            <a className="nav-item nav-link ml-2 pl-3 pr-3 custom-user-cursor" id="ourservice">
              Our Service
            </a>
            <a className="nav-item nav-link ml-2 pl-3 pr-3 custom-user-cursor" id="whyus">
              Why Us
            </a>
            <a className="nav-item nav-link ml-2 pl-3 pr-3 custom-user-cursor" id="testimonial">
              Testimonial
            </a>
            <a className="nav-item nav-link ml-2 pl-3 pr-3 custom-user-cursor" id="faq">
              FAQ
            </a>
            <Link className="nav-item nav-link ml-3 bg-success text-white font-weight-bold rounded pl-3 pr-3 custom-custom-user-cursor" to="/register">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
