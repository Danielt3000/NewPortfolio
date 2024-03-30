import React, { useState, useEffect } from "react";
import Time from "../../components/About/Time";
import Nav from "../../components/nav/Nav";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

function Projects() {
  const [projects, setprojects] = useState();

  useEffect(() => {
    fetch(`https://danielt3k.pythonanywhere.com/projects/api/project/`)
      .then((response) => response.json())
      .then((actualData) => {
        setprojects(actualData);
      });
  }, []);
  console.log(projects);
  return (
    <div>
      <div>
        <div className="contact_back  justify-center  ">
          <Nav />
          <div className=" text-center  text-white  mt-[-4rem] md:mt-[-2rem] ">
            <h1 className=" text-[90px]  md:text-[128px] font-bold">About</h1>
            <h3 className="text-xl ">
              Discover My Skills and Passion for
              <br className=" text-pt_second" />
              <span className=" text-pt_second">Collaborative Success</span>
            </h3>
            <div className="mx-auto   mt-[2rem] md:w-[700px]  ">
              <Time />
            </div>
          </div>
        </div>
        <div className="text-white mt-10">
          <h1 className="text-center text-2xl font-bold mb-5 md:text-4xl ">
            Projects Showcase
          </h1>
          <div className="grid  md:grid-cols-auto  grid-cols-autosmall">
            {projects?.map((data) => {
              return (
                <>
                  <div key={data.id} className="mx-auto">
                    <div className=" px-1 sm:px-8">
                      <div className="md:flex">
                        <div>
                          <h1 className=" text-2xl md:text-4xl  font-bold  text-pt_second">
                            {data.name}
                          </h1>
                          <p className="text-sm md:text-base my-4 w-[290px] ">
                            {data.about}
                          </p>
                        </div>

                        <img
                          className=" flex mx-auto w-[290px] rounded-xl md:ml-7"
                          src={`https://res.cloudinary.com/ddn496rzj/${data.image}`}
                          alt="img project"
                        />
                      </div>

                      <button className=" max-md:flex mx-auto w-fit  mt-10 mb-4 bg-pt_second px-[10px]  py-[8px] rounded-2xl border-2 border-black shao  transition hover:scale-110  max-md:mt-5  max-md:w-40">
                        <Link
                          to="/"
                          className=" strokes text-white font-bold text-xl md:text-2xl"
                        >
                          View Website
                        </Link>
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div>
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
