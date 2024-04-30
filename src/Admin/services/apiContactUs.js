import axios from 'axios';
const backendUrl = process.env.REACT_APP_BACKEND_URL;
export async function createContactUs(contactUsData) {
  try {
    const response = await axios.post(`${backendUrl}contactUs/createContactUs`, contactUsData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create contact us entry.');
  }
}

export async function getAllContactUs() {
  try {
    const response = await axios.get(`${backendUrl}contactUs/getAllContactUs`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch contact us entries.');
  }
}

export async function getContactUsById(id) {
  try {
    const response = await axios.get(`${backendUrl}contactUs/contact-us/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch contact us entry.');
  }
}

export async function updateContactUsById(id, updatedContactUsData) {
  try {
    const response = await axios.put(`${backendUrl}contactUs/contact-us/${id}`, updatedContactUsData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update contact us entry.');
  }
}

export async function deleteContactUsById(id) {
  try {
    await axios.delete(`${backendUrl}contactUs/contact-us/${id}`);
  } catch (error) {
    throw new Error('Failed to delete contact us entry.');
  }
}
