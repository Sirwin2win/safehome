// src/features/products/productAPI.js

import axios from "axios";

const API_BASE = "https://api.safehomeproperties.com/api/issues";

// export const fetchIssuesAPI = () => axios.get(API_BASE);
// export const fetchIssueByIdAPI = (id) => axios.get(`${API_BASE}/${id}`);

export const fetchIssuesAPI = (token) =>
  axios.get(API_BASE, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

// Fetch Issue by Id
export const fetchIssueByIdAPI = (id, token) =>
  axios.get(`${API_BASE}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

// Get My Issues
export const fetchMyIssueAPI = (token) =>
  axios.get(`${API_BASE}/my-issues`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const createIssueAPI = (issue, token) =>
  axios.post(API_BASE, issue, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const updateIssueAPI = (id, formData, token) =>
  axios.put(`${API_BASE}/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const deleteIssueAPI = (id, token) =>
  axios.delete(`${API_BASE}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
