import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { createContactUs } from '../../../../../Admin/services/apiContactUs'; 

export function useContactUs(setRefreshReCaptcha,refreshReCaptcha) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  

  const submitContactUs = async (data) => {
    setIsLoading(true);
    try {
        await createContactUs(data);
        toast.success('Your message has been sent successfully!');
        navigate('/home');
        setRefreshReCaptcha(!refreshReCaptcha);
      } catch (error) {
        toast.error('Failed to send message. Please try again later.');
      }
    setIsLoading(false);
  };

  return { submitContactUs, isLoading };
}
