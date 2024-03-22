import React from "react";
import { useState, useEffect } from "react";
import logo from "../img/Logo.svg";
import NavMobile from "./NavMobile";
import { Link } from "react-router-dom";
import "./navs.css";

function Navprop() {
  return (
    <div className="flex text-white justify-center  ">
      <div>
        <a href="/">
          <img className="w-40" src={logo} alt="" />
        </a>
      </div>
      <div className="text-center mt-3 mx-10 xl:ml-24">
        <h1 className=" text-3xl text-white font-black">Oscar Daniel</h1>
        <h3 className="text-base font-black text-pt_second">Web-Developer</h3>
      </div>

      <ul className="flex font-bold text-base xl:text-2xl my-auto  xl:ml-32 tansition easy-in">
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
  );
}

export default Navprop;
