import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/app/state/UserContext';

const SearchResult = ({
  driverName,
  driverAvatar,
  availableSeats,
  driverShift
}) => {
  const router = useRouter();
  const { user } = useUser();

  const handleRequest = () => {
    // Add the request handling logic here
    console.log(`Requesting a ride with ${driverName}`);
    router.push(user ? '/success' : '/auth');
  };

  return (
    <div className="flex items-center p-4 mx-4 my-2 bg-white dark:bg-slate-400 shadow-custom rounded-xl">
      <div
        className="mr-4"
        style={{ position: 'relative', width: '50px', height: '50px' }}
      >
        <Image
          src={driverAvatar}
          alt={`${driverName}'s Avatar`}
          className="w-10 h-10 border rounded-full ring-2 md:w-14 md:h-14"
          fill
          sizes="(max-width: 640px) 50px, (max-width: 768px) 100px, 200px"
          style={{
            objectFit: 'cover'
          }}
        />
      </div>

      <div className="flex-grow mr-1">
        <h3 className="text-base font-semibold text-blue-500 dark:text-blue-600 lg:text-lg">
          {driverName}
        </h3>
        <p className="text-xs font-light dark:text-gray-100 lg:text-base">
          Available: {availableSeats} Seats
        </p>
        <p className="text-xs font-light lg:text-base">Shift: {driverShift}</p>
      </div>
      <button
        onClick={handleRequest}
        className="px-4 text-white duration-150 bg-blue-500 rounded-full w-14 md:py-0 md:px-0 md:mt-0 md:w-18 lg:w-24 hover:bg-blue-800"
      >
        <span className="text-xs lg:text-base">Book</span>
      </button>
    </div>
  );
};

export default SearchResult;
