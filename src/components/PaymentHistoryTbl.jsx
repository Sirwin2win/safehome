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
    <div className="rounded-lg">
      <p className="text-center font-bold my-10">Service Charge History</p>
      <table className="min-w-full">
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

            <th className="px-6 py-4 text-left text-sm text-gray-500">DATE</th>
          </tr>
        </thead>

        <tbody>
          {myserviceCharges?.map((charge) => (
            <tr className="border-t hover:bg-gray-50" key={charge.id}>
              <td className="px-6 py-4">{charge.estate_name}</td>

              <td className="px-6 py-4">{charge.property_address}</td>

              <td className="px-6 py-4 font-semibold">{charge.amount}</td>

              <td className="px-6 py-4">
                <span className="bg-green-100 text-green-700 rounded-full px-3 py-1 text-xs font-semibold">
                  {charge.status}
                </span>
              </td>

              <td className="px-6 py-4">
                <button className="text-[#00236F] hover:text-blue-700">
                  {new Intl.DateTimeFormat("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }).format(new Date(charge.created_at))}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TenantTransactions />
    </div>
  );
};

export default PaymentHistoryTbl;
