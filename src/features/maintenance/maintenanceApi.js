// src/features/products/productAPI.js

import axios from "axios";

const API_BASE = "https://api.safehomeproperties.com/api/maintenance";

export const fetchMaintenancesAPI = (token) =>
  axios.get(API_BASE, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const fetchMaintenanceIdAPI = (id) => axios.get(`${API_BASE}/${id}`);
// Get My maintenance
export const fetchMyMaintenanceAPI = (token) =>
  axios.get(`${API_BASE}/my-maintenance`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const createMaintenanceAPI = (form, token) =>
  axios.post(API_BASE, form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const updateMaintenanceAPI = (id, status, token) => {
  console.log("API:", { id, status });

  return axios.patch(
    `${API_BASE}/${id}`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  );
};
export const deleteMaintenanceAPI = (id, token) =>
  axios.delete(`${API_BASE}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
