// src/features/products/productAPI.js

import axios from "axios";

const API_BASE = "https://api.safehomeproperties.com/api/transactions";

export const fetchTransactionsAPI = (token) =>
  axios.get(API_BASE, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

// // Fetch lease by Id
// export const fetchLeaseByIdAPI = (id, token) =>
//   axios.get(`${API_BASE}/${id}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

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
//Fetch Lease By Id
// export const fetchLeaseByIdAPI = (id,token) =>
//   axios.get(`${API_BASE}/${id}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

// update lease statuses
// export const updateLeaseAPI = (id, status, token) => {
//   return axios.patch(
//     `${API_BASE}/${id}/status`,
//     { id, status }, // 👈 IMPORTANT FIX
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     },
//   );
// };
// // update lease agreement
// export const updateLeaseAgreementAPI = (id, payload, token) => {
//   return axios.patch(`${API_BASE}/${id}/agreement`, payload, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//     },
//   });
// };

// // delete lease
// export const deleteLeaseAPI = (id, token) =>
//   axios.delete(`${API_BASE}/${id}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
