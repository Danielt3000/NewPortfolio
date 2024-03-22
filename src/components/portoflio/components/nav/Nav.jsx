import React from "react";
import { useState, useEffect } from "react";
import logo from "../img/Logo.svg";
import NavMobile from "./NavMobile";
import { Link } from "react-router-dom";

import "./navs.css";
import Navprop from "./Navprop";

function Nav() {
  const [wider, setWider] = useState({ width: window.innerWidth });

  const lookSize = () => {
    setWider({
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", lookSize);

    return () => {
      window.removeEventListener("resize", lookSize);
    };
  }, [wider]);

  const [scroll, setscroll] = useState(false);

  const scrollbehave = () => {
    if (window.scrollY > 50) {
      setscroll(true);
    } else {
      setscroll(false);
    }
  };

  let isBeingScrolled = scroll
    ? "flex text-white justify-center fixed bg-black w-full top-0 z-50"
    : "flex text-white justify-center  ";

  let ctlImg = scroll ? "w-24 py-5" : "w-24";

  let ctlName = scroll ? "text-center" : "text-center mt-3 mx-10 xl:ml-24";

  let ctlNameName = scroll
    ? "text-white font-black  text-base mt-2"
    : " text-3xl text-white font-black";

  let ctrlProfressions = scroll
    ? "text-pt_second text-xs "
    : "text-base font-black text-pt_second";

  let links = scroll
    ? "flex font-bold text-xl xl:text-2xl mt-10 "
    : "flex font-bold text-base xl:text-xl my-auto  xl:ml-32 tansition easy-in";

  window.addEventListener("scroll", scrollbehave);

  return (
    <div>
      {/* <div>{scroll === false ? "" : <Navprop />}</div> */}
      {wider.width > 768 ? (
        <div className={isBeingScrolled}>
          <div>
            <a href="/">
              <img className={ctlImg} src={logo} alt="" />
            </a>
          </div>
          <div className={ctlName}>
            <h1 className={ctlNameName}>Oscar Daniel</h1>
            <h3 className={ctrlProfressions}>Web-Developer</h3>
          </div>

          <ul className={links}>
            <div className="flex justify-between">
              <a
                className="       list-none transition-colors   hover:text-pt_second hover:scale-125 ease-in-out delay-100 "
                href="http://"
              >
                About
              </a>
              <a
                className="  ml-7 xl:ml-11   list-none transition-colors   hover:text-pt_second hover:scale-125 ease-in-out delay-100   "
                href="/"
              >
                Figma
              </a>
              <a
                className="  ml-7 xl:ml-11    list-none transition-colors   hover:text-pt_second hover:scale-125 ease-in-out delay-100   "
                href="/"
              >
                Home
              </a>
              <a
                className="   ml-7 xl:ml-11   list-none transition-colors   hover:text-pt_second hover:scale-125 ease-in-out delay-100   "
                href="https://www.linkedin.com/in/front-js-developer/"
              >
                LinkedIn
              </a>
              <a
                className="  ml-7 xl:ml-11    list-none transition-colors   hover:text-pt_second hover:scale-125 ease-in-out delay-100   "
                href="https://github.com/Danielt3000"
              >
                Github
              </a>
            </div>
          </ul>
        </div>
      ) : (
        <NavMobile />
      )}
    </div>
  );
}

export default Nav;
