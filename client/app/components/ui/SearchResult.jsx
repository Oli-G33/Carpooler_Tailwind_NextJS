import React from 'react';

const SearchResult = ({
  driverName,
  driverAvatar,
  availableSeats,
  driverShift
}) => {
  const handleRequest = () => {
    // Add the request handling logic here
    console.log(`Requesting a ride with ${driverName}`);
  };

  return (
    <div className="flex items-center p-4 mx-4 my-2 bg-white shadow-custom rounded-xl">
      <div className="mr-4">
        <img
          src="https://ik.imagekit.io/nk6wikwqs/giphy__1__HzAk8kLlm.webp?updatedAt=1691870981943';"
          alt={`${driverName}'s Avatar`}
          className="w-10 h-10 border rounded-full md:w-14 md:h-14"
        />
      </div>

      <div className="flex-grow mr-1">
        <h3 className="text-base font-semibold text-blue-500 lg:text-lg">
          {driverName}
        </h3>
        <p className="text-xs font-light lg:text-base">
          Available: {availableSeats} Seats
        </p>
        <p className="text-xs font-light lg:text-base">Shift: {driverShift}</p>
      </div>
      <button
        onClick={handleRequest}
        className="px-4 mt-2 text-white duration-150 bg-blue-500 rounded-full w-14 md:py-2 md:px-0 md:mt-0 md:w-18 lg:w-28 hover:bg-blue-800"
      >
        <span className="text-xs lg:text-base">Book</span>
      </button>
    </div>
  );
};

export default SearchResult;
