import { useState } from 'react';
import toast from 'react-hot-toast';
import { useCurrentUser } from '../../authentication/hooks/useCurrentUser';
import { createEditRoom } from '../../../services/apiRooms';

export function useCreateRoom() {
  const { isAdmin } = useCurrentUser();
  const [isCreating, setIsCreating] = useState(false);

  const createRoom = async (data) => {
    setIsCreating(true);
    try {
      if (isAdmin) {
        // Simulate API call for creating a room
        await createEditRoom(data);
        toast.success('Room successfully created.');
        // Invalidate the "rooms" query to refresh room data
      } else {
        throw new Error("You don't have permission.");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsCreating(false);
    }
  };

  return { createRoom, isCreating };
}
