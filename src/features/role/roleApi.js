// src/features/products/productAPI.js

import axios from "axios";

const API_BASE = "https://api.safehomeproperties.com/api/roles";

export const fetchRolesAPI = () => axios.get(API_BASE);
export const fetchRoleByIdAPI = (id) => axios.get(`${API_BASE}/${id}`);
export const createRoleAPI = (role) => axios.post(API_BASE, role);
export const updateRoleAPI = (id, role) => axios.put(`${API_BASE}/${id}`, role);
export const deleteRoleAPI = (id) => axios.delete(`${API_BASE}/${id}`);
