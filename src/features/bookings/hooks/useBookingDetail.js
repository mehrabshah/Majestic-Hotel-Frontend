import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBookingDetail } from '../../../services/apiBookings';

export function useBookingDetail() {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookingDetail = async () => {
      try {
        const bookingData = await getBookingDetail(bookingId);
        setBooking(bookingData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchBookingDetail();

    // Cleanup function
    return () => {
    };
  }, [bookingId]);

  return { booking, isLoading, error };
}
