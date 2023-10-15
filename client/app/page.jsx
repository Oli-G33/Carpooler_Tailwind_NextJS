'use client';
import { useState, useRef, useEffect } from 'react';
import DatePicker from './components/DatePicker';
import SearchResult from './components/ui/SearchResult';
import autoAnimate from '@formkit/auto-animate';

const searchResultsData = [
  {
    driverName: 'John Doe',
    driverAvatar: 'avatar-url-1.jpg',
    availableSeats: 3,
    driverShift: 'Morning Shift'
  },
  {
    driverName: 'Alice Smith',
    driverAvatar: 'avatar-url-2.jpg',
    availableSeats: 2,
    driverShift: 'Evening Shift'
  },
  {
    driverName: 'John Doe',
    driverAvatar: 'avatar-url-1.jpg',
    availableSeats: 3,
    driverShift: 'Morning Shift'
  },
  {
    driverName: 'Alice Smith',
    driverAvatar: 'avatar-url-2.jpg',
    availableSeats: 2,
    driverShift: 'Evening Shift'
  }
];

const BookingPage = () => {
  const [showResults, setShowResults] = useState(false); // State to toggle search results visibility

  const handleSearch = () => {
    // Perform the search (You can fetch data or process it here)
    // For this example, we'll just toggle the results visibility
    setShowResults(true);
    setShow(!show);
  };

  const [show, setShow] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current, { duration: 350 });
  }, [parent]);

  const date = '18/09/2023';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-16 mb-1 bg-gray-100">
      {/* <header className="w-auto py-4 mt-6 text-center text-black bg-white shadow-lg min-w-max rounded-xl headers">
        <h1 className="px-8 text-lg font-semibold md:text-2xl lg:text-3xl">
          Request a Ride
        </h1>
      </header> */}
      <main className="container flex-grow p-4 mx-auto mt-8 mb-0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center p-8 text-center bg-white shadow-lg md:h-64 rounded-xl">
            {/* Date Picker (Takes half width on md screens and above) */}
            <h2 className="mb-6 text-xl font-semibold">Choose a Date</h2>
            <DatePicker />
            <button
              className="px-4 py-2 mx-auto mt-6 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-800"
              onClick={handleSearch}
            >
              See availability
            </button>
          </div>
          <div
            ref={parent}
            className="max-w-screen-xl mt-4 bg-white shadow-lg md:mt-0 rounded-xl"
          >
            <h2 className="p-4 text-base font-semibold text-center md:text-xl ">
              Search Results for {date}
            </h2>

            {showResults && (
              <div className="py-4 mt-2 overflow-y-auto md:p-8 max-h-96 custom-scrollbar ">
                {searchResultsData.map((result, index) => (
                  <SearchResult key={index} {...result} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookingPage;
