import React, { useEffect, useState } from "react";
import { MdLogout, MdToggleOn, MdPayments } from "react-icons/md";
import cam from "../assets/images/camera.png";
import { jwtDecode } from "jwt-decode";
import { getUserById, updateUser } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { LuPencilLine } from "react-icons/lu";
import {
  deleteProfile,
  fetchProfile,
  updateProfile,
} from "../features/profile/profileSlice";

const ProfileSettings = () => {
  // Get token from localStorage
  const token = localStorage.getItem("token");

  let userId = null;

  try {
    if (token) {
      // Decode token
      const decoded = jwtDecode(token);

      console.log(decoded);

      // Access user id
      userId = decoded.id;

      console.log("User ID:", userId);
    }
  } catch (error) {
    console.log(error.message);
  }

  // get auth info from the state
  const { user, status, error, updateStatus } = useSelector(
    (state) => state.auth,
  );

  // initialize dispatch
  const dispatch = useDispatch();
  const [forms, setForms] = useState({
    name: "",
    phone: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // dispatch for the actual user
  useEffect(() => {
    if (userId) {
      dispatch(getUserById(userId));
    }
  }, [dispatch, userId]);

  // console.log({user:user})

  const onChange = (e) => {
    setForms((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(forms);
    dispatch(updateUser({ id: userId, forms }));
  };
  useEffect(() => {
    if (updateStatus === "succeeded") {
      setForms({
        name: "",
        phone: "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    }
  }, [updateStatus]);

  // const [photo, setPhoto] = useState(user.photo);
  const { profile, profileStatus, profileError } = useSelector(
    (state) => state.profile,
  );
  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);
  const [selectedImage, setSelectedImage] = useState(null);
  // const [pix, setPix] = useState(profile?.image || cam);
  const [pix, setPix] = useState(cam);

  useEffect(() => {
    if (profile?.image) {
      setPix(profile.image);
    } else {
      setPix(cam);
    }
  }, [profile]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedImage(file);

    const preview = URL.createObjectURL(file);
    setPix(preview);
  };
  useEffect(() => {
    return () => {
      if (pix && pix.startsWith("blob:")) {
        URL.revokeObjectURL(pix);
      }
    };
  }, [pix]);
  // Submit photo
  const handlePhotoSubmit = async (e) => {
    e.preventDefault();

    if (!selectedImage) {
      alert("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      await dispatch(updateProfile(formData)).unwrap();

      dispatch(fetchProfile());

      setSelectedImage(null);

      alert("Profile photo updated successfully.");
    } catch (error) {
      console.error(error);
      alert(error.message || "Failed to update profile.");
    }
  };

  // Delete photo
  const handleDeletePhoto = async () => {
    if (!window.confirm("Remove your profile photo?")) return;

    try {
      await dispatch(deleteProfile()).unwrap();

      setSelectedImage(null);
      setPix(cam);

      dispatch(fetchProfile());

      alert("Profile photo removed.");
    } catch (error) {
      console.error(error);
      alert(error.message || "Failed to remove photo.");
    }
  };

  return (
    <div className="mx-3 w-full max-w-full overflow-hidden sm:mx-5">
      {/* ================= HEADER ================= */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-2xl font-bold sm:text-3xl">Settings</p>

          <p className="text-sm text-[#999999] sm:text-base">
            Manage your account settings and preferences
          </p>
        </div>

        <button
          type="button"
          className="flex w-fit items-center gap-2 text-red-500"
        >
          <MdLogout className="size-5" />
          <span>Logout</span>
        </button>
      </div>

      {/* ================= PROFILE TITLE ================= */}
      <div className="mt-6">
        <p className="text-2xl font-bold sm:text-3xl">Profile</p>

        <p className="text-sm text-[#999999] sm:text-base">
          Click on the profile picture below to select an image
        </p>
      </div>

      {/* ================= PROFILE PHOTO ================= */}
      <form
        onSubmit={handlePhotoSubmit}
        className="my-5 grid grid-cols-1 gap-5 rounded-lg bg-[#F5F5F5] p-4 sm:p-5 md:grid-cols-[1fr_auto] md:items-center"
      >
        {/* User */}
        <div className="grid grid-cols-[auto_1fr] items-center gap-4 min-w-0">
          <label className="relative block w-16 cursor-pointer">
            <img
              src={pix}
              alt={user?.name || "User"}
              className="h-16 w-16 rounded-full border object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/40 text-xs text-white opacity-0 hover:opacity-100">
              Change
            </div>

            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>

          <div className="min-w-0">
            <p className="truncate text-lg font-bold sm:text-xl">
              {user?.name}
            </p>

            <p className="truncate text-sm text-gray-500">{user?.email}</p>
          </div>
        </div>

        {/* Photo Actions */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:flex">
          <button
            type="button"
            onClick={handleDeletePhoto}
            className="w-full rounded-lg bg-[#D2D2D2] px-5 py-3 font-bold sm:w-auto"
          >
            Remove Photo
          </button>

          <button
            type="submit"
            disabled={profileStatus === "loading"}
            className="w-full rounded-lg bg-[#223B7E] px-5 py-3 text-white disabled:opacity-50 sm:w-auto"
          >
            {profileStatus === "loading" ? "Uploading..." : "Submit Photo"}
          </button>
        </div>
      </form>

      {/* ================= PROFILE FORM ================= */}
      <form onSubmit={handleSubmit}>
        <p className="text-green-500">
          {updateStatus === "succeeded" && "Record updated successfully!"}
        </p>

        {/* PROFILE SECTION */}
        <div className="mt-4 grid grid-cols-1 gap-5 rounded-lg bg-[#F5F5F5] px-4 py-6 sm:px-5 sm:py-8 md:grid-cols-2">
          {/* NAME */}
          <div className="min-w-0">
            <label className="my-3 block">Full Name</label>

            <input
              type="text"
              name="name"
              value={forms.name}
              onChange={onChange}
              className="h-14 w-full rounded-lg border border-gray-300 px-4 outline-none focus:ring-2 focus:ring-[#223B7E]"
            />
          </div>

          {/* ROLE */}
          <div className="min-w-0">
            <label className="my-3 block">Role</label>

            <input
              type="text"
              value={user?.role || ""}
              readOnly
              className="h-14 w-full rounded-lg border border-gray-300 bg-[#D9D9D9] px-4 outline-none"
            />
          </div>

          {/* EMAIL */}
          <div className="min-w-0">
            <label className="my-3 block">Email Address</label>

            <input
              type="text"
              value={user?.email || ""}
              readOnly
              className="h-14 w-full rounded-lg border border-gray-300 bg-[#D9D9D9] px-4 outline-none"
            />
          </div>

          {/* PHONE */}
          <div className="min-w-0">
            <label className="my-3 block">Phone Number</label>

            <input
              type="text"
              name="phone"
              value={forms.phone}
              onChange={onChange}
              className="h-14 w-full rounded-lg border border-gray-300 px-4 outline-none focus:ring-2 focus:ring-[#223B7E]"
            />
          </div>
        </div>

        {/* ================= PASSWORD SECTION ================= */}
        <div className="mt-5 grid grid-cols-1 gap-5 rounded-lg bg-[#F5F5F5] px-4 py-6 sm:px-5 sm:py-8 md:grid-cols-2">
          {/* CURRENT PASSWORD */}
          <div className="min-w-0">
            <label className="my-3 block">Current Password</label>

            <input
              type="password"
              name="currentPassword"
              value={forms.currentPassword}
              onChange={onChange}
              placeholder="Enter Current Password"
              className="h-14 w-full rounded-lg border border-gray-300 px-4 outline-none focus:ring-2 focus:ring-[#223B7E]"
            />
          </div>

          {/* NEW PASSWORD */}
          <div className="min-w-0">
            <label className="my-3 block">New Password</label>

            <input
              type="password"
              name="newPassword"
              value={forms.newPassword}
              onChange={onChange}
              placeholder="Enter New Password"
              className="h-14 w-full rounded-lg border border-gray-300 px-4 outline-none focus:ring-2 focus:ring-[#223B7E]"
            />
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="min-w-0 md:col-span-2">
            <label className="my-3 block">Confirm New Password</label>

            <input
              type="password"
              name="confirmPassword"
              value={forms.confirmPassword}
              onChange={onChange}
              placeholder="Confirm New Password"
              className="h-14 w-full rounded-lg border border-gray-300 px-4 outline-none focus:ring-2 focus:ring-[#223B7E]"
            />
          </div>

          {/* SAVE */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full rounded-lg bg-[#223B7E] px-8 py-3 font-bold text-white sm:w-auto"
            >
              {updateStatus === "loading" ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </form>

      {/* ================= NOTIFICATION ================= */}
      <div className="mt-6">
        <p className="text-2xl font-bold">Notification</p>

        <p className="text-sm text-[#999999] sm:text-base">
          Manage how and when you receive alerts
        </p>
      </div>

      <div className="mt-5 grid grid-cols-[1fr_auto] items-center gap-4 rounded-lg bg-[#F5F5F5] p-4 sm:p-5">
        <div className="min-w-0">
          <p className="text-lg font-bold sm:text-xl">All Notifications</p>

          <p className="text-sm text-[#999999]">
            Enable or Disable notifications with a single switch
          </p>
        </div>

        <MdToggleOn className="size-9 shrink-0 text-[#223B7E] sm:size-10" />
      </div>
    </div>
  );
};

export default ProfileSettings;
