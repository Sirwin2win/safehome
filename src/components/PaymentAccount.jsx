import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

const PaymentAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // const fullName = `${user.firstName} ${user.lastName}`;
    const categoryData = {
      name: name,
    };

    // dispatch(addCategory(categoryData));
    navigate("/dashboard");
    setFormData({
      name: "",
    });
  };
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold text-center">
        Kindly fill up your account details where rent should be paid to
      </h1>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          {/* Header */}
          <div className="text-center mb-8">
            <img src={logo} alt="" className="my-5 mx-auto size-20" />
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Please Create a category for the products
            </p>
          </div>
          {/* Form  */}
          <form className="space-y-6">
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
                onChange={onChange}
                name="account_number"
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                required
              />
            </div>

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
                onChange={onChange}
                name="bank_name"
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                required
              />
            </div>
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
                onChange={onChange}
                name="account_name"
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              // disabled={categories.status === "loading"}
              className="w-full flex justify-center py-2 px-4 sm:py-3 border border-transparent rounded-lg shadow-sm text-sm sm:text-base font-medium text-white bg-[#223B7E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
