import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAccountByLandlordId } from "../features/paymentAccount/paymentAccountSlice";
import { fetchLeaseById } from "../features/lease/leaseSlice";
import { initialize } from "../features/transaction/transactionSlice";

const PayRent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { currentLease, leStatus } = useSelector((state) => state.leases);
  const { myAccount, PAStatus } = useSelector((state) => state.paymentAccounts);
  const { currentTransactions, TranStatus } = useSelector(
    (state) => state.transactions,
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchLeaseById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (currentLease?.landlord_id) {
      dispatch(fetchAccountByLandlordId(currentLease.landlord_id));
    }
  }, [dispatch, currentLease?.landlord_id]);

  const handleDispatch = async () => {
    if (!currentLease || !myAccount?.flutterwave_subaccount_id) {
      return;
    }

    try {
      const form = {
        lease_id: currentLease.id,
        tenant_id: currentLease.tenant_id,
        amount: currentLease.rent_amount,
        subaccount_id: myAccount.flutterwave_subaccount_id,
      };
      const result = await dispatch(initialize(form)).unwrap();

      // Redirect if your backend returns a payment link
      if (TranStatus === "succeeded") {
        window.location.href = currentTransactions.link;
      }
    } catch (error) {
      console.error("Failed to initialize payment:", error);
    }
  };

  if (leStatus === "loading" || PAStatus === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Click the pay button to proceed</p>

      <button
        onClick={handleDispatch}
        disabled={!currentLease || !myAccount?.flutterwave_subaccount_id}
        className="bg-[#223B7E] text-white rounded-lg p-3 mt-3 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span>Pay</span>
        <span className="ms-2">₦{currentLease?.rent_amount ?? 0}</span>
      </button>
    </div>
  );
};

export default PayRent;
