import React from "react";
import profile from "../img/mypicture.svg";
import "./about.css";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function About() {
  const [time, setTime] = useState();
  const [myTime, setMyTime] = useState();

  useEffect(() => {
    setInterval(() => {
      let s = new Date().toLocaleTimeString();

      let newS = s.slice(0, 5);
      let newese = s.slice(-2);
      const dates = newS.concat(" ", newese);

      setTime(dates);

      let d = new Date().toLocaleTimeString("en", {
        timeZone: "America/Los_Angeles",
      });
      let newD = d.slice(0, 5);
      let neweseD = d.slice(-2);
      const MyDates = newD.concat(" ", neweseD);
      setMyTime(MyDates);
    }, 60000);

    return () => {};
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
            to="/"
            className=" strokes text-white font-bold text-xl md:text-2xl"
          >
            Lest Talk
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
