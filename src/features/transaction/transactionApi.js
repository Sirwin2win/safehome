// src/features/products/productAPI.js

import axios from "axios";

const API_BASE = "https://api.safehomeproperties.com/api/transactions";

export const fetchTransactionsAPI = (token) =>
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
export const fetchMyTransactionsAPI = (token) =>
  axios.get(`${API_BASE}/tenant-transactions`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
// Get Landlord Transactions
export const fetchLandlordTransactionsAPI = (token) =>
  axios.get(`${API_BASE}/landlord-transactions`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
