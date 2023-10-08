'use client';
import { useState } from 'react';
import DatePicker from './components/DatePicker';
import SearchResult from './components/ui/SearchResult';

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
  };

  const date = '17/09/2023';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-16 mb-1 bg-gray-100">
      <header className="w-auto py-4 mt-6 text-center text-black bg-white shadow-lg min-w-max rounded-xl headers">
        <h1 className="px-8 text-lg font-semibold md:text-2xl lg:text-3xl">
          Request a Ride
        </h1>
      </header>
      <main className="container flex-grow p-4 mx-auto mt-8">
        <div className="flex flex-col justify-center max-w-screen-xl p-8 mx-auto text-center bg-white shadow-lg lg:flex-row rounded-xl">
          {/* Date Picker (Takes half width on lg screens and above) */}
          <div className="lg:w-1/2">
            <h2 className="mb-6 font-semibold text-m">Choose a Date</h2>
            <DatePicker />
            <button
              className="px-4 py-2 mx-auto mt-6 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-800"
              onClick={handleSearch}
            >
              See availability
            </button>
          </div>

          {/* Search Results Section (Takes the right half on lg screens and above) */}
          {showResults && (
            <div className="mt-8 overflow-y-auto lg:w-1/2 lg:pl-8 max-h-80">
              {' '}
              {/* Adjust max-h-80 as needed */}
              <h2 className="mb-4 text-xl font-semibold">
                Search Results for {date}
              </h2>
              {searchResultsData.map((result, index) => (
                <SearchResult key={index} {...result} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default BookingPage;
