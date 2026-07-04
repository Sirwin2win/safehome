import React from "react";
import logo from "../assets/images/safehome-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-[#F1F1F1CC] px-4 sm:px-6 lg:px-10 pt-10 overflow-hidden">
      {/* Logo + Tagline */}
      <div className="flex flex-col items-center text-center">
        <img src={logo} alt="Logo" className="w-12 sm:w-16 md:w-20 mb-4" />

        <p className="text-sm sm:text-base text-gray-700">
          Coastal living & timeless comfort in Abuja
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {/* Phone / Email */}
        <div className="text-center md:text-left">
          <p className="font-bold mb-2">Phone</p>
          <p className="text-gray-700 mb-4">+234 704 100 5315</p>

          <p className="font-bold mb-2">Email</p>
          <p className="text-gray-700 break-all">
            sales@safehomeproperties.com
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <p className="font-bold mb-2">Quick Links</p>

          <div className="text-gray-700 space-y-1">
            <Link to="/">Home</Link>
            <span className="hidden md:inline"> | </span>

            <Link to="/about">About Us</Link>
            <span className="hidden md:inline"> | </span>

            <Link to="/listings">Listings</Link>
            <span className="hidden md:inline"> | </span>

            <Link to="#">FAQ</Link>
            <span className="hidden md:inline"> | </span>

            <Link to="/contact">Contact Us</Link>
          </div>

          <p className="font-bold mt-6 mb-2">Address</p>
          <p className="text-gray-700">
            Plot 12/14 Korstin Muller Complex
            <br />
            Industrial Layout, Idu Abuja
          </p>
        </div>

        {/* Newsletter */}
        <div className="text-center md:text-left">
          <p className="font-bold mb-2">Stay Posted</p>

          <p className="text-gray-700 text-sm sm:text-base">
            Sign up to receive the newsletter to your inbox
          </p>

          <form className="mt-6 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-400 px-3 py-2 outline-none focus:ring-2 focus:ring-[#223B7E]"
            />

            <button
              type="submit"
              className="bg-[#223B7EC9] text-white px-5 py-2 rounded-lg hover:bg-[#223B7E] transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-10 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee text-3xl sm:text-4xl md:text-6xl text-gray-200 font-bold">
          Safehome Properties • Safehome Properties • Safehome Properties •
        </div>
      </div>

      {/* Marquee animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }

          .animate-marquee {
            display: inline-block;
            animation: marquee 12s linear infinite;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
