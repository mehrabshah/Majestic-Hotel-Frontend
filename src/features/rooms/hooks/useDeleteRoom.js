import { useState } from 'react';
import toast from 'react-hot-toast';
import { useCurrentUser } from '../../authentication/hooks/useCurrentUser';
import { deleteRoom as deleteRoomApi } from '../../../services/apiRooms';

export function useDeleteRoom() {
  const { isAdmin } = useCurrentUser();
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteRoom = async (roomId) => {
    setIsDeleting(true);
    try {
      if (isAdmin) {
        await deleteRoomApi(roomId);
        toast.success('Room successfully deleted.');
      } else {
        throw new Error("You don't have permission.");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsDeleting(false);
    }
  };

  return { deleteRoom, isDeleting };
}
