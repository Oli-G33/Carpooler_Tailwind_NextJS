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
    driverName: 'Bob Johnson',
    driverAvatar: 'avatar-url-3.jpg',
    availableSeats: 4,
    driverShift: 'Afternoon Shift'
  },
  {
    driverName: 'Emma Davis',
    driverAvatar: 'avatar-url-4.jpg',
    availableSeats: 1,
    driverShift: 'Night Shift'
  },
  {
    driverName: 'Michael Brown',
    driverAvatar: 'avatar-url-5.jpg',
    availableSeats: 2,
    driverShift: 'Morning Shift'
  },
  {
    driverName: 'Sophia Wilson',
    driverAvatar: 'avatar-url-6.jpg',
    availableSeats: 3,
    driverShift: 'Evening Shift'
  },
  {
    driverName: 'William White',
    driverAvatar: 'avatar-url-7.jpg',
    availableSeats: 4,
    driverShift: 'Afternoon Shift'
  },
  {
    driverName: 'Olivia Lee',
    driverAvatar: 'avatar-url-8.jpg',
    availableSeats: 1,
    driverShift: 'Night Shift'
  },
  {
    driverName: 'James Taylor',
    driverAvatar: 'avatar-url-9.jpg',
    availableSeats: 2,
    driverShift: 'Morning Shift'
  },
  {
    driverName: 'Mia Martin',
    driverAvatar: 'avatar-url-10.jpg',
    availableSeats: 3,
    driverShift: 'Evening Shift'
  }
];

const BookingPage = () => {
  const [showResults, setShowResults] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const handleSearch = () => {
    // Perform the search (You can fetch data or process it here)
    // For this example, we'll just toggle the results visibility
    setShowResults(true);
    setShow(!show);
  };

  const originalDate = new Date(selectedDate);
  const day = originalDate.getDate();
  const month = originalDate.getMonth() + 1;
  const year = originalDate.getFullYear();

  const formattedDay = day.toString().padStart(2, '0');
  const formattedMonth = month.toString().padStart(2, '0');

  const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;

  const [show, setShow] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current, { duration: 350 });
  }, [parent]);

  const handleDateSelect = date => {
    setSelectedDate(date);
  };

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
            <DatePicker
              selectedDate={selectedDate}
              onDateSelect={handleDateSelect}
            />
            <button
              className="px-4 py-2 mx-auto mt-6 font-semibold text-white transition duration-300 ease-in-out delay-150 bg-blue-500 rounded-full hover:-translate-y-1 hover:scale-110 hover:bg-blue-800"
              onClick={handleSearch}
            >
              See availability
            </button>
          </div>
          <div
            ref={parent}
            className="max-w-screen-xl mt-4 bg-white shadow-lg md:mt-0 rounded-xl"
          >
            <h2 className="p-4 text-base font-semibold text-center border-b md:text-xl">
              {selectedDate
                ? `Search Results for ${formattedDate}`
                : 'No date selected'}
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
