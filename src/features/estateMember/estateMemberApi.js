// src/features/products/productAPI.js

import axios from "axios";

const API_BASE = "https://api.safehomeproperties.com/api/estateMembers";

export const fetchEstateMembersAPI = (token) => axios.get(API_BASE, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const fetchEstateMemberIdAPI = (id) => axios.get(`${API_BASE}/${id}`);
export const createEstateMemberAPI = (form, token) =>
  axios.post(API_BASE, form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const updateEstateMemberAPI = (id, formData, token) =>
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
