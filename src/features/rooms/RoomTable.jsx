import { useRooms } from './hooks/useRooms';

import Spinner from '../../components/ui/Spinner';
import RoomRow from './RoomRow';
import Table from '../../components/ui/Table';
import { useSearchParams } from 'react-router-dom';

function RoomTable() {
  const { rooms, isLoading } = useRooms();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner className="mx-auto h-6 w-6" />;

  // If there is no rooms data to show
  if (!rooms.length) return <div>No data to show at the moment.</div>;

  // FILTER
  // Get the "discount" parameter value from the URL
  const filterValue = searchParams.get('discount') || 'all';

  // Filter rooms based on filter value (discount value)
  let filteredRooms;
  if (filterValue === 'all') filteredRooms = rooms;
  if (filterValue === 'no-discount')
    filteredRooms = rooms.filter((room) => room.discount === 0);
  if (filterValue === 'with-discount')
    filteredRooms = rooms.filter((room) => room.discount > 0);

  // SORT
  const sortBy = searchParams.get('sortBy') || 'roomName-asc';
  const [field, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;
  const sortedRooms =
    field === 'roomName'
      ? filteredRooms.sort(
          (a, b) => a.roomName.localeCompare(b.roomName) * modifier,
        )
      : filteredRooms.sort((a, b) => (a[field] - b[field]) * modifier);

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>Room Image</Table.Head>
          <Table.Head>Room</Table.Head>
          <Table.Head>Capacity</Table.Head>
          <Table.Head>Price</Table.Head>
          <Table.Head>Discount</Table.Head>
          <Table.Head />
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {sortedRooms.map((room) => (
          <RoomRow room={room} key={room.id} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default RoomTable;
