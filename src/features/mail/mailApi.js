// src/features/products/productAPI.js

import axios from 'axios';

const API_BASE = 'https://api.safehomeproperties.com/send-email';


export const createMailAPI = (mail) => axios.post(API_BASE, mail);
export const resetMailAPI = (mail) => axios.post('https://api.safehomeproperties.com/api/auth/forgot-password', mail);
export const updateMailAPI = (mail) => axios.put('https://api.safehomeproperties.com/api/auth/update-password', mail);

