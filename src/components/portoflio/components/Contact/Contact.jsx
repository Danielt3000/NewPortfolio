import React from "react";

function Contact() {
  return (
    <div className=" bg-[#000000bc] py-3 border border-y-2 border-pt_second ">
      <div className="text-center mt-10  ">
        <h1 className=" text-pt_second text-sm">
          Connecting for Coding Opportunities!
        </h1>
        <h1 className=" font-bold  mt-5 text-2xl  md:text-4xl text-white ">
          "Connect with Me: Get in Touch to Chat Code"
        </h1>
        <div className="flex max-midxl:flex-col mx-auto mt-10  xl:w-[1000px]">
          <form className="text-white w-[310] md:w-[372px] mx-auto">
            <div>
              <h1 className=" text-left mb-1">Full Name:</h1>
              <input
                className=" rounded-md pl-3 w-full text-pt_second  bg-[#d9d9d951]  border border-black shadow-[inset_0px_0px_7px_1px_rgba(0,0,0)]"
                type="text"
              />
            </div>
            <div>
              <h1 className=" text-left mb-1">E-mail:</h1>
              <input
                className=" rounded-md pl-3 w-full text-pt_second  bg-[#d9d9d951]  border border-black shadow-[inset_0px_0px_7px_1px_rgba(0,0,0)]"
                type="text"
              />
            </div>
            <div>
              <h1 className=" text-left mb-1">LinkedIn Profile:</h1>
              <input
                className=" rounded-md pl-3 w-full text-pt_second  bg-[#d9d9d951]  border border-black shadow-[inset_0px_0px_7px_1px_rgba(0,0,0)]"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label className=" text-left ">Porpuse for this Connection</label>
              <select
                defaultValue
                className=" mt-2 rounded-md pl-3 w-full text-pt_second  bg-[#d9d9d951]  border border-black shadow-[inset_0px_0px_7px_1px_rgba(0,0,0)] p-1"
              >
                <option selected disabled hidden>
                  Choose Connection
                </option>
                <option className="bg-[#0d0e1e]">Job Interview</option>
                <option className="bg-[#0d0e1e]">Connect and be Friends</option>
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
            <button className=" bg-pt_second px-3  py-2 md:px-6 md:py-3 rounded-2xl border-2 border-black shao transition hover:scale-110  max-md:mt-5  max-md:w-40  mt-5">
              <h1 className=" strokes text-white font-bold text-xl md:text-2xl">
                Lest Talk
              </h1>
            </button>
          </form>
          <div className="mx-auto mt-6">
            <img
              className="  h-[300px] w-[310px]      bg-black rounded-xl"
              src=""
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
