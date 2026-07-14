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
    <div className="mx-5">
      <p className="text-3xl font-bold">Settings</p>
      <div className="flex justify-between">
        <p className="text-[#999999]">
          Manage your account settings and preferences
        </p>
        <div className="flex justify-evenly">
          <MdLogout className="text-red-500 size-5 mt-1" />
          <p className="text-red-500 ms-2">Logout</p>
        </div>
      </div>
      <p className="text-3xl font-bold mt-5">Profile</p>
      <p className="text-[#999999]">
        Click on the profile picture below to select an image
      </p>
      {/* Profile Photo  <LuPencilLine className="mt-10 size-7" /> */}
      <form
        onSubmit={handlePhotoSubmit}
        className="bg-[#F5F5F5] flex justify-between p-3 my-5"
      >
        <div className="flex items-center gap-4">
          <label className="cursor-pointer relative">
            <img
              src={pix}
              alt={user?.name || "User"}
              className="w-16 h-16 rounded-full object-cover border"
            />

            <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center text-white text-xs">
              Change
            </div>

            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>

          <div>
            <p className="text-xl font-bold">{user?.name}</p>
            <p className="text-gray-500">{user?.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={handleDeletePhoto}
            className="bg-[#D2D2D2] px-5 py-2 rounded-lg font-bold"
          >
            Remove Photo
          </button>

          <button
            type="submit"
            disabled={profileStatus === "loading"}
            className="bg-[#223B7E] text-white px-5 py-2 rounded-lg disabled:opacity-50"
          >
            {profileStatus === "loading" ? "Uploading..." : "Submit Photo"}
          </button>
        </div>
      </form>
      {/* Bio form */}
      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <p className="text-green-500">
          {updateStatus === "succeeded" && "Record updated successfully!"}
        </p>
        {/* PROFILE SECTION */}
        <div className="bg-[#F5F5F5] px-5 py-10">
          <div className="flex justify-between">
            {/* NAME */}
            <div className="w-full">
              <label className="block my-3">Full Name</label>

              <input
                type="text"
                name="name"
                value={forms.name}
                onChange={onChange}
                className="border border-gray-300 h-15 w-full rounded-lg ps-5"
              />
            </div>

            {/* ROLE */}
            <div className="w-full ms-10">
              <label className="block my-3">Role</label>

              <input
                type="text"
                value={user?.role || ""}
                readOnly
                className="border border-gray-300 h-15 w-full rounded-lg ps-5 bg-[#D9D9D9]"
              />
            </div>
          </div>

          <div className="flex justify-between mt-5">
            {/* EMAIL */}
            <div className="w-full">
              <label className="block my-3">Email Address</label>

              <input
                type="text"
                value={user?.email || ""}
                readOnly
                className="border border-gray-300 h-15 w-full rounded-lg ps-5 bg-[#D9D9D9]"
              />
            </div>

            {/* PHONE */}
            <div className="w-full ms-10">
              <label className="block my-3">Phone Number</label>

              <input
                type="text"
                name="phone"
                value={forms.phone}
                onChange={onChange}
                className="border border-gray-300 h-15 w-full rounded-lg ps-5"
              />
            </div>
          </div>
        </div>

        {/* PASSWORD SECTION */}
        <div className="bg-[#F5F5F5] px-5 py-10 mt-5">
          <div className="flex justify-between">
            {/* CURRENT PASSWORD */}
            <div className="w-full">
              <label className="block my-3">Current Password</label>

              <input
                type="password"
                name="currentPassword"
                value={forms.currentPassword}
                onChange={onChange}
                placeholder="Enter Current Password"
                className="border border-gray-300 h-15 w-full rounded-lg ps-5"
              />
            </div>

            {/* NEW PASSWORD */}
            <div className="w-full ms-10">
              <label className="block my-3">New Password</label>

              <input
                type="password"
                name="newPassword"
                value={forms.newPassword}
                onChange={onChange}
                placeholder="Enter New Password"
                className="border border-gray-300 h-15 w-full rounded-lg ps-5"
              />
            </div>
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="mt-5">
            <label className="block my-3">Confirm New Password</label>

            <input
              type="password"
              name="confirmPassword"
              value={forms.confirmPassword}
              onChange={onChange}
              placeholder="Confirm New Password"
              className="border border-gray-300 h-15 w-full rounded-lg ps-5"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="bg-[#223B7E] text-white px-10 py-3 font-bold rounded-lg mt-10"
          >
            <span>
              {updateStatus === "loading" ? "Saving..." : "Save Changes"}
            </span>
          </button>
        </div>
      </form>
      {/* Password Change form ended */}
      {/* Notification started */}
      <p className="text-2xl font-bold mt-5">Notification</p>
      <p className="text-[#999999]">Manage how and when you receive alerts</p>

      <div className="bg-[#F5F5F5] flex justify-between p-5 mt-5+">
        <div>
          <p className="text-xl font-bold">All Notifications</p>
          <p className="text-[#999999]">
            Enable or Disable notifications with a single switch
          </p>
        </div>
        <MdToggleOn className="text-[#223B7E] size-10" />
      </div>
      {/* Notification ended */}
      {/* Notification Categories started */}
      {/* <p className='text-2xl font-bold mt-5'>Notification Categories</p>
              <div className='bg-[#F5F5F5] flex justify-between p-5 mt-5'>
                <div className='flex justify-evenly'>
                <MdPayments  className='text-[#223B7E] size-10 bg-[#223B7E4D] p-2 mt-2'/>
                <div className='ms-5'>
                  <p className='text-xl font-bold'>Payments</p>
                  <p className='text-[#999999]'>Reminder for upcoming rent, payment confirmations and overdue alerts</p>
                </div>
                </div>
                  <MdToggleOn  className='text-[#223B7E] size-10'/>
              </div> */}
      {/* <div className='bg-[#F5F5F5] flex justify-between p-5 mt-5'>
                <div className='flex justify-evenly'>
                <MdPayments  className='text-[#223B7E] size-10 bg-[#223B7E4D] p-2 mt-2'/>
                <div className='ms-5'>
                  <p className='text-xl font-bold'>Lease & Documents</p>
                  <p className='text-[#999999]'>Alerts for lease renewal, new documents shared and signature requests.</p>
                </div>
                </div>
                  <MdToggleOn  className='text-[#223B7E] size-10'/>
              </div> */}
      {/* <div className='bg-[#F5F5F5] flex justify-between p-5 mt-5'>
                <div className='flex justify-evenly'>
                <MdPayments  className='text-[#223B7E] size-10 bg-[#223B7E4D] p-2 mt-2'/>
                <div className='ms-5'>
                  <p className='text-xl font-bold'>Maintenance</p>
                  <p className='text-[#999999]'>Updates on service requests and completion notices.</p>
                </div>
                </div>
                  <MdToggleOn  className='text-[#223B7E] size-10'/>
              </div> */}
      {/* <div className='bg-[#F5F5F5] flex justify-between p-5 mt-5'>
                <div className='flex justify-evenly'>
                <MdPayments  className='text-[#223B7E] size-10 bg-[#223B7E4D] p-2 mt-2'/>
                <div className='ms-5'>
                  <p className='text-xl font-bold'>Community Announcements</p>
                  <p className='text-[#999999]'>General updates and announcements from the management.</p>
                </div>
                </div>
                  <MdToggleOn  className='text-[#223B7E] size-10'/>
              </div> */}
      {/* Notification Categories ended */}
      {/* Privacy Settings started */}
      {/* <p className='text-2xl font-bold mt-5'>Privacy Settings</p>
              <p className='text-[#999999]'>Manage your data sharing, account settings and more</p> */}
      {/*               
              <div className='bg-[#F5F5F5] flex justify-between p-5 mt-5'>
                <div>
                  <p className='text-xl font-bold'>Personalized Content</p>
                  <p className='text-[#999999]'>Enable or Disable notifications with a single switch</p>
                </div>
                  <MdToggleOn  className='text-[#223B7E] size-10'/>
              </div> */}
      {/* Privacy Settings ended */}
    </div>
  );
};

export default ProfileSettings;
