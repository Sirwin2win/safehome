// src/features/products/productAPI.js

import axios from "axios";

const API_BASE = "https://api.safehomeproperties.com/api/userRoles";
const API_BASE2 = "https://api.safehomeproperties.com/api/userRoles/add";

// export const fetchCategoriesAPI = () => axios.get(API_BASE);
// export const fetchCategoryByIdAPI = (id) => axios.get(`${API_BASE}/${id}`);
export const createUserRoleAPI = (userRole) => axios.post(API_BASE, userRole);
export const updateUserRoleAPI = (userRole) => axios.post(API_BASE2, userRole);
// export const updateCategoryAPI = (id, category) =>
//   axios.put(`${API_BASE}/${id}`, category);
export const deleteUserRoleAPI = (userRole) =>
  axios.post(`${API_BASE}/delete`, userRole);
