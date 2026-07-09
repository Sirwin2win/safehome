import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import {
  addPaymentAccount,
  fetchBanks,
  verifyAccount,
} from "../features/paymentAccount/paymentAccountSlice";

const PaymentAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { fwBanks, BStatus, PAStatus, verify } = useSelector(
    (state) => state.paymentAccounts,
  );

  const [formData, setFormData] = useState({
    account_number: "",
    bank_name: "",
    bank_code: "",
    account_name: "",
  });

  const { account_number, bank_name, bank_code, account_name } = formData;

  const onChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => {
      const updatedState = { ...prevState, [name]: value };

      if (name === "bank_name" && fwBanks) {
        const selectedBank = fwBanks.find(
          (bank) => bank.name.toLowerCase() === value.toLowerCase(),
        );
        if (selectedBank) {
          updatedState.bank_code = selectedBank.code || selectedBank.id || "";
        }
      }

      return updatedState;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPaymentAccount(formData));
    navigate("/dashboard");
    setFormData({
      account_number: "",
      bank_name: "",
      bank_code: "",
      account_name: "",
    });
  };

  // 1. Initial Load: Fetch banks list
  useEffect(() => {
    dispatch(fetchBanks());
  }, [dispatch]);

  // 2. Automated Trigger: Passes bank_code and account_number to verifyAccount()
  useEffect(() => {
    // Verifies as soon as bank_code exists and account_number reaches standard 10 digits
    if (account_number.length === 10 && bank_code) {
      const form = { bank_code, account_number };
      dispatch(verifyAccount(form));
    }
  }, [account_number, bank_code, dispatch]);

  // 3. Autofill Account Name: Syncs state when Redux store receives the verification payload
  useEffect(() => {
    if (verify && verify.account_name) {
      setFormData((prevState) => ({
        ...prevState,
        account_name: verify.account_name,
      }));
    }
  }, [verify]);

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold text-center px-4">
        Kindly fill up your account details where rent should be paid to
      </h1>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          {/* Header */}
          <div className="text-center mb-8">
            <img src={logo} alt="Logo" className="my-5 mx-auto size-20" />
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Please enter your payout account credentials
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Account Number */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="account_number"
              >
                Account Number
              </label>
              <input
                type="text"
                id="account_number"
                value={account_number}
                onChange={onChange}
                name="account_number"
                maxLength={10}
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                required
              />
            </div>

            {/* Bank Name */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="bank_name"
              >
                Bank Name
              </label>
              <input
                type="text"
                id="bank_name"
                list="bank-suggestions"
                value={bank_name}
                onChange={onChange}
                name="bank_name"
                placeholder="Type to search bank..."
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                required
              />
              <datalist id="bank-suggestions">
                {fwBanks &&
                  fwBanks.map((bank, index) => (
                    <option key={bank.id || index} value={bank.name} />
                  ))}
              </datalist>
            </div>

            {/* Bank Code */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="bank_code"
              >
                Bank Code
              </label>
              <input
                type="text"
                id="bank_code"
                value={bank_code}
                onChange={onChange}
                name="bank_code"
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                required
              />
            </div>

            {/* Account Name */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="account_name"
              >
                Account Name
              </label>
              <input
                type="text"
                id="account_name"
                value={account_name}
                name="account_name"
                placeholder={
                  account_number.length === 10 && bank_code
                    ? "Verifying account details..."
                    : "Autofilled once bank and account number match"
                }
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 bg-gray-50 text-gray-500 rounded-lg cursor-not-allowed focus:outline-none"
                readOnly
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!account_name}
              className={`w-full flex justify-center py-2 px-4 sm:py-3 border border-transparent rounded-lg shadow-sm text-sm sm:text-base font-medium text-white transition-colors ${
                account_name
                  ? "bg-[#223B7E] hover:bg-[#1a2e63]"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              <span>Create Account</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentAccount;
