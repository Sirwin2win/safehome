import React, { useEffect, useState } from "react";
import { fetchLeases } from "../features/lease/leaseSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LeaseSignForm from "../forms/LeaseSignForm";

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
    <div className="mt-10 w-full">
      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden w-full md:block">
        <div className="w-full overflow-x-auto rounded-lg">
          <table className="w-full border border-gray-200">
            <thead className="bg-[#9B9B9BCC]">
              <tr>
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

            <tbody className="divide-y divide-gray-200 bg-[#F5F5F5]">
              {leases?.map((lease) => (
                <tr key={lease.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input type="checkbox" />
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-700">
                    Lease Agreement
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-700">
                    {lease.property_address}
                  </td>

                  <td className="px-6 py-4">
                    <span className="inline-block rounded-full bg-[#C8FFED] px-5 py-2 text-sm text-[#00A725]">
                      {lease.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-700">
                    {new Date(lease.created_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </td>

                  <td className="px-6 py-4 text-sm text-blue-700">
                    {lease.status === "LEASE-READY" ||
                    lease.status === "LEASE-SIGNED" ? (
                      <Link to="lease-sign-form">Sign Here</Link>
                    ) : (
                      lease.status
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= MOBILE CARDS ================= */}
      <div className="space-y-4 md:hidden">
        {leases?.map((lease) => (
          <div
            key={lease.id}
            className="w-full rounded-lg border border-gray-200 bg-[#F5F5F5] p-4 shadow-sm"
          >
            {/* Top */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <input type="checkbox" />

                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Lease Agreement
                  </p>

                  <p className="mt-1 break-words text-xs text-gray-500">
                    {lease.property_address}
                  </p>
                </div>
              </div>

              {/* Status */}
              <span className="shrink-0 rounded-full bg-[#C8FFED] px-3 py-1 text-xs font-medium text-[#00A725]">
                {lease.status}
              </span>
            </div>

            {/* Divider */}
            <div className="my-4 border-t border-gray-200" />

            {/* Details */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-medium text-gray-500">
                  PROPERTY ADDRESS
                </p>

                <p className="mt-1 break-words text-sm text-gray-700">
                  {lease.property_address}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium text-gray-500">
                  DATE UPLOADED
                </p>

                <p className="mt-1 text-sm text-gray-700">
                  {new Date(lease.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>

            {/* Action */}
            <div className="mt-5">
              {lease.status === "LEASE-READY" ||
              lease.status === "LEASE-SIGNED" ? (
                <Link
                  to="lease-sign-form"
                  className="block w-full rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  Sign Here
                </Link>
              ) : (
                <p className="text-sm text-gray-500">{lease.status}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaseDocsTable;
