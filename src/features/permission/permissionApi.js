// src/features/products/productAPI.js

import axios from "axios";

const API_BASE = "https://api.safehomeproperties.com/api/permissions";

export const fetchPermissionsAPI = () => axios.get(API_BASE);
export const fetchPermissionByIdAPI = (id) => axios.get(`${API_BASE}/${id}`);
export const createPermissionAPI = (permission) =>
  axios.post(API_BASE, permission);
export const updatePermissionAPI = (id, permission) =>
  axios.put(`${API_BASE}/${id}`, permission);
export const deletePermissionAPI = (id) => axios.delete(`${API_BASE}/${id}`);
