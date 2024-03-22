import React from "react";
import Nav from "../../components/nav/Nav";
import "./contact.css";
import Time from "../../components/About/Time";
import name from "./assets/Vector.svg";
import phone from "./assets/phone.svg";
import email from "./assets/email.svg";
import person from "./assets/person.svg";
import Footer from "../../components/Footer/Footer";

function Contact() {
  return (
    <div>
      <div className="contact_back  justify-center  ">
        <Nav />
        <div className=" text-center  text-white  mt-[-4rem] md:mt-[-2rem] ">
          <h1 className=" text-[90px]  md:text-[128px] font-bold">Contact</h1>
          <h3 className="text-xl ">
            Your Team Let's explore how I can contribute to
            <br className=" text-pt_second" />
            <span className=" text-pt_second">Your Team</span>
          </h3>
          <div className="mx-auto   mt-[2rem] md:w-[700px] ">
            <Time />
          </div>
        </div>
      </div>
      <div className=" text-white   max:md-text-center bg-[#000000bc]  border border-y-2 border-pt_second    px-4">
        <div className="mt-10 md:flex justify-around max-w-[800px] mx-auto">
          <div className="md:mt-10 md:w-[320px]">
            <h1 className=" text-3xl  text-center  md:text-4xl font-bold underline underline-offset-2 md:w-[200px]  ">
              Keep In Touch
            </h1>
            <h3 className="max:md-mx-auto  text-xl md:text-2xl mt-20 italic   ">
              “I build scalable projects and have experience in UX and UI
              design”
            </h3>
            <p className=" text-left text-xs sm:text-sm  mt-5 leading-7 w-[300] md:w-[350px] max:md-mx-auto md:text-[1rem]">
              I specialize in developing scalable projects using React and
              JavaScript, and I bring extensive skills in UX and UI design to
              the table. I'm currently enhancing my expertise in these areas,
              learning how to create solutions that are both functional and
              visually engaging, delivering superior results for clients."
            </p>
          </div>
          <div>
            <div className=" mt-10 md:ml-16 lg:ml-32 ">
              <form className="text-white w-[280px] sm:w-[372px] mx-auto font-semibold">
                <div>
                  <div className="flex justify-between">
                    <h1 className=" text-left mb-1">Full Name:</h1>
                    <img src={name} alt="" />
                  </div>
                  <input
                    className="  pl-3 w-full  bg-[#d9d9d900]  border-b-2 border-b-pt_second  outline-pt_second aria-pressed:bg-[#d9d9d951]  rounded-sm "
                    type="text"
                  />
                </div>
                <div className="my-9">
                  <div className="flex justify-between">
                    <h1 className=" text-left mb-1">Phone Number:</h1>
                    <img src={phone} alt="" />
                  </div>
                  <input
                    className="  pl-3 w-full  bg-[#d9d9d900]  border-b-2 border-b-pt_second  outline-pt_second aria-pressed:bg-[#d9d9d951]  rounded-sm "
                    type="text"
                  />
                </div>
                <div>
                  <div className="flex justify-between">
                    <h1 className=" text-left mb-1">Email:</h1>
                    <img src={email} alt="" />
                  </div>
                  <input
                    className="  pl-3 w-full  bg-[#d9d9d900]  border-b-2 border-b-pt_second  outline-pt_second aria-pressed:bg-[#d9d9d951]  rounded-sm "
                    type="text"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex justify-between">
                    <label className=" text-left ">
                      Porpuse for this Connection
                    </label>
                    <img src={person} alt="" />
                  </div>
                  <select
                    defaultValue
                    className=" mt-2 rounded-md pl-3 w-full text-white  bg-[#d9d9d951]  border border-black shadow-[inset_0px_0px_7px_1px_rgba(0,0,0)] p-1"
                  >
                    <option selected disabled hidden>
                      Choose Connection
                    </option>
                    <option className="bg-[#0d0e1e]">Job Interview</option>
                    <option className="bg-[#0d0e1e]">
                      Connect and be Friends
                    </option>
                    <option className="bg-[#0d0e1e]">Projects work</option>
                    <option className="bg-[#0d0e1e]">Freelancer</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label> Message:</label>
                  <textarea
                    className=" resize-none text-pt_second mt-2 rounded-md pl-3 w-full   bg-[#d9d9d951]  border border-black shadow-[inset_0px_0px_7px_1px_rgba(0,0,0)] "
                    name="area"
                    id=""
                    cols="20"
                    rows="6"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button className=" bg-pt_second px-3  py-2 md:px-6 md:py-3 rounded-2xl border-2 border-black shao transition hover:scale-110  max-md:mt-5  max-md:w-40  mt-5">
                    <h1 className=" strokes text-white font-bold text-xl md:text-2xl">
                      Lest Talk
                    </h1>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
