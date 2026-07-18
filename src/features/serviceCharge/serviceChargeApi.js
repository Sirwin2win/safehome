// src/features/products/productAPI.js

import axios from "axios";

const API_BASE = "https://api.safehomeproperties.com/api/serviceCharges";

export const fetchserviceChargesAPI = (token) =>
  axios.get(API_BASE, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const initializeAPI = (form, token) =>
  axios.post(`${API_BASE}/initialize`, form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
// Get My Transactions(tenant)
export const fetchMyServiceChargesAPI = (token) =>
  axios.get(`${API_BASE}/my-service-charges`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
// Get Landlord Transactions
// export const fetchLandlordTransactionsAPI = (token) =>
//   axios.get(`${API_BASE}/landlord-transactions`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
