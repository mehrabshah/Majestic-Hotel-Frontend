import { useNavigate } from 'react-router-dom';
import { format, isToday, parseISO } from 'date-fns';
import {
  ArrowRight,
  DotsThreeOutline,
  DownloadSimple,
  Eye,
  Trash,
  UploadSimple,
} from '@phosphor-icons/react';
import { formatCurrency, formatDistanceFromNow } from '../../utils/helpers';
import Table from '../../components/ui/Table';
import Badge from '../../components/ui/Badge';
import DropdownMenu from '../../components/ui/DropdownMenu';
import Modal from '../../components/ui/Modal';
import { useCheckout } from '../checkInOut/hooks/useCheckout';
import ConfirmDelete from '../../components/ui/ConfirmDelete';
import { useDeleteBooking } from './hooks/useDeleteBooking';

function BookingRow({ booking }) {
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();
  const navigate = useNavigate();

  // const {
  //   id: bookingId,
  //   startDate,
  //   endDate,
  //   numNights,
  //   totalPrice,
  //   status,
  //   cabins: { cabinName },
  //   guests: { name: guestName, email: guestEmail },
  // } = booking;


  const {
    firstName,
    lastName,
    phoneNumber,
    postalCode,
    emailAddress,
    orderId,
    countryRegionCode,
    city,
    categories
  } =booking;


  const statusBadge = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  };

  return (
    <Table.Row>
      <Table.Cell>
        <span>{firstName}{" "}{lastName}</span>
      </Table.Cell>

      <Table.Cell>
        <span>{emailAddress}</span>
      </Table.Cell>

      <Table.Cell>
        <span>{phoneNumber}</span>
      </Table.Cell>

      <Table.Cell>
        <span>{city}</span>
      </Table.Cell>    
    </Table.Row>
   
  );
}

export default BookingRow;
