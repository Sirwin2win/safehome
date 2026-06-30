import React, { useEffect, useState } from "react";
import { fetchLandlordLeases } from "../features/lease/leaseSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ApproveTenant = () => {
  const { landlordLeases, leStatus, error } = useSelector(
    (state) => state.leases,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (leStatus === "idle") {
      dispatch(fetchLandlordLeases());
    }
  }, [leStatus, dispatch]);
  console.log(landlordLeases);
  return (
    <div>
      <p className="text-center font-semibold text-[#00236F] my-5">
        Dear Landlord, kindly engage the customer before giving your approval
      </p>
      {/* Table Started */}
      <div className="overflow-x-auto">
        <table className="min-w-[900px] w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-4 text-sm text-gray-500">LOCATION</th>

              <th className="text-left p-4 text-sm text-gray-500">NAME</th>
              <th className="text-left p-4 text-sm text-gray-500">EMAIL</th>
              <th className="text-left p-4 text-sm text-gray-500">PHONE</th>

              <th className="text-left p-4 text-sm text-gray-500">STATUS</th>

              <th className="text-left p-4 text-sm text-gray-500">ACTION</th>
            </tr>
          </thead>

          <tbody>
            {/* Row */}

            {landlordLeases?.map((lease) => (
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">{lease.property_address}</td>

                <td className="p-4">{lease.tenant_name}</td>
                <td className="p-4">{lease.tenant_email}</td>
                <td className="p-4">{lease.tenant_phone}</td>

                <td className="p-4">
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {lease.status}
                  </span>
                </td>

                <td className="p-4 font-semibold">0%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Table ended */}
    </div>
  );
};

export default ApproveTenant;
