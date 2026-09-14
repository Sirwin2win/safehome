import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/images/logo.jpg";
import { resetMail } from "../features/mail/mailSlice";

const ForgotPasswordForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { resetStatus, error } = useSelector((state) => state.mails);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    try {
      await dispatch(resetMail({ email: email.trim() })).unwrap();

      setMessage(
        "If an account with that email exists, a password reset link has been sent.",
      );

      setEmail("");
    } catch (error) {
      console.error("Forgot password error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          {/* Header */}
          <div className="text-center mb-8">
            <img
              src={logo}
              alt="Company Logo"
              className="my-5 mx-auto size-20"
            />

            <h2 className="text-2xl font-bold text-gray-900">
              Forgot Password?
            </h2>

            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Enter your registered email address to receive a password reset
              link.
            </p>
          </div>

          {/* Success message */}
          {message && (
            <div className="mb-4 rounded-lg bg-green-50 p-4 text-sm text-green-700">
              {message}
            </div>
          )}

          {/* Error message */}
          {error && (
            <div className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                autoComplete="email"
                required
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={resetStatus === "loading"}
              className="w-full flex justify-center py-2 px-4 sm:py-3 border border-transparent rounded-lg shadow-sm text-sm sm:text-base font-medium text-white bg-[#223B7E] hover:bg-[#1b3068] disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {resetStatus === "loading"
                ? "Sending Email..."
                : "Send Reset Link"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
