import { useState } from 'react';
import toast from 'react-hot-toast';
import { useCurrentUser } from './useCurrentUser';
import { updateCurrentUser } from '../../../services/apiAuth';

export function useUpdateUser() {
  const { isAdmin } = useCurrentUser();
  const [isUpdating, setIsUpdating] = useState(false);

  const updateUser = async (data) => {
    setIsUpdating(true);
    try {
      if (isAdmin) {
        // Simulate API call for updating the current user's account
        const updatedUserData = await updateCurrentUser(data);
        toast.success('User account successfully updated');
      } else {
        throw new Error("You don't have permission.");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsUpdating(false);
    }
  };

  return { updateUser, isUpdating };
}
