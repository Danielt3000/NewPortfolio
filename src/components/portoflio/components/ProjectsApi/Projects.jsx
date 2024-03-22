import React from "react";
import "./projects.css";
import git from "./imgs-projects/git.svg";
import link from "./imgs-projects/link.svg";
import logos from "./imgs-projects/logo-small.svg";
import js from "./imgs-projects/javascript-original.svg";
import css from "./imgs-projects/css3.svg";
import html5 from "./imgs-projects/html5.svg";
import django from "./imgs-projects/django-plain.svg";
import react from "./imgs-projects/react.svg";
import { useEffect, useState } from "react";

function Test() {
  const [projects, setprojects] = useState();

  useEffect(() => {
    fetch(`https://danielt3k.pythonanywhere.com/projects/api/project/`)
      .then((response) => response.json())
      .then((actualData) => {
        setprojects(actualData);
      });
  }, []);

  return (
    <>
      <div className="projects-body  mb-10  ">
        <div className=" text-center mt-10 ">
          <h1 className=" text-pt_second text-sm">
            My Web Development Journey
          </h1>
          <h1 className=" font-bold  mt-5 text-2xl  md:text-4xl text-white ">
            "Showcase: Web Developer's Portfolio"
          </h1>
        </div>

        <div className="">
          {projects?.map((data) => {
            return (
              <div
                className="card-content mx-auto my-14 w-[257px]   bg-white rounded-lg "
                key={data.id}
              >
                <div className="opacity">
                  <img
                    src={`https://res.cloudinary.com/ddn496rzj/${data.image}`}
                    alt=" "
                  />
                </div>
                <div className="">
                  <div className="flex  justify-between">
                    <h4 className="ml-3 mt-3 text-black font-bold ">
                      {data.name}
                    </h4>
                    <img
                      className=""
                      src={logos}
                      alt=""
                    />
                  </div>

                  <div className="px-3">
                    <p className=" text-black text-xs mt-4">
                      {data.about + "...."}
                      <a className="" href="http://">
                        {" "}
                      </a>
                    </p>
                  </div>
                  <div className="  bg-[#1C1E3D] mt-1 font-bold">
                    <h4 className="p-2 text-pt_second">Technology's Links</h4>
                  </div>
                  <div className="">
                    <div className="flex mt-3  justify-around">
                      <img className="w-2/12" src={html5} alt="" />
                      <img className="w-2/12" src={css} alt="" />
                      <img className="w-2/12" src={js} alt="" />
                      <img className="w-2/12" src={react} alt="" />
                      <img className="w-2/12" src={django} alt="" />
                    </div>
                    <div className="flex justify-around mt-3 pb-2 ">
                      <div className=" hover:scale-125 transition-all ">
                        <a href={data.github}>
                          <img
                            className="w-[3.3rem] ml-3"
                            src={git}
                            alt="git hub icon created "
                          />
                          <h1 className="text-xs font-bold">Github Link</h1>
                        </a>
                      </div>
                      <div className=" hover:scale-125 transition-all ">
                        <a href={data.url}>
                          <img className="w-[3.3rem]" src={link} alt="" />
                          <h1 className="text-xs font-bold">Web Link</h1>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Test;

{
  /* <div className="btns-project">
  <div className="btn-projects">
    <a href={data.github}>
      <img src={git} alt="git hub icon created " />
    </a>
  </div>
  <div className="btn-projects">
    <a href={data.url}>
      <img src={link} alt="" />
    </a>
  </div>
</div>; */
}
