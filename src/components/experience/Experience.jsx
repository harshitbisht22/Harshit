import React from "react";
import { useState } from "react";
import "./experience.css";

const Experience = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">What i Did</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil  uil-setting services__icon"></i>
            <h3 className="services__title">
              QA <br />
              Tester
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal "
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">QA Tester</h3>
              <p className="services__modal-description">
                Acuminious Software 2019-2020
              </p>
              <p className="services__modal-description">
                Product : ADEPT Suite & STREAMDiff
              </p>

              <ui className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services_modal-info">
                    Involved in manual testing of both products which further
                    includes Installation testing, Sanity testing, Regression
                    testing Functional testing, Performance testing,
                    Compatibility testing.
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services_modal-info">
                    Verification of logs in both Windows and Linux environment
                    after running Automation scripts.
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services_modal-info">
                    Preparing weekly status Report.
                  </p>
                </li>
              </ui>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-brackets-curly services__icon"></i>
            <h3 className="services__title">
              Web <br /> Development
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal "
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Web Development</h3>
              <p link=" " className="services__modal-description">
              Web Development projects 
              </p>
              <ui className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <a
                    href="https://restaurant-menu-app-ecru.vercel.app/"
                    target="_blank"
                    className="services_modal-info"
                  >
                    Restaurant Menu
                  </a>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <a
                    href="https://weather-app-8g5y.vercel.app/"
                    target="_blank"
                    className="services_modal-info"
                  >
                    Weather App
                  </a>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <a
                    href="https://joke-generator-rouge.vercel.app/"
                    target="_blank"
                    className="services_modal-info"
                  >
                    Joke Generator
                  </a>
                </li>

              </ui>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">Freelencing</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal "
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Freelencing</h3>
              <p
                href="https://www.youtube.com/@cricketinsight"
                target="_blank"
                className="services__modal-description"
              >
                Create Logo,Thumbnails Post for YouTube and Instagram
              </p>
              <ui className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <a
                    href="https://www.youtube.com/@cricketinsight"
                    target="_blank"
                    className="services_modal-info"
                  >
                    Cricket Insight
                  </a>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <a
                    href="https://www.youtube.com/@drawingmadeasy"
                    target="_blank"
                    className="services_modal-info"
                  >
                    Drawing Made easy
                  </a>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <a
                    href="https://www.youtube.com/@bowledbynitish"
                    target="_blank"
                    className="services_modal-info"
                  >
                    Bowled By Nitish{" "}
                  </a>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <a
                    href="https://www.instagram.com/pretty.stain/"
                    target="_blank"
                    className="services_modal-info"
                  >
                    Pretty Stain{" "}
                  </a>
                </li>
              </ui>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
