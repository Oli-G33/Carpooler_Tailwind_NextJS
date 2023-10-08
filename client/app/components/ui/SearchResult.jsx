import React from 'react';

const SearchResult = ({
  driverName,
  driverAvatar,
  availableSeats,
  driverShift
}) => {
  const handleRequest = () => {
    // Add your request handling logic here
    console.log(`Requesting a ride with ${driverName}`);
  };

  return (
    <div className="flex items-center p-4 my-4 mr-4 bg-white shadow-custom rounded-xl">
      <div className="mr-4">
        <img
          src="https://ik.imagekit.io/nk6wikwqs/giphy__1__HzAk8kLlm.webp?updatedAt=1691870981943';"
          alt={`${driverName}'s Avatar`}
          className="rounded-full w-14 h-14"
        />
      </div>

      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{driverName}</h3>
        <p>Available Seats: {availableSeats}</p>
        <p>Shift: {driverShift}</p>

        <button
          onClick={handleRequest}
          className="px-4 mt-2 text-white bg-blue-500 rounded-full md:py-2 hover:bg-blue-800"
        >
          Request
        </button>
      </div>
    </div>
  );
};

export default SearchResult;
