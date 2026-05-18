import React from "react";
import regImg from "../assets/images/safe_home_properties_register.png";
import logo from "../assets/images/safehome_logo.png";
import { MdOutlineRealEstateAgent } from "react-icons/md";

const SignUp = () => {
  return (
    <div className="flex justify-evenly">
      {/* Left hand sise with an image */}
      <div className="relative w-150 h-300 overflow-hidden -mt-35 rounded-lg">
        <img src={regImg} alt="" className="rounded-lg h-400 w-150 mt-50" />
        <div className="flex absolute bottom-220 ms-10">
          <img src={logo} alt="" className="size-10" />
          <p className="text-2xl font-bold ms-2 text-white">SafeHomes</p>
        </div>
        <div>
          <p className="absolute bottom-130 text-4xl font-bold text-white px-25">
            Secure Your Abuja Legacy.
          </p>
          <p className="absolute bottom-107 px-25 text-white">
            Experience Abuja's most trusted enterprise portal designed for real
            estate professionals who demand security and precision.
          </p>
        </div>
      </div>
      {/* Right hand side with a form */}
      <div className="shadow-xl p-6 w-130 bg-white mt-15 -ms-80 z-20 rounded-r-lg">
        <form>
          <p className="text-2xl font-bold w-full mt-10">Join SafeHomes</p>
          <p className="pt-2 text-gray-600">
            Select your role to get started in our Abuja ecosystem.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <label htmlFor="landlord" className="">
              <input type="radio" className="h-18 text-2xl peer hidden" />
              <div className="shadow-xl bg-white p-5 w-55 rounded-lg">
                <MdOutlineRealEstateAgent className="size-5" />
                <p className="text-lg font-bold">Landlord</p>
                <p>Manage multiple premium Abuja assets.</p>
              </div>
            </label>
            <label htmlFor="landlord" className="">
              <input type="radio" className="h-18 text-2xl peer hidden" />
              <div className="shadow-xl bg-white p-5 w-55 rounded-lg">
                <MdOutlineRealEstateAgent className="size-5" />
                <p className="text-lg font-bold">Tenant</p>
                <p>Elevated living and Abuja concierge services.</p>
              </div>
            </label>
            <label htmlFor="landlord" className="">
              <input type="radio" className="h-18 text-2xl peer hidden" />
              <div className="shadow-xl bg-white p-5 w-55 rounded-lg">
                <MdOutlineRealEstateAgent className="size-5" />
                <p className="text-lg font-bold">Homeowner</p>
                <p>Full control of your personal residence.</p>
              </div>
            </label>
            <label htmlFor="landlord" className="">
              <input type="radio" className="h-18 text-2xl peer hidden" />
              <div className="shadow-xl bg-white p-5 w-55 rounded-lg">
                <MdOutlineRealEstateAgent className="size-5" />
                <p className="text-lg font-bold">Estate Manager</p>
                <p>Professional Abuja property operations.</p>
              </div>
            </label>
          </div>
          <div class="flex items-center gap-4 mt-5">
            <hr class="flex-grow border-t border-gray-300" />

            <p class="text-gray-500 whitespace-nowrap">Account Details</p>

            <hr class="flex-grow border-t border-gray-300" />
          </div>
          {/* Full Name & Phone Number flex */}
          <div className="flex justify-evenly">
            <div>
              <label htmlFor="name" className="font-[600]">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="bg-gray-100 h-10 rounded-lg border border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="phone" className="font-[600]">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="bg-gray-100 h-10 rounded-lg border border-gray-300"
              />
            </div>
          </div>
          {/* Full Name & Phone Number flex  ended*/}
          <div className="my-5">
            <label htmlFor="email" className="font-[600]">
              Email Address
            </label>
            <input
              type="text"
              className="bg-gray-100 h-10 rounded-lg border border-gray-300 w-full"
            />
          </div>
          <div className="">
            <label htmlFor="password" className="font-[600]">
              Password
            </label>
            <input
              type="text"
              className="bg-gray-100 h-10 rounded-lg border border-gray-300 w-full"
            />
            <p className="text-gray-500">
              Minimum 8 characters including one special symbol
            </p>
          </div>
          <div className="flex justify-evenly">
            <input type="checkbox" />
            <p>I agree to the Terms of Service and Privacy Policy.</p>
          </div>

          <button>
            <span></span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
