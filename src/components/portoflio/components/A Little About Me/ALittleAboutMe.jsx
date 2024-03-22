import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import randomImg from "./assets/randompng.jpg";
import wizzard from "./assets/wizard.svg";
import Skills from "./Skills";

AOS.init();
function ALittleAboutMe() {
  return (
    <div className="bg-[#000000bc] border border-y-2 border-pt_second ">
      <div className=" text-white p-5 text-center m-auto xL:w-9/12 xl:w-7/12 ">
        <div>
          <div>
            <h1 className=" text-pt_second text-sm">
              Charting My Path in the Digital Frontier
            </h1>
            <h1 className="font-bold  mt-5 text-2xl  md:text-4xl  ">
              Introduction: Aspiring Web Developer
            </h1>
          </div>
          <div className="sm:flex sm:justify-around ">
            <div className=" text-left  md:w-10/12  mt-10  md:mt-14 ">
              <img className="max-sm:ml-16 mt-8" src={wizzard} alt="" />
              <h1 className="max-sm:text-center text-pt_third  text-base mb-8  font-bold">
                Creative Web Wizard Building Cool Stuff
              </h1>
              <p className="text-sm leading-6 md:text-base  ">
                I'm a passionate web developer experienced in JavaScript,
                Django, HTML, CSS, and React. Specializing in creating dynamic
                and interactive user experiences, I excel in both front-end and
                back-end technologies. I Like learning from individuals more
                skilled than me, I'm dedicated to honing my skills and
                contributing innovative solutions to forward-thinking companies
              </p>
            </div>
            <img
              className=" ml-6 mt-10   sm:mt-40 md:mt-32 max-xs:w-9/12  w-6/12     sm:h-1/2  rounded-xl  sm:ml-5   "
              src={randomImg}
              alt=""
            />
          </div>
        </div>
        <div className="md:flex  sm:mt-10 ">
          <img
            className="  max-md:mx-auto max-sm:relative left-12 bottom-8 w-9/12 rounded-xl xs:w-6/12 md:mr-10 md:h-4/6 md:mt-20"
            src={randomImg}
            alt=""
          />
          <div className="max-md:mt-10 ">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ALittleAboutMe;
