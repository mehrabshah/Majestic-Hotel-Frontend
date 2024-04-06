import { useState } from 'react';
import toast from 'react-hot-toast';
import { useCurrentUser } from '../../authentication/hooks/useCurrentUser';
import { createEditRoom } from '../../../services/apiRooms';

export function useEditRoom() {
  const { isAdmin } = useCurrentUser();
  const [isEditing, setIsEditing] = useState(false);

  const editRoom = async (data, id) => {
    setIsEditing(true);
    try {
      if (isAdmin) {
        await createEditRoom(data, id);
        toast.success('Room successfully edited.');
      } else {
        throw new Error("You don't have permission.");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsEditing(false);
    }
  };

  return { editRoom, isEditing };
}
