import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useCurrentUser } from '../../authentication/hooks/useCurrentUser';
import { deleteContactUsById as deleteContactUsApi } from '../../../services/apiContactUs';

export function useDeleteContactUs() {
  const { isAdmin } = useCurrentUser();
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteContactUs = async (contactUsId) => {
    setIsDeleting(true);
    try {
      if (isAdmin) {
        // Simulate API call for deleting a contactUs
        await deleteContactUsApi(contactUsId);
        toast.success('ContactUs successfully deleted.');
        navigate('/contactUs');
      } else {
        throw new Error("You don't have permission.");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsDeleting(false);
    }
  };

  return { deleteContactUs, isDeleting };
}
