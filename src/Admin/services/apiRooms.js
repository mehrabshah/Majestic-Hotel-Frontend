import axios from 'axios';

export async function getRooms() {
  try {
    const response = await axios.get(`${process.env.backendUrl}/rooms`);
    return response.data;
  } catch (error) {
    throw new Error('We are unable to load rooms at this time.');
  }
}

export async function createEditRoom(newRoomData, editRoomId) {
  try {
    let queryUrl = `${process.env.backendUrl}/rooms`;
    let method = 'post';

    // If editRoomId is provided, update the room
    if (editRoomId) {
      queryUrl += `/${editRoomId}`;
      method = 'put';
    }

    const response = await axios[method](queryUrl, newRoomData);

    return response.data;
  } catch (error) {
    throw new Error('We are unable to create/edit room at this time.');
  }
}

export async function deleteRoom(id) {
  try {
    await axios.delete(`${process.env.backendUrl}/rooms/${id}`);
  } catch (error) {
    throw new Error('We are unable to delete room at this time.');
  }
}
