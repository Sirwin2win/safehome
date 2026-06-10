import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEstates } from "../features/estate/estateSlice";

const Estates = () => {
  const { estates, status } = useSelector((state) => state.estates);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    estate_id: "",
    role: "",
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchEstates());
    }
  }, [status, dispatch]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.estate_id || !form.role) {
      alert("Please select an estate and a role");
      return;
    }

    console.log(form);

    // dispatch(register(form));
  };

  return (
    <div className="max-w-2xl mx-auto my-10 px-4">
      <p className="text-lg font-bold text-[#1B2B3F] text-center mb-6">
        Welcome! Select your estate of choice
      </p>

      <form onSubmit={handleSubmit}>
        <div className="space-y-2">
          {estates?.map((estate) => (
            <label
              key={estate.id}
              className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <input
                type="radio"
                name="estate_id"
                value={estate.id}
                checked={String(form.estate_id) === String(estate.id)}
                onChange={handleChange}
              />

              <span className="font-medium">{estate.name}</span>
            </label>
          ))}
        </div>

        <p className="text-lg font-bold text-[#1B2B3F] text-center my-8">
          Select the option that best describes your motive
        </p>

        <div className="space-y-2">
          <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="role"
              value="landlord"
              checked={form.role === "landlord"}
              onChange={handleChange}
            />
            <span>I have a property and want to rent it out</span>
          </label>

          <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="role"
              value="tenant"
              checked={form.role === "tenant"}
              onChange={handleChange}
            />
            <span>I want to rent a property</span>
          </label>

          <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="role"
              value="homeowner"
              checked={form.role === "homeowner"}
              onChange={handleChange}
            />
            <span>I already own a home and live in it</span>
          </label>

          <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="role"
              value="estateManager"
              checked={form.role === "estateManager"}
              onChange={handleChange}
            />
            <span>I want to manage properties</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-[#1B2B3F] text-white p-3 rounded-lg mt-6 hover:bg-[#24374f]"
        >
          Join Estate
        </button>
      </form>
    </div>
  );
};

export default Estates;
