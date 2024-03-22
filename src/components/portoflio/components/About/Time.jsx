import React from "react";
import { useState, useEffect } from "react";
function Time() {
  const [time, setTime] = useState();
  const [myTime, setMyTime] = useState();
  useEffect(() => {
    // Function to update time states
    const updateTime = () => {
      let s = new Date().toLocaleTimeString();

      let newArray = [];

      for (let i = 0; i < s.length; i++) {
        newArray.push(s[i]);
      }

      let otherarray =
        newArray[0] + newArray[1] + newArray[2] + newArray[3] + " PM";
      setTime(otherarray);

      let d = new Date().toLocaleTimeString("en", {
        timeZone: "America/Los_Angeles",
      });

      let mydatesArray = [];

      for (let i = 0; i < d.length; i++) {
        mydatesArray.push(d[i]);
      }

      let MyDates =
        mydatesArray[0] +
        mydatesArray[1] +
        mydatesArray[2] +
        mydatesArray[3] +
        " PM";
      setMyTime(MyDates);
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
