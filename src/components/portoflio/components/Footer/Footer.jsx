import React from "react";
import "./footer.css";
import github from "./assets/github.svg";
import linked from "./assets/linkedin.svg";
import twitter from "./assets/twitter.svg";
function Footer() {
  return (
    <div className="footer_background  flex justify-center   pt-5 pb-7">
      <div className="container_footer mx-auto  md:flex justify-around lg:w-5/6">
        <div>
          <h1 className="text-xl font-bold">My Location</h1>
          <p className=" text-pt_second">US Reno, Nevada</p>
        </div>
        <div>
          <h1 className="text-xl font-bold max-sm:mx-3">
            My Contact Information
          </h1>
          <p className="  text-pt_second">oscardaniel202204@gmail.com</p>
          <a
            href=" https://www.linkedin.com/in/front-js-developer/"
            className=" text-pt_second  hover:scale-125"
          >
            https://www.linkedin.com/in/front-js-developer/
          </a>
        </div>
        <div className="  flex w-100 justify-around  mt-4">
          <a className="w-[14%]" href="https://github.com/Danielt3000">
            <img src={github} alt="" />
          </a>
          <a
            className="w-[14%] mx-10"
            href="https://www.linkedin.com/in/front-js-developer/"
          >
            <img src={linked} alt="" />
          </a>
          <img className="w-[14%]" src={twitter} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
