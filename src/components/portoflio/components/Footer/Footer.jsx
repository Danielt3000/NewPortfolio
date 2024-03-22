import React from "react";
import "./footer.css";
import github from "./assets/github.svg";
import linked from "./assets/linkedin.svg";
import twitter from "./assets/twitter.svg";
function Footer() {
  return (
    <div className="footer_background  flex justify-center ">
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
          <p className=" text-pt_second">
            https://www.linkedin.com/in/front-js-developer/
          </p>
        </div>
        <div className="  flex w-100 justify-around  mt-4">
          <img className="w-[16%]" src={github} alt="" />
          <img className="w-[16%] mx-10" src={linked} alt="" />
          <img className="w-[16%]" src={twitter} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
