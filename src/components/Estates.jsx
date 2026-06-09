import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchEstates } from "../features/estate/estateSlice";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { FaRegEyeSlash, FaRegEye, FaArrowRight } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { RiMapPinUserLine } from "react-icons/ri";
import { TbUserStar } from "react-icons/tb";

const Estates = () => {
  const { estates, status, error } = useSelector((state) => state.estates);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const roles = ["homeowner", "landlord", "tenant", "estateManager"];

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchEstates());
    }
  }, [status, dispatch]);

  const [form, setForm] = useState({
    estate_id: "",
    role: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch(register(form));
    // console.log(form);
  };

  return (
    <div className="my-10 mx-10">
      <p className="text-lg font-bold text-[#1B2B3F] text-center my=10">
        Welcome!, select your estate of choice
      </p>
      <form className="grid grid-cols-3 gap-4 mt-5">
        {estates &&
          estates.map((estate) => (
            <div className="hover:shadow-lg bg-white border border-gray-300 p-5 rounded-lg">
              {/* Change this to radio with hidden attribute  */}
              <p className="text-center font-bold">{estate.name}</p>
              <p className="text-center">{estate.address}</p>
            </div>
          ))}
        <p>Select the option that best describes your motive</p>
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
      </form>
    </div>
  );
};

export default Estates;
