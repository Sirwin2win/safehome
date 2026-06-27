import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { login } from "../features/auth/authSlice";
import bot from "../assets/vectors/safe_home_properties_loginBot.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiWalletBold } from "react-icons/pi";
import { BsTools } from "react-icons/bs";
import { GiFamilyHouse } from "react-icons/gi";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const auth = useSelector((state) => state.auth);
  const { user, status } = auth;

  const from = location.state?.from?.pathname || "/dashboard";

  useEffect(() => {
    if (status === "succeeded") {
      navigate(from, { replace: true });
    }
  }, [status, navigate, from]);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  console.log(user);

  const handleChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-6">
        {/* ================= LEFT SIDE ================= */}
        <div className="w-full lg:w-1/2 bg-white shadow-lg border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-10">
          <img
            src={bot}
            alt="Safe Home Bot"
            className="w-28 h-28 sm:w-36 sm:h-36 mx-auto"
          />

          <h2 className="text-center text-2xl sm:text-3xl font-semibold text-gray-700 mt-6">
            Login to SafeHome
          </h2>

          <form onSubmit={handleSubmit} className="mt-8">
            {auth.error && (
              <p className="text-red-500 text-sm mb-4">{auth.error}</p>
            )}

            <div className="mb-5">
              <input
                type="email"
                name="email"
                placeholder="example@name.com"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#223B7E]"
              />
            </div>

            <div className="mb-5">
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#223B7E]"
              />
            </div>

            <div className="flex justify-end mb-6">
              <Link to="#" className="text-sm text-blue-600 hover:underline">
                Forgot your password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={auth.status === "loading"}
              className="w-full bg-[#223B7EC9] hover:bg-[#1c3169] transition duration-300 text-white rounded-lg py-3 flex items-center justify-center gap-3 disabled:opacity-70"
            >
              <span>
                {auth.status === "loading"
                  ? "Logging you in..."
                  : "Continue with Email"}
              </span>

              <FaArrowRightLong />
            </button>

            <div className="mt-6 flex justify-center gap-2 text-sm">
              <span>Don't have an account?</span>

              <Link
                to="/signup"
                className="text-blue-600 hover:underline font-medium"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="w-full lg:w-1/2 bg-[#223B7EC9] rounded-2xl p-8 lg:p-10 text-white">
          <h2 className="text-center text-2xl lg:text-4xl font-semibold mb-12">
            Let’s help you with
            <span className="block mt-2">smarter living.</span>
          </h2>

          {/* Feature 1 */}
          <div className="flex items-start gap-5 mb-10">
            <PiWalletBold className="w-14 h-14 sm:w-16 sm:h-16 p-3 rounded-full bg-gray-200 text-[#223B7EC9] flex-shrink-0 shadow-md" />

            <div>
              <h3 className="text-lg font-semibold mb-2">Make Payments</h3>

              <p className="text-gray-100 text-sm sm:text-base leading-relaxed">
                Pay online, track payment status, and view your payment history
                with ease.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-5 mb-10">
            <BsTools className="w-14 h-14 sm:w-16 sm:h-16 p-3 rounded-full bg-gray-200 text-[#223B7EC9] flex-shrink-0 shadow-md" />

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Maintenance Requests
              </h3>

              <p className="text-gray-100 text-sm sm:text-base leading-relaxed">
                Submit and manage maintenance requests directly online without
                the hassle of phone calls.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-5">
            <GiFamilyHouse className="w-14 h-14 sm:w-16 sm:h-16 p-3 rounded-full bg-gray-200 text-[#223B7EC9] flex-shrink-0 shadow-md" />

            <div>
              <h3 className="text-lg font-semibold mb-2">Renter Essentials</h3>

              <p className="text-gray-100 text-sm sm:text-base leading-relaxed">
                Easily set up and manage your utilities, services, and important
                rental documents from one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
