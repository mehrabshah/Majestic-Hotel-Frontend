import RoomTable from '../features/rooms/RoomTable';
import RoomTableOperations from '../features/rooms/RoomTableOperations';
import AddRoom from '../features/rooms/components/AddRoom';

function Rooms() {
  return (
    <>
      <div className="mb-10 flex items-center justify-between">
        <span className="text-3xl font-semibold">All rooms</span>

        <div className="flex items-center gap-2">
          <RoomTableOperations />
          <AddRoom />
        </div>
      </div>

      <RoomTable />
    </>
  );
}

export default Rooms;
