import React from "react";

const Footer = () => {
  return (
    <footer class="footer-distributed">
      <div class="footer-left">

          <span><img className="footer__logo" src="./logo192.png" alt="Logo" /></span>

        <p class="footer-links">

          <a href="#">Gallery</a>

          <a href="#">Videos</a>

          <a href="#">Contact</a>
        </p>

        <p class="footer-company-name">Daniel Lynch © 2023</p>
      </div>

      <div class="footer-center">
        <div>
          <i class="fa fa-map-marker"></i>
          <p>
            <span>France</span> Paris
          </p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+1.555.555.5555</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">danielynch@company.com</a>
          </p>
        </div>
      </div>

      <div class="footer-right">
        <p class="footer-company-about">
          <span>About</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div class="footer-icons">
          <a href="/">
          <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="/">
          <i class="fa-brands fa-vimeo-v"></i>
          </a>
          <a href="/">
          <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
