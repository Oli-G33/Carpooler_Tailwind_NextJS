'use client';
import { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';
import DatePicker from './components/DatePicker';
import SearchResult from './components/ui/SearchResult';
import autoAnimate from '@formkit/auto-animate';
import { useUser } from './state/UserContext';
import { useTheme } from 'next-themes';
import { MdEmojiTransportation } from 'react-icons/md';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import { MdTrain } from 'react-icons/md';

const searchResultsData = [
  {
    driverName: 'John Doe',
    driverAvatar: 'https://source.unsplash.com/C8Ta0gwPbQg',
    availableSeats: 3,
    driverShift: 'L1'
  },
  {
    driverName: 'Alice Smith',
    driverAvatar: 'https://source.unsplash.com/mEZ3PoFGs_k',
    availableSeats: 2,
    driverShift: 'E2'
  },
  {
    driverName: 'Bob Johnson',
    driverAvatar: 'https://source.unsplash.com/jzz_3jWMzHA',
    availableSeats: 4,
    driverShift: 'E2'
  },
  {
    driverName: 'Emma Davis',
    driverAvatar: 'https://source.unsplash.com/Rm83bxp19RE',
    availableSeats: 1,
    driverShift: 'L1'
  },
  {
    driverName: 'Michael Brown',
    driverAvatar: 'https://source.unsplash.com/rDEOVtE7vOs',
    availableSeats: 2,
    driverShift: 'E2'
  },
  {
    driverName: 'Sophia Wilson',
    driverAvatar:
      'https://source.unsplash.com/a-woman-standing-in-front-of-a-window-with-her-arms-crossed-caOuGgyfu8s',
    availableSeats: 3,
    driverShift: 'E2'
  },
  {
    driverName: 'William White',
    driverAvatar: 'https://source.unsplash.com/iFgRcqHznqg',
    availableSeats: 4,
    driverShift: 'L1'
  },
  {
    driverName: 'Olivia Lee',
    driverAvatar: 'https://source.unsplash.com/tTdC88_6a_I',
    availableSeats: 1,
    driverShift: 'E2'
  },
  {
    driverName: 'James Taylor',
    driverAvatar: 'https://source.unsplash.com/QEgHL8NN7nM',
    availableSeats: 2,
    driverShift: 'L1'
  },
  {
    driverName: 'Mia Martin',
    driverAvatar: 'https://source.unsplash.com/NVRdBAwV2Qo',
    availableSeats: 3,
    driverShift: 'E1'
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
    <div className="flex flex-col items-center justify-center min-h-screen pb-6 bg-gray-100 dark:bg-gray-800">
      <main className="container flex-grow p-4 mx-auto mt-8 mb-0">
        <div className="grid grid-cols-1 gap-8 lg:gap-16 xl:gap-20 md:grid-cols-2">
          <div className="gap-8 md:grid">
            <div className="flex flex-col items-center justify-center p-8 text-center bg-white shadow-lg dark:bg-gray-600 md:h-64 rounded-xl">
              {/* Date Picker (Takes half width on md screens and above) */}
              <h2 className="mb-6 font-sans text-3xl font-semibold text-blue-900 dark:text-gray-100 ">
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
            <div className="justify-center hidden p-8 bg-white shadow-lg md:flex dark:bg-gray-600 rounded-xl">
              <div>
                <p className="font-sans text-2xl italic font-semibold text-blue-900 dark:text-gray-200">
                  Ready for some stress-free commuting? Hop in and let our
                  drivers take care of the ride. Book your trip now and
                  let&apos;s get you there!
                </p>
                <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-400 lg:my-8" />
                <div className="flex items-center place-content-evenly">
                  <div className="hover:animate-bounce">
                    <MdEmojiTransportation size="48px" color="#e74c3c" />
                  </div>
                  <div className="hover:animate-bounce">
                    <HiOutlineRocketLaunch size="48px" color="#3498db" />
                  </div>
                  <div className="hover:animate-bounce">
                    <MdTrain size="48px" color="#2ecc71" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={parent}
            className="max-w-screen-xl mt-4 duration-300 ease-in-out bg-white shadow-lg md:h-64 md:mt-0 rounded-xl dark:bg-gray-600 transition-height"
          >
            <h2 className="p-4 font-sans text-base font-semibold text-center text-blue-900 rounded-xl dark:text-gray-200 md:text-2xl">
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
