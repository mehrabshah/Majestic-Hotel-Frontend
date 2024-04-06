import { useState } from 'react';
import toast from 'react-hot-toast';
import { updateBooking } from '../../../services/apiBookings';
import { useCurrentUser } from '../../authentication/hooks/useCurrentUser';

export function useCheckout() {
  const { isAdmin } = useCurrentUser();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const checkout = async (bookingId) => {
    setIsCheckingOut(true);
    try {
      if (isAdmin) {
        // Simulate API call for updating booking status to "checked-out"
        await updateBooking(bookingId, { status: 'checked-out' });
        toast.success(`Booking #${bookingId} successfully checked out.`);
      } else {
        throw new Error("You don't have permission.");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsCheckingOut(false);
    }
  };

  return { checkout, isCheckingOut };
}
