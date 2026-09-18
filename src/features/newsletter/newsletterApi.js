// src/features/products/productAPI.js
import axios from "axios";
const API_BASE = "https://api.safehomeproperties.com/newsletter";
export const createNewsletterAPI = (form) =>
  axios.post(`${API_BASE}send-email`, formData);
export const resetMailAPI = (email) =>
  axios.post(`${API_BASE}api/auth/forgot-password`, {
    email,
  });
export const resetPasswordAPI = ({ token, password }) =>
  axios.post(`${API_BASE}api/auth/reset-password`, {
    token,
    password,
  });
