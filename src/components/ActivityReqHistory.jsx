import React from "react";

const ActivityReqHistory = ({ myMaintenance }) => {
  return (
    <div className="rounded-lg">
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                REQUEST ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                DATE
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                CATEGORY
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                STATUS
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {myMaintenance?.map((maint) => (
              <tr key={maint.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-700">{maint.id}</td>

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

                <td className="px-6 py-4">
                  <span className="inline-block rounded-full bg-[#FFE1CC] px-5 py-2 text-sm text-[#FF6700]">
                    {maint.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="space-y-4 md:hidden">
        {myMaintenance?.map((maint) => (
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

export default ActivityReqHistory;
