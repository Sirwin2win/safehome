import React from "react";
import smart from "../assets/images/safe_home_properties_smart.jpg";
import woman from "../assets/images/safe_home_properties_woman.png";
import { Link } from "react-router-dom";

const HomeLastCard = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={smart}
        alt="Smart"
        className="w-full h-[320px] sm:h-[420px] md:h-[550px] object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="w-full max-w-5xl bg-black/50 backdrop-blur-sm border border-orange-500 rounded-xl p-5 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Text Section */}
          <div className="text-white text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-5xl font-semibold leading-tight">
              Start Living Smarter Today
            </h2>

            <p className="mt-3 text-sm sm:text-base text-gray-200">
              Unlock the potential of a seamless
              <span className="block">community management system!</span>
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center md:justify-start">
              <button className="bg-omaOrange px-5 py-2 rounded-xl font-medium hover:opacity-90 transition">
                <Link to="/get-started">Get Started</Link>
              </button>

              <button className="border border-white px-5 py-2 rounded-xl hover:bg-white hover:text-black transition">
                <Link to="/listings">See Property Listings</Link>
              </button>
            </div>
          </div>

          {/* Woman Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={woman}
              alt="woman"
              className="w-24 sm:w-32 md:w-56 lg:w-64 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLastCard;
