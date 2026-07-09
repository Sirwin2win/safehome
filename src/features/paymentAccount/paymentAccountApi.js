// src/features/products/productAPI.js

import axios from "axios";

const API_BASE = "https://api.safehomeproperties.com/api/paymentAccounts";

// export const fetchEstatesAPI = () => axios.get(API_BASE);
// export const fetchEstateByIdAPI = (id) => axios.get(`${API_BASE}/${id}`);

// Fetch Landlord account Details
// Get My leases(tenant)
export const fetchMyPaymentAccountAPI = (token) =>
  axios.get(`${API_BASE}/my-account`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
// Fetch banks
export const fetchBanksAPI = (token) =>
  axios.get(`${API_BASE}/banks`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
// Fetch My account details
// export const fetchMyAccountAPI = (token) =>
//   axios.get(`${API_BASE}/my-account`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

export const verifyAccountAPI = (form, token) =>
  axios.post(`${API_BASE}/verify-account`, form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const createPaymentAccountAPI = (form, token) =>
  axios.post(`${API_BASE}/payment-account`, form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
// export const updateEstateAPI = (id, formData, token) =>
//   axios.put(`${API_BASE}/${id}`, formData, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// export const deleteEstateAPI = (id, token) =>
//   axios.delete(`${API_BASE}/${id}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
