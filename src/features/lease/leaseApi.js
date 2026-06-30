// src/features/products/productAPI.js

import axios from "axios";

const API_BASE = "https://api.safehomeproperties.com/api/leases";

export const fetchLeasesAPI = (token) =>
  axios.get(API_BASE, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const fetchLeaseByIdAPI = (id) => axios.get(`${API_BASE}/${id}`);
export const createLeaseAPI = (form, token) =>
  axios.post(API_BASE, form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
// Get My leases
export const fetchMyLeasesAPI = (token) =>
  axios.get(`${API_BASE}/my-leases`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
// Get Landlord leases
export const fetchLandlordLeasesAPI = (token) =>
  axios.get(`${API_BASE}/landlord-leases`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const updateLeaseAPI = (id, form, token) => {
  console.log("API:", { id, form });

  return axios.patch(
    `${API_BASE}/${id}`,
    { form },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  );
};
export const deleteLeaseAPI = (id, token) =>
  axios.delete(`${API_BASE}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
