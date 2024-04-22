import axios from 'axios';
const backendUrl = "http://localhost:8000/"
export async function signUp({ name, email, password }) {
  try {
    const response = await axios.post(`${process.env.backendUrl}/signup`, {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error('We are unable to create user at this time.');
  }
}

export async function login({ email, password }) {
  try {
    const response = await axios.post(`${process.env.backendUrl}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error('Either email or password is incorrect.');
  }
}

export async function getCurrentUser() {
  try {
    const response = await axios.get(`${process.env.backendUrl}/user`);
    return response.data.user;
  } catch (error) {
    throw new Error(error.message);
  }
}
export async function getCategories() {
  try {
    const response = await axios.get(`${backendUrl}category/getAllCategory`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function logout() {
  try {
    await axios.post(`${process.env.backendUrl}/logout`);
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateCurrentUser({ name, avatar, password }) {
  try {
    const updateData = {};
    if (password) updateData.password = password;
    if (name) updateData.name = name;

    const response = await axios.put(`${process.env.backendUrl}/user`, updateData);
    let updatedUser = response.data;

    if (avatar) {
      const avatarName = `avatar-${new Date().getTime()}`;
      const avatarFormData = new FormData();
      avatarFormData.append('avatar', avatar);

      await axios.post(`${process.env.backendUrl}/avatar/upload`, avatarFormData);

      updatedUser.avatar = `${process.env.backendUrl}/avatar/${avatarName}`;
    }

    return updatedUser;
  } catch (error) {
    throw new Error('We are unable to update user at this time.');
  }
}
export async function updateRooms(data) {
  try {
    console.log(data)
     const response = await axios.put(`${backendUrl}category/categoriesPriceUpdate`, data);
return response
  } catch (error) {
    throw new Error('We are unable to update user at this time.');
  }
}
