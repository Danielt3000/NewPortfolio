import { useReducer } from "react";
import React from "react";
import "./skills.css";
function Skills() {
  let initialState = {
    firsttime: "React",
    firstquote:
      "Component-Based Development, JSX, State Managment, Virtual DOM and more",
    secondtime: "Javascript",
    secondquote:
      "Asynchronous, Scope and Closures, Browser APIs, Functions, Frameworks",
    thirdtime: "Django",
    thirdquote:
      "Authentication and Authorization , Django Admin Interface , RESTful API Development ",
    skills: true,
    experience: false,
    eduaction: false,
  };

  function changer(state, action) {
    switch (action.type) {
      case "SKILLS":
        return {
          firsttime: "React",
          firstquote:
            "Component-Based Development, JSX, State Managment, Virtual DOM and more",
          secondtime: "Javascript",
          secondquote:
            "Asynchronous, Scope and Closures, Browser APIs, Functions, Frameworks",
          thirdtime: "Django",
          thirdquote:
            "Authentication and Authorization , Django Admin Interface , RESTful API Development ",
          skills: true,
          experience: false,
          eduaction: false,
        };

      case "EXPERIENCE":
        return {
          firsttime: " January 2024 to Present ",
          firstquote: "Carwash Attendant in Reno Vulcanizing. ",
          secondtime: "March 2023 to Agust 2023",
          secondquote:
            "Janitorial Lead in Controlled Contamination Services  Reno, NV. ",
          thirdtime: "October 2022 to January 2024. ",
          thirdquote:
            "Ramp Lead Agent in  WFS Worldwide Flight Services  Reno, NV.",
          experience: true,
          skills: false,
          eduaction: false,
        };
      case "EDUCATION":
        return {
          firsttime: "TECH I.S. | Web Development Program.",
          firstquote:
            "mastered languages as React, JS and Python, algorithms, and built apps.",
          secondtime: " Procter Hug High School",
          secondquote: " I studied, explored, and discovered passions.",
          thirdtime: "Self-learning",
          thirdquote:
            "Self-taught web developer, crafting innovative projects from scratch.",
          eduaction: true,
          skills: false,
          experience: false,
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(changer, initialState);

  return (
    <div className="max-md:w-10/12 mx-auto">
      <div className="flex  justify-around max-md:mt-10  text-xl font-bold md:text-xl  ">
        <button
          className={state.skills ? "un2" : "un "}
          onClick={() => {
            dispatch({ type: "SKILLS" });
          }}
        >
          Skills
        </button>

        <button
          className={state.experience ? "un2" : "un mx-4"}
          onClick={() => {
            dispatch({ type: "EXPERIENCE" });
            console.log("hello");
          }}
        >
          Experience
        </button>

        <button
          className={state.eduaction ? "un2" : "un"}
          onClick={() => {
            dispatch({ type: "EDUCATION" });
          }}
        >
          Education
        </button>
      </div>
      <div className=" text-left max-md:ml-10 mt-10 xl:ml-2">
        <div>
          <h4 className=" text-pt_second font-bold md:text-base ">
            {state.firsttime}
          </h4>
          <p className="text-white font-semibold ">{state.firstquote}</p>
        </div>

        <div className="my-4">
          <h4 className=" text-pt_second font-bold md:text-base">
            {state.secondtime}
          </h4>
          <p className="text-white font-semibold">{state.secondquote}</p>
        </div>

        <div>
          <h4 className=" text-pt_second font-bold  md:text-base">
            {state.thirdtime}
          </h4>
          <p className="text-white font-semibold">{state.thirdquote}</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
