import React from "react";
import "./home.css";

const Social = () => {
  return (
    <div>
      <div className="home__social">
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
    </div>
  );
};

export default Social;
