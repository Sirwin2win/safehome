import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/images/logo.jpg";
import { IoCloudUploadOutline } from "react-icons/io5";
import { getUsers } from "../features/auth/authSlice";

const PropertyForm = () => {
  const { users = [], status } = useSelector((state) => state.auth);
  const { propStatus, propError } = useSelector((state) => state.properties);

  const dispatch = useDispatch();

  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);

  const [selectedUserId, setSelectedUserId] = useState("");
const [selectedEstateId, setSelectedEstateId] = useState("");

  const [data, setData] = useState({
    title: "",
    location: "",
    price: "",
    rooms: "",
    baths: "",
    size: "",
    description: "",
    category_id: "",
  });

  // ✅ Load users
  useEffect(() => {
    if (status === "idle") {
      dispatch(getUsers());
    }
  }, [status, dispatch]);

  // ✅ SAFE selected user lookup (memoized for stability)


const selectedUser = users.find(
  (user) => String(user.id) === String(selectedUserId)
);

  // ✅ Reset estate when user changes
  useEffect(() => {
    setSelectedEstateId("");
  }, [selectedUserId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("location", data.location);
    formData.append("estate", selectedEstateId);
    formData.append("price", data.price);
    formData.append("rooms", data.rooms);
    formData.append("baths", data.baths);
    formData.append("size", data.size);
    formData.append("description", data.description);
    formData.append("image", image);
    formData.append("category_id", data.category_id);

    images.forEach((img) => {
      formData.append("images", img);
    });

    // dispatch(addProduct(formData));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">

          {/* HEADER */}
          <div className="text-center mb-8">
            <img src={logo} alt="" className="my-5 mx-auto size-30" />
            <p className="mt-2 text-sm text-gray-600">
              Please Upload Properties here
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>

            {propError && (
              <p className="text-red-500">{propError}</p>
            )}

            {/* USER SELECT */}
            

          <div>
  <label className="block mb-1">Select User</label>

  <select
    value={String(selectedUserId)}
    onChange={(e) => setSelectedUserId(e.target.value)}
    className="border p-2 w-full"
  >
    <option value="">Choose User</option>

    {users.map((user) => (
      <option key={user.id} value={user.id}>
        {user.name} ({user.email})
      </option>
    ))}
  </select>
</div>

{selectedUser.estate_memberships.map((estate) => (
  <label key={estate.id} className="flex items-center gap-2 mb-2">
    <input
      type="radio"
      name="estate"
      value={estate.id}
      onChange={(e) => setSelectedEstate(e.target.value)}
    />
    <span>{estate.name}</span>
  </label>
))}
            {/* ESTATES */}
            <div>
  <label className="block mb-1">Select User</label>

  <select
    value={String(selectedUserId)}
    onChange={(e) => setSelectedUserId(e.target.value)}
    className="border p-2 w-full"
  >
    <option value="">Choose User</option>

    {users.map((user) => (
      <option key={user.id} value={user.id}>
        {user.name} ({user.email})
      </option>
    ))}
  </select>
</div>

{selectedUser?.estate_membershipd?.length > 0 && (
  <div className="mt-4">
    <label className="block mb-2">Select Estate</label>

    {selectedUser.estate_membershipd.map((estate, index) => (
      <label
        key={index}
        className="flex items-center gap-2 mb-2"
      >
        <input
          type="radio"
          name="estate"
          value={estate}
          onChange={(e) => setSelectedEstate(e.target.value)}
        />
        <span>{estate}</span>
      </label>
    ))}
  </div>
)}
            {/* FIELDS */}
            <input
              name="title"
              placeholder="Property Name"
              value={data.title}
              onChange={handleChange}
              className="border p-2 w-full"
            />

            <input
              name="location"
              placeholder="Location"
              value={data.location}
              onChange={handleChange}
              className="border p-2 w-full"
            />

            <input
              name="price"
              placeholder="Price"
              type="number"
              value={data.price}
              onChange={handleChange}
              className="border p-2 w-full"
            />

            <input
              name="rooms"
              placeholder="Rooms"
              type="number"
              value={data.rooms}
              onChange={handleChange}
              className="border p-2 w-full"
            />

            <input
              name="baths"
              placeholder="Baths"
              type="number"
              value={data.baths}
              onChange={handleChange}
              className="border p-2 w-full"
            />

            <input
              name="size"
              placeholder="Size"
              type="number"
              value={data.size}
              onChange={handleChange}
              className="border p-2 w-full"
            />

            {/* MAIN IMAGE */}
            <div>
              <label>Main Image</label>

              <label htmlFor="image">
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    alt=""
                    className="w-40 h-40 object-cover"
                  />
                ) : (
                  <IoCloudUploadOutline size={40} />
                )}
              </label>

              <input
                id="image"
                type="file"
                hidden
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>

            {/* GALLERY */}
            <input
              type="file"
              multiple
              onChange={(e) => setImages([...e.target.files])}
            />

            {/* DESCRIPTION */}
            <textarea
              name="description"
              value={data.description}
              onChange={handleChange}
              className="border p-2 w-full"
            />

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2"
            >
              {propStatus === "loading"
                ? "Creating..."
                : "Create Property"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyForm;