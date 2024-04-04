import { useRecentBookings } from './hooks/useRecentBookings';
import Spinner from '../../components/ui/Spinner';
import useRecentStays from './hooks/useRecentStays';
import Stats from './Stats';
import { useRooms } from '../rooms/hooks/useRooms';
import SalesAreaChart from './SalesAreaChart';
import StayDurationPieChart from './StayDurationPieChart';
import TodayActivity from '../checkInOut/TodayActivity';

function DashboardLayout() {
  const { bookings, isLoading: isLoadingStats } = useRecentBookings();
  const {
    isLoading: isLoadingStays,
    confirmedStays,
    numDays,
  } = useRecentStays();
  const { rooms, isLoading: isLoadingRooms } = useRooms();

  

  if (isLoadingStats || isLoadingStays || isLoadingRooms)
    return <Spinner className="mx-auto h-6 w-6" />;

  return (
    <div className="grid grid-cols-4 grid-rows-[auto_340px_auto] gap-10">
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        roomCount={rooms.length}
      />
      <TodayActivity />
      <StayDurationPieChart confirmedStays={confirmedStays} />
      <SalesAreaChart bookings={bookings} numDays={numDays} />
    </div>
  );
}

export default DashboardLayout;
