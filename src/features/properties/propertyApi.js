// src/features/products/productAPI.js

import axios from 'axios';

const API_BASE = 'https://api.safehomeproperties.com/api/properties';

export const fetchPropertiesAPI = () => axios.get(API_BASE);
export const fetchPropertyByIdAPI = (id) => axios.get(`${API_BASE}/${id}`);
export const createPropertyAPI = (formData) => axios.post(API_BASE, formData,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const updatePropertyAPI = (id, property, token) => {
  console.log("API:", { id, property });

  return axios.patch(
    `${API_BASE}/${id}`,
    { property },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};
export const deletePropertyAPI = (id) => axios.delete(`${API_BASE}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
