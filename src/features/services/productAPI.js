import axios from 'axios';

const API_URL = 'https://api.safehomeproperties.com/api/products';

export const fetchProductsAPI = async (filters) => {
  const response = await axios.get(API_URL, {
    params: filters,
  });

  return response.data;
};