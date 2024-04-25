import React from "react";
import profile from "../img/mypicture.svg";
import "./about.css";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function About() {
  const [time, setTime] = useState("");
  const [myTime, setMyTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date();
      const currentHours = currentTime.getHours().toString().padStart(2, "0");
      const currentMinutes = currentTime
        .getMinutes()
        .toString()
        .padStart(2, "0");
      const currentAmPm = currentTime.getHours() >= 12 ? "PM" : "AM";
      setTime(`${currentHours}:${currentMinutes} ${currentAmPm}`);

      const losAngelesTime = new Date(
        currentTime.toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
      );
      const losAngelesHours = losAngelesTime
        .getHours()
        .toString()
        .padStart(2, "0");
      const losAngelesMinutes = losAngelesTime
        .getMinutes()
        .toString()
        .padStart(2, "0");
      const losAngelesAmPm = losAngelesTime.getHours() >= 12 ? "PM" : "AM";
      setMyTime(`${losAngelesHours}:${losAngelesMinutes} ${losAngelesAmPm}`);
    };

    updateTime();

    const intervalId = setInterval(updateTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex max-md:flex-col-reverse mx-auto justify-center mt-2">
      <div className="me-center md:mr-24  max-lg:flex max-lg:flex-col">
        <section className="me ">
          <p className="me--text text-sm max-w-96">
            I'm an aspiring Full Stack Developer, passionate about crafting
            visually appealing websites and applications. Currently, I'm
            learning<span className="text-pt_second"> React</span> for front-end
            development,
            <span className=" text-pt_second">Django</span> for back-end, and
            <span className="text-pt_second"> Redux</span> for state management.
            Committed to growth and contribution, I'm eager to progress in the
            dynamic field of web development.
          </p>
        </section>
        <button className=" bg-pt_second px-4  py-3 md:px-6 md:py-3 rounded-2xl border-2 border-black shao md:relative bottom-5  z-1 transition hover:scale-110  max-md:mt-5  max-md:w-40 mx-auto">
          <Link
            to="/contact"
            className=" strokes text-white font-bold text-xl md:text-2xl"
          >
            Lets Talk
          </Link>
        </button>
      </div>
      <div className="flexing md:justify-center mb-12 justify-evenly md:flex-col mr-10 lg:flex-row">
        <div className="picture mb-6">
          <img
            className="picture--foto"
            src={profile}
            alt="Picture of Oscar Daniel sititng on his Couch"
          />
        </div>
        <div className="flex flex-col my-auto ">
          <div className="circle">
            <p className="circle__upper-text">My Time</p>
            <p className="circle__down-text">{myTime}</p>
          </div>
          <div className="circle">
            <p className="circle__upper-text">Your Time</p>
            <p className="circle__down-text">{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
