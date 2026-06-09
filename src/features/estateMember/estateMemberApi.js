// src/features/products/productAPI.js

import axios from "axios";

const API_BASE = "https://api.safehomeproperties.com/api/estates";

export const fetchEstatesAPI = () => axios.get(API_BASE);
export const fetchEstateByIdAPI = (id) => axios.get(`${API_BASE}/${id}`);
export const createEstateAPI = (estate, token) =>
  axios.post(API_BASE, estate, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const updateEstateAPI = (id, formData, token) =>
  axios.put(`${API_BASE}/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const deleteEstateAPI = (id, token) =>
  axios.delete(`${API_BASE}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
