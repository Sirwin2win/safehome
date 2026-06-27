import React from "react";
import aiAgent from "../assets/vectors/aiAgent.png";

const HomeCard3 = () => {
  return (
    //   <div className='flex justify-evenly bg-[#AAEBB980] mx-20 mt-10 rounded-md'>
    <div className="flex justify-center bg-[#AAEBB980] mx-5 md:mx-20 md:justify-evenly mt-10 rounded-md md:h-120">
      {/* <img src={aiAgent} alt="payment card" className='w-40 bg-[#AAEBB9] md:w-150' /> */}
      <div>
        <div className="h-40 w-40  bg-[#AAEBB9] md:w-150 md:h-90">
          <img
            src={aiAgent}
            alt="payment card"
            className="pt-10 md:pt-0 md:size-105"
          />
        </div>
        <div className="h-25 w-20 bg-[#AAEBB9] md:h-30 md:w-70"></div>
      </div>

      <div className="mt-0 w-50 md:w-150 md:ms-5">
        <p className="md:text-3xl font-bold mb-5 md:mb-1 md:mt-15 px-2">
          Smart Property Dashboard
        </p>
        <p className="-mt-5 md:mt-10 px-2 pt-5 text-xs md:text-xl">
          Access a personalized dashboard designed to give you full control.
          Easily track available properties, monitor your inquiries, save
          preferred listings and make informed decisions all in one place, built
          for convenience and clarity.
        </p>
      </div>
    </div>
  );
};

export default HomeCard3;
