import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const ContactCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center lg:text-left mb-8">
            Contact Us
          </h2>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <TfiEmail className="text-xl text-[#223B7E] mt-1" />

              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600 break-all">
                  sales@safehomeproperties.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MdOutlinePhone className="text-xl text-[#223B7E] mt-1" />

              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">+234 704 100 5315</p>
              </div>
            </div>
          </div>

          {/* Location & Business Hours */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start gap-3">
              <IoLocationOutline className="text-xl text-[#223B7E] mt-1" />

              <div>
                <p className="font-semibold">Location</p>

                <p className="text-gray-600">
                  Plot 12/14 Korstin Muller Complex
                  <br />
                  Industrial Layout, Idu, Abuja
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MdOutlinePhone className="text-xl text-[#223B7E] mt-1" />

              <div>
                <p className="font-semibold">Business Hours</p>

                <p className="text-gray-600">
                  Monday – Friday
                  <br />
                  9:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-gray-600 leading-7">
            We're here to help you navigate the real estate market. Reach out
            with any questions—we'd love to hear from you.
          </p>
        </div>

        {/* Right Side */}
        <div className="bg-[#F4F4F4] rounded-2xl shadow-sm p-6 sm:p-8">
          <h3 className="text-2xl font-bold mb-6">Let's Find Your Property</h3>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#223B7E]"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#223B7E]"
            />

            <textarea
              rows={6}
              placeholder="Message"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-[#223B7E]"
            />

            <button
              type="submit"
              className="w-full rounded-full bg-[#223B7EC9] py-3 text-white font-semibold hover:bg-[#223B7E] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
