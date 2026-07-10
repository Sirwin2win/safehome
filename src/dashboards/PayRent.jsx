import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchAccountByLandlordId } from "../features/paymentAccount/paymentAccountSlice";
import { fetchLeaseById } from "../features/lease/leaseSlice";

const PayRent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentLease, leStatus } = useSelector((state) => state.leases);
  const { myAccount, PAStatus } = useSelector((state) => state.paymentAccounts);

  useEffect(() => {
    if (leStatus === "idle") {
      dispatch(fetchLeaseById(id));
    }
  }, [leStatus, dispatch]);

  useEffect(() => {
    if (PAStatus === "idle") {
      dispatch(fetchAccountByLandlordId(id));
    }
  }, [PAStatus, dispatch]);
  console.log(myAccount);
  console.log(currentLease);
  return (
    <div>
      <p>Click the pay button to proceed</p>
      <button>
        <span>Pay</span>
        {currentLease?.map((lease) => (
          <span key={lease.id}>({lease.rent_amount})</span>
        ))}
      </button>
    </div>
  );
};

export default PayRent;
