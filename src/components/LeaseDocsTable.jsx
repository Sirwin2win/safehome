import React, { useEffect, useState } from "react";
import { fetchLeases } from "../features/lease/leaseSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LeaseDocsTable = () => {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { leases, leStatus, error } = useSelector((state) => state.leases);

  useEffect(() => {
    if (leStatus === "idle") {
      dispacth(fetchLeases());
    }
  }, [leStatus, dispacth]);
  console.log(leases);
  return (
    <div className="rounded-lg mt-10">
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead className="bg-[#9B9B9BCC] rounded-lg">
          <tr className="rounded-lg">
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              <input type="checkbox" />
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              DOCUMENT NAME
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              PROPERTY ADDRESS
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              STATUS
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              DATE UPLOADED
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              ACTION
            </th>
          </tr>
        </thead>
        <tbody className="divide-y bg-[#F5F5F5] divide-gray-200">
          {leases?.map((lease) => (
            <tr className="hover:bg-gray-50">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                <input type="checkbox" />
              </th>
              <td className="px-6 py-4 text-sm text-gray-700">
                Lease Agreement 2024
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                123 Wuse II, Apt 3B
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                <button className="bg-[#C8FFED] py-2 px-5 rounded-full text-[#00A725]">
                  Signed
                </button>
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">Oct 18, 2025</td>
              <td className="px-6 py-4 text-sm text-blue-700">
                <a href="#">View Details</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaseDocsTable;
