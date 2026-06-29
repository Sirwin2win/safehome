import React from "react";
import memebers from "../assets/images/safe_home_members.jpg";
import { MdOutlineHomeWork } from "react-icons/md";
import { TbBuildingCommunity } from "react-icons/tb";
import { PiUsers } from "react-icons/pi";

import HomeCard1 from "../components/HomeCard1";
import FeaturesCard from "../components/FeaturesCard";
import FAQ from "../components/FAQ";
import HomeLastCard from "../components/HomeLastCard";
import ContactCard from "../components/ContactCard";
import TestSlider from "../components/TestSlider";
// import UtilityVending from "../components/UtilityVending";
// import PropertyDashboard from "../components/PropertyDashboard";

const Services = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-10">
        <div className="flex justify-center px-4">
          <button className="bg-[#223B7E99] text-white rounded-full px-6 py-2 text-sm md:text-base">
            SafeHome Management
          </button>
        </div>

        <h1 className="text-center text-3xl md:text-5xl font-bold mt-6 mb-6 px-4">
          Seamless Living Experience
        </h1>

        <div className="max-w-4xl mx-auto text-center px-5 md:px-8">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            We provide end-to-end property management solutions tailored for
            discerning property owners who demand excellence:
          </p>

          <ul className="max-w-2xl mx-auto text-left text-gray-700 text-base md:text-lg leading-8 space-y-2">
            <li>• Strategic tenant sourcing and screening</li>
            <li>• Rent collection and financial accountability</li>
            <li>• Property maintenance and value preservation</li>
            <li>• Asset performance monitoring and reporting</li>
            <li>• Professional oversight with structured systems</li>
          </ul>

          <p className="text-gray-800 font-medium mt-6 text-base md:text-lg">
            Our goal is not just to manage but to optimize.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-14">
        <img
          src={memebers}
          alt="SafeHome Members"
          className="w-full rounded-2xl object-cover shadow-lg"
        />
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Cities */}
          <div className="flex items-center justify-center sm:justify-start bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <TbBuildingCommunity className="w-16 h-16 md:w-20 md:h-20 bg-[#223B7EC9] text-white rounded-full p-4" />

            <div className="ml-4">
              <h2 className="text-2xl md:text-3xl font-bold">14 Cities</h2>
              <p className="text-gray-600">Across Africa</p>
            </div>
          </div>

          {/* Property Units */}
          <div className="flex items-center justify-center sm:justify-start bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <MdOutlineHomeWork className="w-16 h-16 md:w-20 md:h-20 bg-[#223B7EC9] text-white rounded-full p-4" />

            <div className="ml-4">
              <h2 className="text-2xl md:text-3xl font-bold">20,000</h2>
              <p className="text-gray-600">Property Units</p>
            </div>
          </div>

          {/* Residents */}
          <div className="flex items-center justify-center sm:justify-start bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition sm:col-span-2 lg:col-span-1">
            <PiUsers className="w-16 h-16 md:w-20 md:h-20 bg-[#223B7EC9] text-white rounded-full p-4" />

            <div className="ml-4">
              <h2 className="text-2xl md:text-3xl font-bold">22,000</h2>
              <p className="text-gray-600">Residents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <section className="space-y-16 md:space-y-24">
        <HomeCard1 />

        <FeaturesCard />

        {/* Uncomment when needed */}
        {/* <UtilityVending /> */}

        {/* <PropertyDashboard /> */}

        <TestSlider />

        <FAQ />

        <HomeLastCard />

        <ContactCard />
      </section>
    </div>
  );
};

export default Services;
