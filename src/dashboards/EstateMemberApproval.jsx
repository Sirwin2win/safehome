import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteEstateMember, fetchEstateMembers, updateEstateMember } from "../features/estateMember/estateMemberSlice";
import { IoMdArrowRoundBack } from "react-icons/io";


const EstateMemberApproval = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {estateMembers,emStatus,error} = useSelector(state=>state.estateMembers)

  useEffect(()=>{
    if(emStatus==='idle'){
      dispatch(fetchEstateMembers())
    }
  },[emStatus,dispatch])
  console.log(estateMembers)


   const handleUpdateStatus = (id, status) => {
  if (window.confirm(`Are you sure you want to ${status} this request?`)) {
    console.log(status)
    dispatch(updateEstateMember({ id, status }));
  }
};

   const handleDelete = (id) => {
      if (window.confirm('Are you sure you want to delete this request?')) {
        dispatch(deleteEstateMember(id));
      }
    };

    
  // Back function
  const back = () => {
    navigate(-1);
  };

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
      <p className="text-center font-bold my-10">
        Kindly engage the user to know the reason why they want to join this estate before you approve
        them
      </p>
      {/* Estate Members Table Started */}
      <div className="w-full overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
      <table className="min-w-full whitespace-nowrap">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Name
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Email
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Phone
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Estate
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Role
            </th>

            {/* New Status Column */}
            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
              Status
            </th>

            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
              Approve
            </th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
              Reject
            </th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
              Delete
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {estateMembers?.map((member) => (
            <tr key={member.id} className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-800">
                {member.user_name}
              </td>

              <td className="px-4 py-3 text-sm text-gray-800">
                {member.email}
              </td>

              <td className="px-4 py-3 text-sm text-gray-800">
                {member.phone}
              </td>

              <td className="px-4 py-3 text-sm text-gray-800">
                {member.estate_name}
              </td>

              <td className="px-4 py-3 text-sm text-gray-800 capitalize">
                {member.role}
              </td>

              {/* Status Badge */}
              <td className="px-4 py-3 text-center">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                    member.status === "APPROVED"
                      ? "bg-green-100 text-green-700"
                      : member.status === "REJECTED"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {member.status || "Pending"}
                </span>
              </td>

              <td className="px-4 py-3 text-center">
                <button
                  onClick={() => handleUpdateStatus(member.id, 'APPROVED')}
                  className="rounded-md bg-green-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-green-700"
                >
                  Approve
                </button>
              </td>

              <td className="px-4 py-3 text-center">
                <button
                  onClick={() => handleUpdateStatus(member.id, 'REJECTED')}
                  className="rounded-md bg-amber-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-amber-600"
                >
                  Reject
                </button>
              </td>

              <td className="px-4 py-3 text-center">
                <button
                  onClick={() => handleDelete(member.id)}
                  className="rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {estateMembers?.length === 0 && (
        <div className="p-6 text-center text-gray-500">
          No memberships found.
        </div>
      )}
    </div>
      {/* Estate Members Table Ended */}
    </div>
  );
};

export default EstateMemberApproval;
