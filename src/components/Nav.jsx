import React from "react";

const Nav = () => {
  return (
    <nav>
      <div className="container__nav">
        <a href="/" className="nav__link--logo">
          <img className="logo" src="./logo192.png" alt="Logo" />
        </a>
        <div className="container__links">
          <a href="/" className="nav__link">
            Gallery
          </a>
          <a href="/" className="nav__link">
            Contact
          </a>
          <a href="/" className="nav__link">
            Instagram
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
