import React from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { BsLightningChargeFill } from "react-icons/bs";
import { TbReceipt } from "react-icons/tb";
import { HiMiniSignal } from "react-icons/hi2";

import card1 from "../assets/images/safe_home_properties_card1.png";
import card2 from "../assets/images/safe_home_properties_card2.png";

const UtilityVending = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* LEFT SIDE */}
        <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
          <div className="p-5 sm:p-6 lg:p-8">
            <h2 className="text-2xl font-bold">Smart Utility Vending</h2>

            <p className="mt-3 text-gray-600 leading-7 text-sm sm:text-base">
              Automate utility vending, purchase prepaid energy meters, access
              power purchase and consumption reports. Our platform works with
              any STS-compliant meter such as Conlog, Momas, Hexing and Miraton
              Rose.
            </p>
          </div>

          <div className="bg-[#9979C3] p-4 sm:p-6 space-y-6">
            {/* Card 1 */}
            <div className="bg-[#FED180] rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="w-full">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold">₦23,000,000</h3>

                  <IoEyeOffOutline className="text-xl" />
                </div>

                <p className="mt-2 text-sm text-gray-700">
                  Receivables Currently Past Due
                </p>
              </div>

              <img
                src={card1}
                alt=""
                className="w-28 sm:w-36 object-contain rotate-180"
              />
            </div>

            {/* Card 2 */}
            <div className="bg-[#FFFFD2] rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="w-full">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold">₦23,000,000</h3>

                  <IoEyeOffOutline className="text-xl" />
                </div>

                <p className="mt-2 text-sm text-gray-700">
                  Total Pending Receivables
                </p>
              </div>

              <img
                src={card2}
                alt=""
                className="w-28 sm:w-36 object-contain rotate-180"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
          <div className="p-5 sm:p-6 lg:p-8">
            <h2 className="text-2xl font-bold">
              Online Bill & Utility Payments
            </h2>

            <p className="mt-3 text-gray-600 leading-7 text-sm sm:text-base">
              Make billing, collections and payments effortless. Ensure timely
              payments with built-in revenue assurance. Simplify online utility
              transactions while giving residents the lowest possible
              convenience fees.
            </p>
          </div>

          <div className="bg-[#9979C3] p-4 sm:p-6 space-y-5">
            {/* Electricity */}
            <div className="bg-white rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <BsLightningChargeFill className="text-[#FF6700] bg-[#FF670066] p-4 rounded-xl text-6xl" />

                <div>
                  <h3 className="font-bold text-lg sm:text-xl">
                    Electricity Bills
                  </h3>

                  <p className="text-[#223B7E]">1000 Tokens</p>
                </div>
              </div>

              <div className="text-center sm:text-right">
                <p>IBDC</p>

                <button className="mt-3 bg-[#7EFD9B] rounded-full px-5 py-2 font-semibold">
                  Meter
                </button>
              </div>
            </div>

            {/* Community Bills */}
            <div className="bg-white rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <TbReceipt className="bg-[#223B7E66] p-4 rounded-xl text-6xl" />

                <div>
                  <h3 className="font-bold text-lg sm:text-xl">
                    Pay Community Bills
                  </h3>

                  <p className="text-[#223B7E]">₦40,000</p>
                </div>
              </div>

              <button className="bg-[#7EFD9B] rounded-full px-5 py-2 font-semibold">
                Water
              </button>
            </div>

            {/* Internet */}
            <div className="bg-white rounded-xl p-5 flex items-center gap-4">
              <HiMiniSignal className="bg-[#AAEBB980] p-4 rounded-xl text-6xl" />

              <h3 className="font-bold text-lg sm:text-xl">
                Internet Purchases
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtilityVending;
