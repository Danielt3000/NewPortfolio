import React from "react";
import mont from "../img/Mountain.svg";
import camp from "../img/Camping.svg";
import ocean from "../img/Ocean.svg";
import line1 from "../img/line1.svg";
import line2 from "../img/linea2.svg";

function navOpen() {
  return (
    <div className="fixed">
      <ul className={`list nav__list`}>
        <div className="modalOpen">
          <div className="modalOpen--page-socials">
            <img
              className="modalOpen--camping animate__animated animate__fadeInDown "
              src={camp}
            />
            <li className="modalOpen--links   animate__animated animate__fadeInLeft">
              <a
                className="modalOpen__link"
                href="https://www.linkedin.com/in/oscar-g-daniel/"
              >
                LinkedIn
              </a>
            </li>
            <li className="modalOpen--links  animate__animated animate__fadeInLeft">
              <a className="modalOpen__link" href="https://github.com/Danielt3000">
                Github
              </a>
            </li>
          </div>
          <img
            className=" animate__animated animate__fadeInDownBig"
            src={line1}
          />
          <div className="modalOpen--page-related">
            <img
              className="modalOpen--ocean animate__animated animate__fadeInDown"
              src={ocean}
            />
            <li className="modalOpen--links  animate__animated animate__fadeInRight">
              <a className="modalOpen__link" href="/">
                Home
              </a>
            </li>
            <li className="modalOpen--links  animate__animated animate__fadeInRight">
              <a className="modalOpen__link" href="#">
                Figma
              </a>
            </li>
            <li className="modalOpen--links  animate__animated animate__fadeInRight">
              <a className="modalOpen__link" href="#">
                About
              </a>
            </li>
          </div>
        </div>
        <img
          className="line2 animate__animated animate__fadeInRight"
          src={line2}
        />
        <div className="selected animate__animated animate__fadeInUp">
          <img className="selected--ocean" src={mont} alt="" />
          <a href="#" className="btn">
            My Selected Work
          </a>
        </div>
      </ul>
    </div>
  );
}

export default navOpen;