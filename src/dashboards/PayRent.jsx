import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchLeaseById } from "../features/lease/leaseSlice";
import { initialize } from "../features/transaction/transactionSlice";

const PayRent = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { currentLease, leStatus } = useSelector((state) => state.leases);

  useEffect(() => {
    if (id) {
      dispatch(fetchLeaseById(id));
    }
  }, [dispatch, id]);

  const handleDispatch = async () => {
    if (!currentLease) {
      return;
    }

    try {
      const form = {
        leaseId: currentLease.id,

        tenantId: currentLease.tenant_id,

        amount: currentLease.rent_amount,
      };

      const result = await dispatch(initialize(form)).unwrap();

      if (result?.payment_link) {
        window.location.href = result.payment_link;
      }
    } catch (error) {
      console.error("Failed to initialize payment:", error);
    }
  };

  if (leStatus === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Click the pay button to proceed</p>

      <button
        onClick={handleDispatch}
        disabled={!currentLease}
        className="
          bg-[#223B7E]
          text-white
          rounded-lg
          p-3
          mt-3
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
      >
        <span>Pay</span>

        <span className="ms-2">₦{currentLease?.rent_amount ?? 0}</span>
      </button>
    </div>
  );
};

export default PayRent;
