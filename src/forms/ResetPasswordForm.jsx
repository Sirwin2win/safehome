import React, { useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import logo from "../assets/images/logo.jpg";
import { resetPassword } from "../features/mail/mailSlice";
import { clearAuthAfterPasswordReset } from "../features/auth/authSlice";

const ResetPasswordForm = () => {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get token from:
  // /reset-password?token=xxxxxxxx
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const [localError, setLocalError] = useState("");

  // IMPORTANT:
  // resetPassword belongs to mailSlice
  const { resetPasswordStatus, error } = useSelector((state) => state.mails);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setLocalError("");

    // Make sure token exists
    if (!token) {
      setLocalError("This password reset link is invalid or incomplete.");
      return;
    }

    // Password validation
    if (password.length < 8) {
      setLocalError("Password must be at least 8 characters long.");
      return;
    }

    // Confirm password
    if (password !== confirmPassword) {
      setLocalError("Passwords do not match.");
      return;
    }
    try {
      await dispatch(
        resetPassword({
          token,
          password,
        }),
      ).unwrap();

      // Clear the old/stale authentication session.
      // This does NOT affect your normal logout functionality.
      dispatch(clearAuthAfterPasswordReset());

      setMessage(
        "Your password has been reset successfully. Please log in with your new password.",
      );

      setPassword("");
      setConfirmPassword("");

      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 2000);
    } catch (error) {
      console.error("Reset password error:", error);
      setLocalError(
        typeof error === "string"
          ? error
          : error?.message ||
              "Unable to reset your password. The link may have expired.",
      );
    }
  };
  const displayError = localError || error;
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

            <h2 className="text-2xl font-bold text-gray-900">Reset Password</h2>

            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Enter your new password below.
            </p>
          </div>

          {/* Success message */}
          {message && (
            <div className="mb-4 rounded-lg bg-green-50 p-4 text-sm text-green-700">
              {message}
            </div>
          )}

          {/* Error message */}
          {displayError && !message && (
            <div className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-700">
              {displayError}
            </div>
          )}

          {/* Invalid token */}
          {!token && (
            <div className="mb-6 rounded-lg bg-red-50 p-4 text-sm text-red-700">
              This password reset link is invalid or incomplete.
            </div>
          )}

          {/* Form */}
          {token && !message && (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* New Password */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="password"
                >
                  New Password
                </label>

                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your new password"
                  autoComplete="new-password"
                  required
                  minLength={8}
                  className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>

                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your new password"
                  autoComplete="new-password"
                  required
                  minLength={8}
                  className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                />
              </div>

              {/* Password requirements */}
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-xs sm:text-sm text-gray-600">
                  Your password should be at least 8 characters long.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={resetPasswordStatus === "loading"}
                className="w-full flex justify-center py-2 px-4 sm:py-3 border border-transparent rounded-lg shadow-sm text-sm sm:text-base font-medium text-white bg-[#223B7E] hover:bg-[#1b3068] disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {resetPasswordStatus === "loading"
                  ? "Resetting Password..."
                  : "Reset Password"}
              </button>
            </form>
          )}

          {/* Back to login */}
          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
