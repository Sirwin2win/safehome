import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEstate, updateEstate } from "../features/estate/estateSlice";
import logo from "../assets/images/logo.jpg";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

const EditEstateForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { estates, currentEstate, status, error } = useSelector(
    (state) => state.estates,
  );
  const { id } = useParams();
  //   console.log(id);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
  });

  // Dispatching fetch request
  useEffect(() => {
    if (id) {
      dispatch(fetchEstate(id));
      // setRes(currentProduct)
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (currentEstate) {
      setFormData({
        name: currentEstate.name || "",
        address: currentEstate.address || "",
      });
    }
  }, [currentEstate]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    dispatch(updateEstate({ id: id, formData }));
  };

  // Back function
  const back = () => {
    navigate(-1);
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
                  value={formData.name}
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
                  value={formData.address}
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
    </div>
  );
};

export default EditEstateForm;
