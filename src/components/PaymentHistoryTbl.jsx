import React, { useEffect, useState } from "react";
import TenantTransactions from "./TenantTransactions";
import { fetchMyServiceCharges } from "../features/serviceCharge/serviceChargeSlice";
import { useDispatch, useSelector } from "react-redux";

const PaymentHistoryTbl = () => {
  const dispatch = useDispatch();
  const { myserviceCharges, SCStatus } = useSelector(
    (state) => state.serviceCharges,
  );
  useEffect(() => {
    dispatch(fetchMyServiceCharges());
  }, [dispatch]);
  console.log(myserviceCharges);
  return (
    <div className="w-full max-w-full rounded-lg">
      <p className="my-6 text-center text-xl font-bold sm:my-10 sm:text-2xl">
        Service Charge History
      </p>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm text-gray-500">
                ESTATE NAME
              </th>
              <th className="px-6 py-4 text-left text-sm text-gray-500">
                ADDRESS
              </th>
              <th className="px-6 py-4 text-left text-sm text-gray-500">
                AMOUNT
              </th>
              <th className="px-6 py-4 text-left text-sm text-gray-500">
                STATUS
              </th>
              <th className="px-6 py-4 text-left text-sm text-gray-500">
                DATE
              </th>
            </tr>
          </thead>

          <tbody>
            {myserviceCharges?.map((charge) => (
              <tr key={charge.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4">{charge.estate_name}</td>

                <td className="px-6 py-4">{charge.property_address}</td>

                <td className="px-6 py-4 font-semibold">{charge.amount}</td>

                <td className="px-6 py-4">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    {charge.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  {new Intl.DateTimeFormat("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }).format(new Date(charge.created_at))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE GRID ================= */}
      <div className="grid w-full max-w-full grid-cols-1 gap-4 md:hidden">
        {myserviceCharges?.map((charge) => (
          <div
            key={charge.id}
            className="grid w-full max-w-full grid-cols-2 gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
          >
            {/* ESTATE */}
            <div className="min-w-0">
              <p className="text-[11px] font-medium uppercase text-gray-400">
                Estate Name
              </p>

              <p className="mt-1 break-words text-sm font-semibold text-gray-800">
                {charge.estate_name}
              </p>
            </div>

            {/* STATUS */}
            <div className="min-w-0 text-right">
              <p className="text-[11px] font-medium uppercase text-gray-400">
                Status
              </p>

              <span className="mt-1 inline-block max-w-full rounded-full bg-green-100 px-3 py-1 text-[11px] font-semibold text-green-700">
                {charge.status}
              </span>
            </div>

            {/* ADDRESS */}
            <div className="col-span-2 min-w-0 border-t border-gray-100 pt-3">
              <p className="text-[11px] font-medium uppercase text-gray-400">
                Address
              </p>

              <p className="mt-1 break-words text-sm leading-5 text-gray-700">
                {charge.property_address}
              </p>
            </div>

            {/* AMOUNT */}
            <div className="min-w-0">
              <p className="text-[11px] font-medium uppercase text-gray-400">
                Amount
              </p>

              <p className="mt-1 break-words text-sm font-semibold text-gray-800">
                {charge.amount}
              </p>
            </div>

            {/* DATE */}
            <div className="min-w-0 text-right">
              <p className="text-[11px] font-medium uppercase text-gray-400">
                Date
              </p>

              <p className="mt-1 break-words text-sm text-[#00236F]">
                {new Intl.DateTimeFormat("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                }).format(new Date(charge.created_at))}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= TRANSACTIONS ================= */}
      <div className="mt-6 w-full max-w-full">
        <TenantTransactions />
      </div>
    </div>
  );
};

export default PaymentHistoryTbl;
