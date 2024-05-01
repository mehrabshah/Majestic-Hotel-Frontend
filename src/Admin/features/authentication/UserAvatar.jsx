import { CaretDown } from '@phosphor-icons/react';
import { useCurrentUser } from './hooks/useCurrentUser';

function UserAvatar() {
  const { user } = useCurrentUser();

  // Show first name only
  const firstName = user?.name?.split(' ').at(0);

  return (
    <div className="ml-3 flex h-9 cursor-pointer items-center text-sm font-medium capitalize text-gray-700">
      <img
        src={'https://www.w3schools.com/w3images/avatar2.png'}
        alt={firstName}
        className="mr-2 h-9 w-9 overflow-hidden rounded-full object-cover"
      />
      <div className="flex items-center">
        {firstName && <span className="mr-3">{firstName}</span>}
        <CaretDown size={16} />
      </div>
    </div>
  );
}

export default UserAvatar;
