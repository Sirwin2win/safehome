import React, { useEffect, useState } from "react";
import { fetchMyLeases } from "../features/lease/leaseSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const TenantLeaseTable = () => {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { myLease, leStatus, error } = useSelector((state) => state.leases);

  useEffect(() => {
    if (leStatus === "idle") {
      dispacth(fetchMyLeases());
    }
  }, [leStatus, dispacth]);
  console.log(myLease);
  return (
    <div className="rounded-lg mt-10">
      <p className="text-center my-10">Tenant Leases Table</p>
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
          {myLease?.map((lease) => (
            <tr className="hover:bg-gray-50">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                <input type="checkbox" />
              </th>
              <td className="px-6 py-4 text-sm text-gray-700">
                Lease Agreement
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {lease.property_address}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                <button className="bg-[#C8FFED] py-2 px-5 rounded-full text-[#00A725]">
                  {lease.status}
                </button>
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {new Date(lease.created_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </td>
              <td className="px-6 py-4 text-sm text-blue-700">
                <span href="#">
                  {lease.status === "LEASE-READY" ? (
                    <Link to={`/dashboard/lease-sign-form/${lease.id}`}>
                      Sign Here
                    </Link>
                  ) : lease.status === "LEASE-SIGNED" ? (
                    <div>
                      <Link
                        className="font-bold"
                        to={`/dashboard/download-lease/${lease.id}`}
                      >
                        Download
                      </Link>{" "}
                      |
                      <Link
                        className="font-bold text-red-500 ms-2"
                        to={`/dashboard/pay-rent/${lease.landlord_id}`}
                      >
                        Pay Rent
                      </Link>
                    </div>
                  ) : (
                    lease.status
                  )}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TenantLeaseTable;
