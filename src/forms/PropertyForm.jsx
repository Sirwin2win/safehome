import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/images/logo.jpg";
import { IoCloudUploadOutline } from "react-icons/io5";
import { getUsers } from "../features/auth/authSlice";
import { addProperty } from "../features/properties/propertySlice";

const PropertyForm = () => {
  const dispatch = useDispatch();

  const { users, status } = useSelector((state) => state.auth);
  const { propStatus, propError } = useSelector((state) => state.properties);

  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);

  const [selectedUserId, setSelectedUserId] = useState("");
  const [selectedEstateId, setSelectedEstateId] = useState("");

  const [data, setData] = useState({
    type: "",
    size: "",
    description: "",
    address: "",
    rent_amount: "",
    service_charge: 5000,
    bedrooms: "",
    bathrooms: "",
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(getUsers());
    }
  }, [dispatch, status]);

  const selectedUser = useMemo(() => {
    return users.find((user) => user.id === Number(selectedUserId));
  }, [users, selectedUserId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedUserId) {
      alert("Please select a property owner");
      return;
    }

    if (!selectedEstateId) {
      alert("Please select an estate");
      return;
    }

    const formData = new FormData();

    formData.append("owner_id", selectedUserId);
    formData.append("estate_id", selectedEstateId);

    formData.append("type", data.type);
    formData.append("size", data.size);
    formData.append("description", data.description);
    formData.append("address", data.address);
    formData.append("rent_amount", data.rent_amount);
    formData.append("service_charge", data.service_charge);
    formData.append("bedrooms", data.bedrooms);
    formData.append("bathrooms", data.bathrooms);

    if (image) {
      formData.append("image", image);
    }

    images.forEach((img) => {
      formData.append("images", img);
    });

    // dispatch(addProperty(formData));
    const result = await dispatch(addProperty(formData));

    if (addProperty.fulfilled.match(result)) {
      setData(initialFormData);
      setSelectedUserId("");
      setSelectedEstateId("");
      setImage(null);
      setImages([]);

      if (imageRef.current) imageRef.current.value = "";
      if (galleryRef.current) galleryRef.current.value = "";
    }

    // console.log("Submitting...");
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          {/* Header */}
          <div className="text-center mb-8">
            <img src={logo} alt="Logo" className="my-5 mx-auto size-30" />

            <p className="mt-2 text-sm text-gray-600">
              Please Upload Properties here
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* User Select */}
            <div>
              <select
                disabled={status === "loading"}
                value={selectedUserId}
                onChange={(e) => {
                  setSelectedUserId(e.target.value);
                  setSelectedEstateId("");
                }}
                className="border p-2 w-full rounded"
              >
                <option value="">Select Property Owner</option>

                {users?.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Estate Memberships */}
            {selectedUser?.estate_memberships?.length > 0 && (
              <div>
                <p className="font-semibold mb-2">Select Estate</p>

                {selectedUser.estate_memberships.map((membership) => (
                  <div
                    key={membership.id}
                    className="flex items-center gap-2 mb-2"
                  >
                    <input
                      type="radio"
                      name="estate"
                      value={membership.estate_id ?? membership.id}
                      checked={
                        selectedEstateId ===
                        String(membership.estate_id ?? membership.id)
                      }
                      onChange={(e) => setSelectedEstateId(e.target.value)}
                    />

                    <label>{membership.estate_name}</label>
                  </div>
                ))}
              </div>
            )}

            {/* Property Type */}
            <input
              type="text"
              name="type"
              placeholder="Property Type (Duplex, Flat, Bungalow)"
              value={data.type}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />

            {/* Size */}
            <input
              name="size"
              type="text"
              placeholder="Size e.g 1800 sqft"
              value={data.size}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />

            {/* Address */}
            <input
              name="address"
              type="text"
              placeholder="Address"
              value={data.address}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />

            {/* Rent */}
            <input
              name="rent_amount"
              type="text"
              placeholder="Rent Amount"
              value={data.rent_amount}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />

            {/* Service Charge */}
            <input
              name="service_charge"
              type="text"
              placeholder="Service Charge"
              value={data.service_charge}
              onChange={handleChange}
              className="border p-2 w-full rounded"
              readOnly
            />

            {/* Bathrooms */}
            <input
              name="bathrooms"
              type="text"
              placeholder="Number of Bathrooms"
              value={data.bathrooms}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />

            {/* Bedrooms */}
            <input
              name="bedrooms"
              type="text"
              placeholder="Number of Bedrooms"
              value={data.bedrooms}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />

            {/* Main Image */}
            <div>
              <label className="block mb-2 font-medium">Main Image</label>

              <label htmlFor="image" className="cursor-pointer inline-block">
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Preview"
                    className="w-40 h-40 object-cover rounded"
                  />
                ) : (
                  <IoCloudUploadOutline size={40} />
                )}
              </label>

              <input
                id="image"
                type="file"
                hidden
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>

            {/* Gallery Images */}
            <div>
              <p className="font-semibold mb-2">
                Upload Property Gallery Images
              </p>

              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => setImages(Array.from(e.target.files))}
                className="border p-2 rounded-lg w-full"
              />

              <div className="grid grid-cols-3 gap-3 mt-4">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(img)}
                    alt={`gallery-${index}`}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>

            {/* Description */}
            <textarea
              name="description"
              placeholder="Property Description"
              value={data.description}
              onChange={handleChange}
              rows={4}
              className="border p-2 w-full rounded"
            />

            {propError && <p className="text-red-500">{propError}</p>}

            {propStatus === "succeeded" && (
              <p className="text-green-500">Property Created Successfully!</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={propStatus === "loading"}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              {propStatus === "loading" ? "Creating..." : "Create Property"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyForm;
