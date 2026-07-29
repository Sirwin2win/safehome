import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  addEstate,
  deleteEstate,
  fetchEstates,
} from "../features/estate/estateSlice";
import { IoMdArrowRoundBack } from "react-icons/io";
import { div } from "framer-motion/client";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

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

    // setFormData({
    //   name: "",
    //   address: "",
    // });
  };
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchEstates());
    }
  }, [status, dispatch]);
  // Back function
  const back = () => {
    navigate(-1);
  };

  // console.log(estates);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this Estate?")) {
      dispatch(deleteEstate(id));
    }
  };

  return (
    <div>
      <button
        onClick={back}
        className="flex justify-between bg-[#1B2B3F] text-white p-3 rounded-lg"
      >
        {" "}
        <IoMdArrowRoundBack className="size-7" />{" "}
        <span className="ms-2 font-bold">Back</span>
      </button>
      <p className="text-center">
        Create estate using the form below. To Assign Managers, click the pencil
        icon on the table below
      </p>
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
              {error && <p className="text-red-500">{error.message}</p>}
              {status === "succeeded" && (
                <p className="text-green-500">Estate created successfully!</p>
              )}
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
                  {status === "loading"
                    ? "Creating Estate..."
                    : "Create Estate"}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
      {status === "loading" && "Loading Estates..."}
      {/* Estate Table */}
      <div className="overflow-x-auto">
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                  Id
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                  Estates
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {estates &&
                estates.map((estate) => (
                  <tr className="hover:bg-gray-50" key={estate.id}>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {estate.id}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {estate.name}
                    </td>
                    <td className="flex px-4 py-2 text-sm text-gray-700">
                      <Link
                        to={`/dashboard/edit-estate/${estate.id}`}
                        className="text-omaOrange me-2"
                      >
                        <FaEdit />
                      </Link>{" "}
                      |{" "}
                      <FaRegTrashAlt
                        className="text-red-500 ms-2"
                        onClick={() => handleDelete(estate.id)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreateEstateForm;
