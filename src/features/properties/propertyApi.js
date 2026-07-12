// src/features/products/productAPI.js

import axios from "axios";

const API_BASE = "https://api.safehomeproperties.com/api/properties";

export const fetchPropertiesAPI = (filters = {}) =>
  axios.get(API_BASE, {
    params: filters,
  });

export const fetchPropertyFiltersAPI = () => axios.get(`${API_BASE}/filters`);

export const fetchPropertyByIdAPI = (id) => axios.get(`${API_BASE}/${id}`);
export const createPropertyAPI = (formData, token) => {
  console.log("createPropertyAPI token:", token);

  return axios.post(API_BASE, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
// FetchMyProperties
export const fetchMyPropertiesAPI = (filters = {}, token) =>
  axios.get(`${API_BASE}/my-properties`, {
    params: filters,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const updatePropertyAPI = (id, formData, token) => {
  // console.log("API:", { id, formData });

  return axios.patch(`${API_BASE}/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};
export const deletePropertyAPI = (id, token) =>
  axios.delete(`${API_BASE}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
