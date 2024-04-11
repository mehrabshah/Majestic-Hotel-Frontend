import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getContactUsById } from '../../../services/apiContactUs';

export function useContactUsDetail() {
  const { contactUsId } = useParams();
  const [contactUs, setContactUs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContactUsDetail = async () => {
      try {
        const contactUsData = await getContactUsById(contactUsId);
        setContactUs(contactUsData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchContactUsDetail();

    // Cleanup function
    return () => {
    };
  }, [contactUsId]);

  return { contactUs, isLoading, error };
}
