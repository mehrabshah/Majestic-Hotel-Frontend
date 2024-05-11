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
  const { deleteBooking, isDeleting } = useDeleteBooking();
  const navigate = useNavigate();

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
      <Table.Cell>
        <span>{ postalCode}</span>
      </Table.Cell>  
      <Table.Cell>
        <span>{countryRegionCode}</span>
      </Table.Cell>  
      <Table.Cell>
      <DropdownMenu>
          <Modal>
            <DropdownMenu.Toggle toggleName={orderId}>
              <DotsThreeOutline size={20} weight="fill" />
            </DropdownMenu.Toggle>

            <DropdownMenu.Content windowName={orderId}>
              {/* See details */}
              <DropdownMenu.Item
                icon={<Eye size={20} />}
                onClick={() => navigate(`/bookings/${orderId}`)}
              >
                See details 
              </DropdownMenu.Item>

              <DropdownMenu.Item
                icon={<Eye size={20} />}
                onClick={() => navigate(`/editBookings/${orderId}`)}
              >
                Edit details 
              </DropdownMenu.Item>


              {/* Delete contactUs */}
              <Modal.Toggle toggleName="delete-booking">
                <DropdownMenu.Item icon={<Trash size={20} />}>
                  Delete Booking
                </DropdownMenu.Item>
              </Modal.Toggle>
            </DropdownMenu.Content>

            <Modal.Window windowName="delete-booking">
              <ConfirmDelete
                resourceName="contactUs"
                disabled={isDeleting}
                onConfirm={() => deleteBooking(orderId)}
              />
            </Modal.Window>
          </Modal>
        </DropdownMenu>
      </Table.Cell>
      
    </Table.Row>
   
  );
}

export default BookingRow;
