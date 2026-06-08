import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addEstate } from "../features/estate/estateSlice";

const CreateEstateForm = () => {
  const { estates, status, error } = useSelector((state) => state.estates);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
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

    dispatch(addEstate(formData));
    if (status === "succeeded") {
      navigate("/dashboard");
    }
    setFormData({
      name: "",
      address: "",
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          {/* Header */}
          <div className="text-center mb-8">
            <img src={logo} alt="" className="my-5 mx-auto size-20" />
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Fill up the form to create an estate
            </p>
          </div>
          {/* Form  */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="estate"
              >
                Estate Name
              </label>
              <input
                type="text"
                id="estate"
                onChange={onChange}
                name="name"
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="address"
              >
                Estate Address
              </label>
              <input
                type="text"
                id="address"
                onChange={onChange}
                name="address"
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                required
              />
            </div>
            <button
              disabled={status === "loading"}
              className="w-full flex justify-center py-2 px-4 sm:py-3 border border-transparent rounded-lg shadow-sm text-sm sm:text-base font-medium text-white bg-[#223B7E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span>
                {" "}
                {status === "loading" ? "Creating Estate..." : "Create Estate"}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEstateForm;
