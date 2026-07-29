import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEstate, updateEstate } from "../features/estate/estateSlice";
import { getUsers } from "../features/auth/authSlice";
import logo from "../assets/images/logo.jpg";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

const EditEstateForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { currentEstate, status, error } = useSelector(
    (state) => state.estates,
  );

  const { users } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    estate_manager: "",
  });

  // Fetch estate and users
  useEffect(() => {
    if (id) {
      dispatch(fetchEstate(id));
    }

    dispatch(getUsers());
  }, [dispatch, id]);

  // Populate form when estate is loaded
  useEffect(() => {
    if (currentEstate) {
      setFormData({
        name: currentEstate.name || "",
        address: currentEstate.address || "",
        estate_manager: currentEstate.estate_manager || "",
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

    dispatch(
      updateEstate({
        id,
        formData,
      }),
    );
  };

  const back = () => {
    navigate(-1);
  };

  return (
    <div>
      <button
        onClick={back}
        className="flex items-center bg-[#1B2B3F] text-white p-3 rounded-lg"
      >
        <IoMdArrowRoundBack className="size-6" />
        <span className="ml-2 font-bold">Back</span>
      </button>

      <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
            {/* Header */}
            <div className="text-center mb-8">
              <img
                src={logo}
                alt="Logo"
                className="my-5 mx-auto h-20 w-20 object-cover"
              />

              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Update estate information
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <p className="text-red-500 text-sm">{error.message || error}</p>
              )}

              {/* Estate Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Estate Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={onChange}
                  className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  required
                />
              </div>

              {/* Estate Manager */}
              <div>
                <label
                  htmlFor="estate_manager"
                  className="block text-sm font-medium text-gray-700"
                >
                  Estate Manager
                </label>

                <select
                  id="estate_manager"
                  name="estate_manager"
                  value={formData.estate_manager}
                  onChange={onChange}
                  className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                >
                  <option value="">Select Estate Manager</option>

                  {users &&
                    users.map((user) => (
                      <option key={user.id} value={user.id}>
                        {user.name} ({user.email})
                      </option>
                    ))}
                </select>
              </div>

              {/* Address */}
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Estate Address
                </label>

                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={onChange}
                  className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex justify-center py-3 px-4 rounded-lg text-white bg-[#223B7E] hover:bg-[#1b2f65] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Updating Estate..." : "Update Estate"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEstateForm;
