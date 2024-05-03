import Table from '../../components/ui/Table';
import BookingRow from './BookingRow';
import Spinner from '../../components/ui/Spinner';
import Pagination from '../../components/ui/Pagination';
import { useBookings } from './hooks/useBookings';

function BookingTable() {
  const { booking, isLoading, error } = useBookings()


  if (isLoading) return <Spinner className="mx-auto h-6 w-6" />;

  //If there is no bookings data to show
  if (!booking.length) return <div>No data to show at the moment.</div>;

  return (
    <>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Email</Table.Head>
            <Table.Head>Phone</Table.Head>
            <Table.Head>City</Table.Head>
            <Table.Head />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {booking.map((booking) => (
            <BookingRow booking={booking} key={booking.id} />
          ))}
        </Table.Body>
      </Table>

      {/* <Pagination countRows={count} /> */}
    </>
  );
}

export default BookingTable;
