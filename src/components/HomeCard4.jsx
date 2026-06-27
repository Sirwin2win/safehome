import React from "react";
import notification from "../assets/vectors/notification.png";

const HomeCard4 = () => {
  return (
    <div className="flex justify-center bg-[#F4A97780] mx-5 md:mx-20 md:justify-evenly mt-10 rounded-md md:h-120">
      <div className="mt-0 h-58 w-60 md:w-150 md:ms-5 md:pe-20">
        <p className="text-sm md:text-3xl font-bold mb-5 md:text-right md:my-10 px-2">
          Smart Alerts & Instant Updates
        </p>
        <p className="px-2 text-xs md:text-xl md:text-right">
          Never miss an opportunity. Get real-time alerts on new listings, price
          changes and important updates keeping you ahead and ready to act when
          the right property becomes available.
        </p>
      </div>

      {/* <img src={notification} alt="payment card" className='w-40 md:w-150 bg-[#F4A977] md:ms-25' /> */}
      {/* <img src={notification} alt="payment card" className='h-100 w-100 bg-[#F4A977]' /> */}
      <div className="h-40 w-40  bg-[#F4A977] md:w-150 md:h-90">
        <img
          src={notification}
          alt="payment card"
          className="pt-5 md:pt-20 md:ms-30 md:-mt-5 md:size-105"
        />
        <div className="h-28 w-20 bg-[#F4A977] md:h-30 md:w-70 -mt-10 ms-15 md:ms-76"></div>
      </div>
    </div>
  );
};

export default HomeCard4;
