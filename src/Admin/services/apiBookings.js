import axios from 'axios';
const backendUrl = process.env.REACT_APP_BACKEND_URL;


export async function getBookings() {
  try {
    const response = await axios.get(`${backendUrl}booking/getAllBookingsWithDetails`);
    return response.data;
  } catch (error) {
    throw new Error('We are unable to load bookings at this time.');
  }
}

export async function getBookingDetail(id) {
  try {
    const response = await axios.get(`${backendUrl}bookings/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('We are unable to find booking at this time.');
  }
}

export async function updateBooking(dataObj) {
  try {
    const response = await axios.post(`${backendUrl}booking/editMultipleBookings`, dataObj);
    return response.data;
  } catch (error) {
    throw new Error('We are unable to update booking at this time.');
  }
}

export async function deleteBooking(id) {
  try {
    await axios.delete(`${backendUrl}booking/orders/${id}`);
  } catch (error) {
    throw new Error('We are unable to delete booking at this time.');
  }
}

export async function getBookingsAfterDate(date) {
  try {
    const response = await axios.get(`${process.env.backendUrl}/bookings/after-date/${date}`);
    return response.data;
  } catch (error) {
    throw new Error('We are unable to load bookings at this time.');
  }
}

export async function getStaysAfterDate(date) {
  try {
    const response = await axios.get(`${process.env.backendUrl}/bookings/stays-after-date/${date}`);
    return response.data;
  } catch (error) {
    throw new Error('We are unable to load bookings at this time.');
  }
}

export async function getStaysTodayActivity() {
  try {
    const response = await axios.get(`${process.env.backendUrl}/bookings/today-activity`);
    return response.data;
  } catch (error) {
    throw new Error('We are unable to load bookings at this time.');
  }
}
