import axios from 'axios';
const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

//Get all the Categories of the rooms
export const getCategories = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}category/getAllCategory`);
      return response.data; 
    } catch (error) {
      throw error.response.data || 'Something went wrong';
    }
};
  

//Get availability of the rooms on the selected date
export const getRoomsAvailability = async (userData) => {
  try {
   
    const response = await axios.post(
      `${API_BASE_URL}booking/available-rooms`,
      userData
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Something went wrong';
  }
};

//Booking of the selected Room
export const  Booking = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}booking/createMultipleBookings`, userData);
    return response.data; 
  } catch (error) {
    throw error.response.data || 'Something went wrong';
  }
};

export const  createPaymentLink = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}booking/create-checkout-session`, data);
    return response.data; 
  } catch (error) {
    throw error.response.data || 'Something went wrong';
  }
};

//Get rooms prices
export const getRoomsPrices = async (userData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}booking/available-rooms`,
      userData
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || 'We are unable to fetch the rooms prices';
  }
};

//Function to calculate the room prices
export const calculateRoomsPrices = async (userData) => {
  try {

    console.log("try catch data",userData)
    const response = await axios.post(
      `${API_BASE_URL}booking/calculateTotalPrice`,
      userData
    );
    return response.data.totalPrice;
  } catch (error) {
    throw error.response?.data || 'We are unable to fetch the rooms prices';
  }
};

