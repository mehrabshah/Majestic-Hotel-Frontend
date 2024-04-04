import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useCurrentUser } from '../../authentication/hooks/useCurrentUser';
import { deleteBooking as deleteBookingApi } from '../../../services/apiBookings';

export function useDeleteBooking() {
  const { isAdmin } = useCurrentUser();
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteBooking = async (bookingId) => {
    setIsDeleting(true);
    try {
      if (isAdmin) {
        // Simulate API call for deleting a booking
        await deleteBookingApi(bookingId);
        toast.success('Booking successfully deleted.');
        navigate('/bookings');
      } else {
        throw new Error("You don't have permission.");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsDeleting(false);
    }
  };

  return { deleteBooking, isDeleting };
}
