import axios from 'axios';

const backendUrl = "http://localhost:8000/"
// const backendUrl = process.env.backendUrl;

/**
 * Sign up user
 * @returns user data
 */
export async function signUp({ name, email, password }) {
  try {
    const response = await axios.post(`${backendUrl}/signup`, { name, email, password });
    return response.data;
  } catch (error) {
    throw new Error('We are unable to create user at this time.');
  }
}

/**
 * Log In With Email/Password
 * @returns user data
 */
export async function login({ email, password }) {
  try {
    const response = await axios.post(`${backendUrl}auth/login`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error('Either email or password is incorrect.');
  }
}

/**
 * Validate current user
 * @returns user data
 */
export async function getCurrentUser() {
  // Check if user data exists in localStorage
  const userData = JSON.parse(localStorage.getItem('userData'));
  if (userData) return userData;

  // If user data doesn't exist in localStorage, fetch from backend
  try {
    const response = await axios.get(`${backendUrl}/user`);
    const user = response.data;
    // Store user data in localStorage
    localStorage.setItem('userData', JSON.stringify(user));
    return user;
  } catch (error) {
    throw new Error('Unable to fetch user data.');
  }
}

/**
 * Logout user
 */
export async function logout() {
  // Clear user data from localStorage
  localStorage.removeItem('userData');
}

/**
 * Update user data
 * @returns user data
 */
export async function updateCurrentUser({ name, avatar, password }) {
  try {
    const userData = JSON.parse(localStorage.getItem('userData'));
    // Update user data in localStorage
    const updatedUserData = { ...userData, name };
    localStorage.setItem('userData', JSON.stringify(updatedUserData));
    return updatedUserData;
  } catch (error) {
    throw new Error('We are unable to update user at this time.');
  }
}
