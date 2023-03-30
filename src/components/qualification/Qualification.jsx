import React from "react";
import "./qualification.css";
import { useState } from "react";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal Journey </span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
          >
            <i className="uil uil-graduation-cap qualification__icon"> </i>{" "}
            Education
          </div>

          {/* <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
             
          >
            <i className="uil uil-briefcase-alt qualification__icon"> </i>{" "}
            Experience
          </div> */}
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
           
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">MCA</h3>
                <span className="qualification__subtitle">
                Galgotias College of Engineering & Technology
                </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>2017-2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">BCA</h3>
                <span className="qualification__subtitle">SSJ Campus Almora,(Kumaun University)</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2014-2017
                </div>
              </div>
            </div>

            <div className="qualification__data">
            <div>
                <h3 className="qualification__title">Intermediate</h3>
                <span className="qualification__subtitle">Beersheba School Almora,(CBSE)</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2014
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>


              <div>
                <h3 className="qualification__title">High school</h3>
                <span className="qualification__subtitle">K.V Ranikhet(CBSE)</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2012
                </div>
              </div>
              
            </div>
          </div>

          {/* <div className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
            onClick={() => toggleTab(2)} 
            >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">BCA</h3>
                <span className="qualification__subtitle">
                  Kaumaun University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">MCA</h3>
                <span className="qualification__subtitle">Galgotias</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">12</h3>
                <span className="qualification__subtitle">Almora</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
