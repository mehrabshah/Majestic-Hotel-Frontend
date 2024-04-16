import axios from 'axios';
const API_BASE_URL = 'http://localhost:8000/';

export const getCategories = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}category/getAllCategory`);
      return response.data; 
    } catch (error) {
      throw error.response.data || 'Something went wrong';
    }
  };