import { useState } from 'react';
import toast from 'react-hot-toast';
import { signUp as signUpApi } from '../../../services/apiAuth';
import { useCurrentUser } from './useCurrentUser';

export function useSignUp() {
  const { isAdmin } = useCurrentUser();
  const [isLoading, setIsLoading] = useState(false);

  const signUp = async (data) => {
    setIsLoading(true);
    try {
      if (isAdmin) {
        await signUpApi(data);
        toast.success('Please verify email address for Oasis Resort');
      } else {
        throw new Error("You don't have permission.");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { signUp, isLoading };
}
