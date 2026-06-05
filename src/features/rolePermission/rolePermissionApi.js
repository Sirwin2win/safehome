// src/features/products/productAPI.js

import axios from "axios";

const API_BASE =
  "https://api.safehomeproperties.com/api/rolePermissions/role-permissions";

// export const fetchRolePermissionsAPI = () => axios.get(API_BASE);
// export const fetchRolePermissionByIdAPI = (id) =>
//   axios.get(`${API_BASE}/${id}`);
export const createRolePermissionAPI = (payload) =>
  axios.post(API_BASE, payload);
// export const updateRolePermissionAPI = (id, RolePermission) =>
//   axios.put(`${API_BASE}/${id}`, RolePermission);
// export const deleteRolePermissionAPI = (id) =>
//   axios.delete(`${API_BASE}/${id}`);
