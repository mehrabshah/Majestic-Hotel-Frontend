import Filter from '../../components/ui/Filter';
import SortBy from '../../components/ui/SortBy';

function RoomTableOperations() {
  return (
    <div className="flex items-center gap-2">
      <Filter
        searchParameterName="discount"
        options={[
          { value: 'all', label: 'All rooms' },
          { value: 'no-discount', label: 'No discount' },
          { value: 'with-discount', label: 'With discount' },
        ]}
      />

      <SortBy
        searchParameterName="sortBy"
        options={[
          { value: 'roomName-asc', label: 'Sort by name (A-Z)' },
          { value: 'roomName-desc', label: 'Sort by name (Z-A)' },
          { value: 'regularPrice-asc', label: 'Sort by price (low first)' },
          { value: 'regularPrice-desc', label: 'Sort by price (high first)' },
          { value: 'maxCapacity-asc', label: 'Sort by capacity (low first)' },
          { value: 'maxCapacity-desc', label: 'Sort by capacity (high first)' },
        ]}
      />
    </div>
  );
}

export default RoomTableOperations;
