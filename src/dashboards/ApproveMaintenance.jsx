import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteMaintenance,
  fetchMaintenances,
  updateMaintenance,
} from "../features/maintenance/maintenanceSlice";

const ApproveMaintenance = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { maintenance, mainStatus } = useSelector((state) => state.maintenance);

  useEffect(() => {
    if (mainStatus === "idle") {
      dispatch(fetchMaintenances());
    }
  }, [dispatch, mainStatus]);

  const handleUpdateStatus = (id, status) => {
    if (window.confirm(`Are you sure you want to ${status} this request?`)) {
      console.log(status);
      dispatch(updateMaintenance({ id, status }));
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this request?")) {
      dispatch(deleteMaintenance(id));
    }
  };

  // Back function
  const back = () => {
    navigate(-1);
  };
  console.log(maintenance);
  return (
    <div>
      {/* Back Buttom */}
      <button
        onClick={back}
        className="flex justify-between bg-[#1B2B3F] text-white p-3 rounded-lg"
      >
        {" "}
        <IoMdArrowRoundBack className="size-7" />{" "}
        <span className="ms-2 font-bold">Back</span>
      </button>
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto my-10">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              {/* <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                REQUEST ID
              </th> */}
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                DATE
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                CATEGORY
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                TENANT NAME
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                ESTATE NAME
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                HOUSE ADDRESS
              </th>
              {/* <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                STATUS
              </th> */}
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                STATUS
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                RESOLVE
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                IN PROGRESS
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                DELETE
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {maintenance?.map((maint) => (
              <tr key={maint.id} className="hover:bg-gray-50">
                {/* <td className="px-6 py-4 text-sm text-gray-700">{maint.id}</td> */}

                <td className="px-6 py-4 text-sm text-gray-700">
                  {new Date(maint.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </td>

                <td className="px-6 py-4 text-sm text-gray-700">
                  {maint.category}
                </td>

                <td className="px-6 py-4 text-sm text-gray-700">
                  {maint.name}
                </td>

                <td className="px-6 py-4 text-sm text-gray-700">
                  {maint.estate_name}
                </td>

                <td className="px-6 py-4 text-sm text-gray-700">
                  {maint.address}
                </td>

                {/* <td className="px-6 py-4">
                  <span className="inline-block rounded-full bg-[#FFE1CC] px-5 py-2 text-sm text-[#FF6700]">
                    {maint.status}
                  </span>
                </td> */}
                {/* Status Badge */}
                <td className="px-4 py-3 text-center">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      maint.status === "IN PROGRESS"
                        ? "bg-green-100 text-green-700"
                        : maint.status === "RESOLVED"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {maint.status || "Pending"}
                  </span>
                </td>

                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => handleUpdateStatus(maint.id, "RESOLVED")}
                    className="rounded-md bg-green-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-green-700"
                  >
                    Resolve
                  </button>
                </td>

                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => handleUpdateStatus(maint.id, "IN_PROGRESS")}
                    className="rounded-md bg-amber-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-amber-600"
                  >
                    In Progress
                  </button>
                </td>

                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => handleDelete(maint.id)}
                    className="rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="space-y-4 md:hidden my-5">
        {maintenance?.map((maint) => (
          <div
            key={maint.id}
            className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
          >
            <div className="flex justify-between">
              <span className="text-xs font-semibold text-gray-500">
                REQUEST ID
              </span>
              <span className="text-sm text-gray-800">{maint.id}</span>
            </div>

            <div className="mt-3 flex justify-between">
              <span className="text-xs font-semibold text-gray-500">DATE</span>
              <span className="text-sm text-gray-800">
                {new Date(maint.created_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>

            <div className="mt-3 flex justify-between">
              <span className="text-xs font-semibold text-gray-500">
                CATEGORY
              </span>
              <span className="text-sm text-gray-800">{maint.category}</span>
            </div>

            <div className="mt-3 flex justify-between">
              <span className="text-xs font-semibold text-gray-500">
                TENANT NAME
              </span>
              <span className="text-sm text-gray-800">{maint.name}</span>
            </div>

            <div className="mt-3 flex justify-between">
              <span className="text-xs font-semibold text-gray-500">
                ESTATE NAME
              </span>
              <span className="text-sm text-gray-800">{maint.estate_name}</span>
            </div>

            <div className="mt-3 flex justify-between">
              <span className="text-xs font-semibold text-gray-500">
                HOUSE ADDRESS
              </span>
              <span className="text-sm text-gray-800">{maint.address}</span>
            </div>

            <div className="mt-4">
              <span className="inline-block rounded-full bg-[#FFE1CC] px-5 py-2 text-sm text-[#FF6700]">
                {maint.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApproveMaintenance;
