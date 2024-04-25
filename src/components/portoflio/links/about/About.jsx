import React from "react";
import Nav from "../../components/nav/Nav";
import Time from "../../components/About/Time";
import "./newabout.css";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import cat from "./assets/mecat2.jpeg";
import me from "./assets/m3.svg";

function About() {
  return (
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
      <div className="text-white  border border-y-2 border-pt_second  border-x-0 ">
        <h1 className="text-center text-2xl font-bold mb-5 mt-10 ">
          Journey Through Cultures and Passions
        </h1>
        <div className="midxl:flex justify-around">
          <p className="text-sm sm:text-base  leading-6 text-left w-10/12 sm:w-8/12   midxl:w-6/12 xl:w-4/12  max-midxl:mx-auto mb-8">
            <span className=" text-pt_second">
              My Coding Journey Across Two Worlds
            </span>
            , Hey there! I'm a mix of American and Mexican culture My journey
            into coding began when I was just a kid, playing around with HTML
            tags "(h1)" at around 11 or 12. Honestly, it felt like trying to
            crack a secret code!it was hard to learn beacuse i was trying to do
            my index.html in the NoteApp of my computer. <br />
            <br />
            Time pass and when I was 15 years old my mom took us from{" "}
            <span className=" text-pt_second">Mexico</span> all the way to{" "}
            <span className=" text-pt_second">Los Angeles</span>, there my other
            challenge learn english, but for my suprise everyone in the city of
            Whittier where i was stayin speak English! time pass rent in LA are
            super expensive and eventually we move to
            <span className=" text-pt_second"> Reno, Nevada</span>. Along the
            way, my love for gaming and computers kept me grounded, reminding me
            of those early HTML days. <br />
            <br />
            Now, I'm diving back into coding , mixing self-study with a stint at
            a Programming Bootcamp. My goal? "
            <span className=" text-pt_second underline">
              To turn my passion for coding into something real
            </span>
            ". I'm all about crafting web pages that showcase my skills and
            connecting with other coding enthusiasts. <br />
            <br />
            When I'm not coding away, you'll find me gaming, hanging out with
            friends, or giving the piano my best shot. Life's an adventure, and
            I'm excited to see where this coding journey takes me.
          </p>

          <div className="flex  justify-center mb-10  max-sm:mx-[20px]">
            <img
              className="w-[400px] rounded-lg md:h-[300px] md:my-auto"
              src={cat}
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <Contact item={me} />
      </div>
      <Footer />
    </div>
  );
}

export default About;
