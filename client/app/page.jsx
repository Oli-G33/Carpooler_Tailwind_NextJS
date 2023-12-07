'use client';
import { useState, useRef, useEffect } from 'react';
import DatePicker from './components/DatePicker';
import SearchResult from './components/ui/SearchResult';
import autoAnimate from '@formkit/auto-animate';
import { useUser } from './state/UserContext';
import { useTheme } from 'next-themes';

const searchResultsData = [
  {
    driverName: 'John Doe',
    driverAvatar: 'https://source.unsplash.com/C8Ta0gwPbQg',
    availableSeats: 3,
    driverShift: 'Morning Shift'
  },
  {
    driverName: 'Alice Smith',
    driverAvatar: 'https://source.unsplash.com/mEZ3PoFGs_k',
    availableSeats: 2,
    driverShift: 'Evening Shift'
  },
  {
    driverName: 'Bob Johnson',
    driverAvatar: 'https://source.unsplash.com/jzz_3jWMzHA',
    availableSeats: 4,
    driverShift: 'Afternoon Shift'
  },
  {
    driverName: 'Emma Davis',
    driverAvatar: 'https://source.unsplash.com/Rm83bxp19RE',
    availableSeats: 1,
    driverShift: 'Night Shift'
  },
  {
    driverName: 'Michael Brown',
    driverAvatar: 'https://source.unsplash.com/rDEOVtE7vOs',
    availableSeats: 2,
    driverShift: 'Morning Shift'
  },
  {
    driverName: 'Sophia Wilson',
    driverAvatar:
      'https://source.unsplash.com/a-woman-standing-in-front-of-a-window-with-her-arms-crossed-caOuGgyfu8s',
    availableSeats: 3,
    driverShift: 'Evening Shift'
  },
  {
    driverName: 'William White',
    driverAvatar: 'https://source.unsplash.com/iFgRcqHznqg',
    availableSeats: 4,
    driverShift: 'Afternoon Shift'
  },
  {
    driverName: 'Olivia Lee',
    driverAvatar: 'https://source.unsplash.com/tTdC88_6a_I',
    availableSeats: 1,
    driverShift: 'Night Shift'
  },
  {
    driverName: 'James Taylor',
    driverAvatar: 'https://source.unsplash.com/QEgHL8NN7nM',
    availableSeats: 2,
    driverShift: 'Morning Shift'
  },
  {
    driverName: 'Mia Martin',
    driverAvatar: 'https://source.unsplash.com/NVRdBAwV2Qo',
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
  };

  const { user, setUser } = useUser();
  const { theme } = useTheme();

  const originalDate = new Date(selectedDate);
  const day = originalDate.getDate();
  const month = originalDate.getMonth() + 1;
  const year = originalDate.getFullYear();

  const formattedDay = day.toString().padStart(2, '0');
  const formattedMonth = month.toString().padStart(2, '0');

  const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;

  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current, { duration: 350 });
  }, [parent]);

  const handleDateSelect = date => {
    setSelectedDate(date);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen mt-16 dark:bg-gray-800  bg-gray-100
      `}
    >
      {/* <header className="w-auto py-4 mt-6 text-center text-black bg-white shadow-lg min-w-max rounded-xl headers">
        <h1 className="px-8 text-lg font-semibold md:text-2xl lg:text-3xl">
          Request a Ride
        </h1>
      </header> */}
      <main className="container flex-grow p-4 mx-auto mt-8 mb-0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div
            className={`flex flex-col items-center justify-center p-8 text-center ${
              theme === 'dark' ? 'bg-gray-600' : 'bg-white'
            }  shadow-lg md:h-64 rounded-xl`}
          >
            {/* Date Picker (Takes half width on md screens and above) */}
            <h2
              className={`mb-6 font-sans text-xl font-semibold ${
                theme === 'dark' ? 'text-gray-100' : 'text-blue-900'
              } `}
            >
              Choose a Date
            </h2>
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
            className="max-w-screen-xl mt-4 bg-white shadow-lg md:mt-0 rounded-xl dark:bg-gray-600"
          >
            <h2 className="p-4 font-sans text-base font-semibold text-center text-blue-900 rounded-xl dark:text-gray-200 md:text-xl">
              {selectedDate
                ? `Search Results for ${formattedDate}`
                : 'No date selected'}
            </h2>

            {showResults && (
              <div
                className={`mt-2 dark:mt-0 overflow-y-auto md:p-8 max-h-96 custom-scrollbar ${
                  theme === 'dark' ? 'bg-gray-600' : 'bg-white'
                } ${
                  theme === 'dark' ? 'background-img-dark' : 'background-img'
                } `}
              >
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
