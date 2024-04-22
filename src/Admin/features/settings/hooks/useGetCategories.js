import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { getCategories } from '../../../services/apiSettings';
import { useCurrentUser } from '../../authentication/hooks/useCurrentUser';

export function useGetCategories(setIsLoading) {
  const { isAdmin } = useCurrentUser();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setIsLoading(true)
    async function fetchData() {
      try {
        if (isAdmin) {
          const cat = await getCategories();
          setCategories(cat);
        } else {
          throw new Error("You don't have permission.");
        }
        setIsLoading(false)
      } catch (error) {
        toast.error(error.message);
      }
    }

    fetchData();
  }, [isAdmin]);

  return { categories };
}