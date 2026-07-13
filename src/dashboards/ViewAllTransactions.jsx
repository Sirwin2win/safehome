import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../features/transaction/transactionSlice";

const ViewAllTransactions = () => {
  const dispatch = useDispatch();
  const { transactions, TranStatus } = useSelector(
    (state) => state.transactions,
  );
  useEffect(() => {
    if (TranStatus === "succeeded") {
      dispatch(fetchTransactions());
    }
  }, [TranStatus, dispatch]);
  console.log(transactions);
  return (
    <div>
      <p className="text-center text-2xl font-semibold">
        View All Transactions
      </p>
    </div>
  );
};

export default ViewAllTransactions;
