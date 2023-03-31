import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Harshit Bisht</h1>

        <ul className="footer__list">
          <li>
            <a href="#Home" className="footer__link">
              Home
            </a>
          </li>
          <li>
            <a href="#Home" className="footer__link">
              Experience
            </a>
          </li>

          <li>
            <a href="#Home" className="footer__link">
              Skill
            </a>
          </li>

          <li>
            <a href="#about " className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#Services" className="footer__link"></a>
          </li>
        </ul>

        <div className="footer__social">
        <a
          href="https://github.com/harshitbisht22"
          className="home__social-icon"
          target="_blank"
        >
          <i class="uil uil-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/harshit-bisht-0a0a69148/"
          className="home__social-icon"
          target="_blank"
        >
          <i class="uil uil-linkedin"></i>
        </a>
        <a href="" className="home__social-icon" target="_blank"></a>
        <a href="tel:8126352708" className="footer__link">
        <i class="uil uil-phone"></i>
        </a>
        
        <a href="mailto:harshit.bisht.22@gmail.com" className="footer__link">
        <i class="uil uil-envelope"></i>
        </a>
      </div>
        <div>
          
        </div>
        <span className="footer__copy">
          &#169; Harshit Bisht. All Right Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
