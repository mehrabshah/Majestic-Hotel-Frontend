import axios from 'axios';

export async function getBookings({ filter, sortBy, page }) {
  try {
    const response = await axios.get(`${process.env.backendUrl}/bookings`, {
      params: { filter, sortBy, page },
    });
    return response.data;
  } catch (error) {
    throw new Error('We are unable to load bookings at this time.');
  }
}

export async function getBookingDetail(id) {
  try {
    const response = await axios.get(`${process.env.backendUrl}/bookings/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('We are unable to find booking at this time.');
  }
}

export async function updateBooking(id, dataObj) {
  try {
    const response = await axios.put(`${process.env.backendUrl}/bookings/${id}`, dataObj);
    return response.data;
  } catch (error) {
    throw new Error('We are unable to update booking at this time.');
  }
}

export async function deleteBooking(id) {
  try {
    await axios.delete(`${process.env.backendUrl}/bookings/${id}`);
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
