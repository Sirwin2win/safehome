import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/images/logo.jpg";
import { IoCloudUploadOutline } from "react-icons/io5";
import {
  fetchProperty,
  updateProperty,
} from "../features/properties/propertySlice";
import { useParams } from "react-router-dom";
import { getUsers } from "../features/auth/authSlice";

const EditPropertyForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [selectedUserId, setSelectedUserId] = useState("");
  const [selectedEstateId, setSelectedEstateId] = useState("");
  const { users, status } = useSelector((state) => state.auth);
  const { currentProperty, propError, propStatus } = useSelector(
    (state) => state.properties,
  );
  //fetch property by id
  useEffect(() => {
    if (id) {
      dispatch(fetchProperty(id));
    }
  }, [id, dispatch]);
  // fetch users

  useEffect(() => {
    if (status === "idle") {
      dispatch(getUsers());
    }
  }, [dispatch, status]);

  const selectedUser = useMemo(() => {
    return users.find((user) => user.id === Number(selectedUserId));
  }, [users, selectedUserId]);
  // Add the required state
  const [data, setData] = useState({
    type: "",
    size: "",
    address: "",
    rent_amount: "",
    service_charge: "",
    bedrooms: "",
    bathrooms: "",
    description: "",
    status: "",
  });

  const [image, setImage] = useState(null);

  // newly selected gallery images
  const [images, setImages] = useState([]);

  // gallery already stored in database
  const [existingGallery, setExistingGallery] = useState([]);

  // ids to delete
  const [deletedImages, setDeletedImages] = useState([]);
  // Populate the form after fetch
  useEffect(() => {
    if (!currentProperty) return;

    setData({
      type: currentProperty.type || "",
      size: currentProperty.size || "",
      address: currentProperty.address || "",
      rent_amount: currentProperty.rent_amount || "",
      service_charge: currentProperty.service_charge || "",
      bedrooms: currentProperty.bedrooms || "",
      bathrooms: currentProperty.bathrooms || "",
      description: currentProperty.description || "",
      status: currentProperty.status || "",
    });

    setSelectedUserId(String(currentProperty.owner_id));
    setSelectedEstateId(String(currentProperty.estate_id));

    setExistingGallery(currentProperty.gallery || []);
  }, [currentProperty]);
  // Handle text fields
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  // Delete existing gallery image
  const removeExistingImage = (id) => {
    setDeletedImages((prev) => [...prev, id]);

    setExistingGallery((prev) => prev.filter((img) => img.id !== id));
  };
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("owner_id", selectedUserId);
    formData.append("estate_id", selectedEstateId);

    Object.entries(data).forEach(([key, value]) => {
      if (value !== "") {
        formData.append(key, value);
      }
    });

    if (image) {
      formData.append("image", image);
    }

    images.forEach((img) => {
      formData.append("images", img);
    });

    deletedImages.forEach((id) => {
      formData.append("deleted_images", id);
    });
    console.log(formData);
    dispatch(
      updateProperty({
        id,
        formData,
      }),
    );
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
                    alt=""
                    className="w-40 h-40 object-cover rounded"
                  />
                ) : currentProperty?.image ? (
                  <img
                    src={`https://safehomeproperties.com//uploads/${currentProperty.image}`}
                    alt=""
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
              <div className="grid grid-cols-3 gap-4 mb-4">
                {existingGallery.map((img) => (
                  <div key={img.id} className="relative">
                    <img
                      src={`https://safehomeproperties.com//uploads/${currentProperty.image}`}
                      alt=""
                      className="w-32 h-32 rounded object-cover"
                    />

                    <button
                      type="button"
                      onClick={() => removeExistingImage(img.id)}
                      className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => setImages(Array.from(e.target.files))}
                className="border p-2 rounded-lg w-full"
              />
              {/* <div className="grid grid-cols-3 gap-3 mt-4">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(img)}
                    alt={`gallery-${index}`}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                ))}
              </div> */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {images.map((img, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(img)}
                      className="w-32 h-32 rounded object-cover"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setImages((prev) => prev.filter((_, i) => i !== index))
                      }
                      className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6"
                    >
                      ×
                    </button>
                  </div>
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
              {propStatus === "loading" ? "Updating..." : "Update Property"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditPropertyForm;
