import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../features/auth/authSlice";
import regImg from "../assets/images/safe_home_properties_register.png";
import logo from "../assets/images/safehome_logo.png";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { FaRegEyeSlash, FaRegEye, FaArrowRight } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { RiMapPinUserLine } from "react-icons/ri";
import { TbUserStar } from "react-icons/tb";

const SignUp = () => {
  const dispatch = useDispatch();
  const nagivate = useNavigate();
  const { status, error } = useSelector((state) => state.auth);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(register(form));
    // console.log(form);
  };

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (status === "succeeded") {
      setForm({
        name: "",
        phone: "",
        email: "",
        password: "",
        role: "",
      });
      nagivate("/login");
    }
  }, [status]);
  return (
    <div className="md:flex justify-evenly">
      {/* Left hand sise with an image */}
      <div className="relative w-150 h-300 overflow-hidden -mt-35 rounded-lg hidden md:block">
        <img src={regImg} alt="" className="rounded-lg h-400 w-150 mt-50" />
        <div className="flex absolute bottom-220 ms-10">
          <img src={logo} alt="" className="size-10" />
          <p className="text-2xl font-bold ms-2 text-white">SafeHome</p>
        </div>
        <div>
          <p className="absolute bottom-130 text-4xl font-bold text-white px-25">
            Secure Your Abuja Legacy.
          </p>
          <p className="absolute bottom-107 px-25 text-white">
            Experience Abuja's most trusted enterprise portal designed for real
            estate professionals who demand security and precision.
          </p>
        </div>
      </div>
      {/* Right hand side with a form */}
      <div className="shadow-xl p-6 md:w-130 bg-white mt-15 md:-ms-80 z-20 rounded-r-lg">
        <form onSubmit={handleSubmit}>
          <p className="text-2xl font-bold w-full mt-10">Join SafeHome</p>
          <p className="pt-2 text-gray-600">
            Select your role to get started in our Abuja ecosystem.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {/* Landlord */}
            <label htmlFor="landlord" className="cursor-pointer">
              <input
                id="landlord"
                type="radio"
                name="role"
                value="landlord"
                checked={form.role === "landlord"}
                onChange={handleChange}
                className="peer hidden"
              />

              <div className="shadow-xl bg-white p-5 h-30 md:w-55 rounded-lg border-2 border-transparent peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:ring-blue-300 transition-all">
                <MdOutlineRealEstateAgent className="size-5" />

                <p className="md:text-md font-bold">Landlord</p>

                <p className="hidden md:block text-xs">
                  Manage multiple premium Abuja assets.
                </p>
              </div>
            </label>

            {/* Tenant */}
            <label htmlFor="tenant" className="cursor-pointer">
              <input
                id="tenant"
                type="radio"
                name="role"
                value="tenant"
                checked={form.role === "tenant"}
                onChange={handleChange}
                className="peer hidden"
              />

              <div className="shadow-xl bg-white p-5 h-30 md:w-55 rounded-lg border-2 border-transparent peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:ring-blue-300 transition-all">
                <RiMapPinUserLine className="size-5" />

                <p className="md:text-md font-bold">Tenant</p>

                <p className="hidden md:block text-xs">
                  Elevated living and Abuja concierge services.
                </p>
              </div>
            </label>

            {/* Homeowner */}
            <label htmlFor="homeowner" className="cursor-pointer">
              <input
                id="homeowner"
                type="radio"
                name="role"
                value="homeowner"
                checked={form.role === "homeowner"}
                onChange={handleChange}
                className="peer hidden"
              />

              <div className="shadow-xl bg-white p-5 h-30 md:w-55 rounded-lg border-2 border-transparent peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:ring-blue-300 transition-all">
                <GoHome className="size-5" />

                <p className="md:text-md font-bold">Homeowner</p>

                <p className="hidden md:block text-xs">
                  Full control of your personal residence.
                </p>
              </div>
            </label>

            {/* Estate Manager */}
            <label htmlFor="user" className="cursor-pointer">
              <input
                id="user"
                type="radio"
                name="role"
                value="user"
                checked={form.role === "user"}
                onChange={handleChange}
                className="peer hidden"
              />

              <div className="shadow-xl bg-white p-5 h-30 md:w-55 rounded-lg border-2 border-transparent peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:ring-blue-300 transition-all">
                <TbUserStar className="size-5" />

                <p className="md:text-md font-bold">Estate Manager</p>

                <p className="hidden md:block text-xs">
                  Professional Abuja property operations.
                </p>
              </div>
            </label>
          </div>
          <div class="flex items-center gap-4 mt-5">
            <hr class="flex-grow border-t border-gray-300" />

            <p class="text-gray-500 whitespace-nowrap">Account Details</p>

            <hr class="flex-grow border-t border-gray-300" />
          </div>
          {/* Full Name & Phone Number flex */}
          <div className="flex justify-evenly">
            <div>
              <label htmlFor="name" className="font-[600]">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                placeholder="John Doe"
                className="bg-gray-100 h-10 w-full rounded-lg border border-gray-300"
              />
            </div>
            <div className="ms-5">
              <label htmlFor="phone" className="font-[600]">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                onChange={handleChange}
                placeholder="+234 800 000 0000"
                className="bg-gray-100 h-10 w-full rounded-lg border border-gray-300"
              />
            </div>
          </div>
          {/* Full Name & Phone Number flex  ended*/}
          <div className="my-5">
            <label htmlFor="email" className="font-[600]">
              Email Address
            </label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              className="bg-gray-100 h-10 rounded-lg border border-gray-300 w-full"
              placeholder="email@example.com"
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="font-[600]">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={handleChange}
              className="bg-gray-100 h-10 rounded-lg border border-gray-300 w-full"
              placeholder="************"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                <FaRegEyeSlash size={18} className="mb-5 md:mb-0" />
              ) : (
                <FaRegEye size={18} className="mb-5 md:mb-0" />
              )}
            </button>
            <p className="text-gray-500">
              Minimum 8 characters including one special symbol
            </p>
          </div>
          <div className="flex justify-evenly my-5">
            <input type="checkbox" className="md:-ms-15" />
            <p className="md:-ms-10 ms-3">
              I agree to the{" "}
              <Link to={"#"} className="text-blue-500">
                Terms of Service and Privacy Policy.
              </Link>
            </p>
          </div>

          <button className="flex justify-center h-10 bg-[#FD761A] w-full rounded-lg my-10 py-2">
            <span className="text-white me-5 font-bold">
              {status === "loading"
                ? "creating your account..."
                : "Complete Registration"}
            </span>
            <FaArrowRight className="text-white mt-2" />
          </button>
          <p className="text-red-500 text-2xl font-bold text-center">
            {error && error}
          </p>
          <p className="my-5 text-center">
            Already have an account?{" "}
            <Link to={"/login"} className="text-blue-500">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
