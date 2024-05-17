import axios from 'axios';
const backendUrl = process.env.REACT_APP_BACKEND_URL;

export async function getRoomsPrices(data) {
    try {
      const response = await axios.post(`${backendUrl}category/category/getPricesById`,data);
      return response.data.Prices;

    } catch (error) {
      throw new Error('Failed to fetch Rooms Prices.');
    }
  }