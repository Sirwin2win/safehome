import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyTransactions } from "../features/transaction/transactionSlice";

const TenantTransactions = () => {
  const dispatch = useDispatch();
  const { myTransactions, TranStatus, error } = useSelector(
    (state) => state.transactions,
  );
  useEffect(() => {
    if (TranStatus === "idle") {
      dispatch(fetchMyTransactions());
    }
  }, [TranStatus, dispatch]);
  console.log(myTransactions);
  return (
    <div>
      <p className="text-center text-2xl font-semibold my-5">
        Tenant Rent Payments History
      </p>
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead className="bg-[#9B9B9BCC] rounded-lg">
          <tr className="rounded-lg">
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              <input type="checkbox" />
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              CUSTOMER EMAIL
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              LANDLORD EMAIL
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              PROPERTY ADDRESS
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              STATUS
            </th>
          </tr>
        </thead>
        <tbody className="divide-y bg-[#F5F5F5] divide-gray-200">
          {myTransactions?.map((transaction) => (
            <tr className="hover:bg-gray-50">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                <input type="checkbox" />
              </th>
              <td className="px-6 py-4 text-sm text-gray-700">
                {transaction.tenant_email}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {transaction.landlord_email}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {transaction.property_address}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {transaction.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TenantTransactions;
