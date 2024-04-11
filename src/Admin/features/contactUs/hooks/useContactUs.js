import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { getAllContactUs } from '../../../services/apiContactUs';

export function useContactUs() {
  const [contactUsEntries, setContactUsEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchContactUsEntries = async () => {
      setIsLoading(true);
      try {
        const data = await getAllContactUs();
        setContactUsEntries(data);
      } catch (error) {
        toast.error('Failed to fetch contact us entries. Please try again later.');
      }
      setIsLoading(false);
    };

    fetchContactUsEntries();
  }, []);

  return { contactUsEntries, isLoading };
}
