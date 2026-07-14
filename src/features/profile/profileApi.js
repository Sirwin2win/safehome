// src/features/profile/profileAPI.js

import axios from "axios";

const API_BASE = "https://api.safehomeproperties.com/api/profile";

// Get logged-in user's profile
export const fetchProfileAPI = (token) =>
  axios.get(`${API_BASE}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

// Create or update profile image
export const updateProfileAPI = (formData, token) =>
  axios.put(`${API_BASE}/profile`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

// Delete profile
export const deleteProfileAPI = (token) =>
  axios.delete(`${API_BASE}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
