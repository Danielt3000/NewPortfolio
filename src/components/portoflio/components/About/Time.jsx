import React from "react";
import { useState, useEffect } from "react";
function Time() {
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
    <>
      <div className="flex max-xs:flex-col  mx-auto  max-xs:w-fit    justify-around text-white ">
        <div className=" max-xs:mb-3 text-xs p-3 sm:p-4 bg-[#1C1E3D]  flex rounded-xl text-center shadow-[0_7px_8px_1px_rgba(255,255,255,.3)] ">
          <p className="">My Time: </p>
          <p className="text-pt_second ml-2">{myTime}</p>
        </div>
        <div className=" text-xs p-3 sm:p-4  bg-[#1C1E3D]  flex rounded-xl text-center shadow-[0_7px_8px_1px_rgba(255,255,255,.3)]">
          <p className=" ">Your Time:</p>
          <p className="text-pt_second ml-2">{time}</p>
        </div>
      </div>
    </>
  );
}

export default Time;




