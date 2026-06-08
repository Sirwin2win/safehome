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
export const updateEstateAPI = (id, estate) =>
  axios.put(`${API_BASE}/${id}`, estate);
export const deleteEstateAPI = (id) => axios.delete(`${API_BASE}/${id}`);
