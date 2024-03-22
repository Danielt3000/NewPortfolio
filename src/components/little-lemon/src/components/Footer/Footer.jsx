import React from "react";
import { Link } from "react-router-dom";
import corridor from "../assets/corridor.png";
function Footer() {
  return (
    <div className="py-5 text-white bg-primary   ">
      <footer className="text-center sm:flex  sm:justify-center">
        <div>
          <img src={corridor} className="hidden sm:block" />
        </div>
        <div className=" my-auto sm:ml-16">
          <div className="flex justify-evenly flex-row sm:flex-col sm:mr-5 mb-10 text-third">
            <Link></Link>
            <Link to="/">Click Here to Return to the Portfolio</Link>
            <Link></Link>
          </div>
          <div className="font-semibold max-sm:my-5 text-secondary justify-center ">
            <h1>Reno, Nevada</h1>
            <h1>(775)342-3035</h1>
            <h1>oscardaniel202204</h1>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
