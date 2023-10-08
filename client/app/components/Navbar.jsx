'use client';
import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuButtonRef = useRef(null);

  const toggleShowUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        userMenuButtonRef.current &&
        !userMenuButtonRef.current.contains(event.target)
      ) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 shadow-md dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto ">
          <a href="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Carpooler
            </span>
          </a>
          <div className="relative flex items-center md:order-2">
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded={showUserMenu ? 'true' : 'false'}
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
              onClick={toggleShowUserMenu}
              ref={userMenuButtonRef}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-10 h-10 border rounded-full hover:ring-4 hover:ring-gray-400 dark:hover:ring-gray-800"
                src="https://ik.imagekit.io/nk6wikwqs/giphy__1__HzAk8kLlm.webp?updatedAt=1691870981943';"
                alt="user photo"
              />
            </button>
            {/* <!-- Dropdown menu --> */}
            {showUserMenu && (
              <>
                <div
                  className="absolute my-4 mt-64 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow right-2 dark:bg-gray-700 dark:divide-gray-600"
                  id="user-dropdown"
                  style={{ zIndex: 50 }}
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      Bonnie Green
                    </span>
                    <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                      name@flowbite.com
                    </span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            )}
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Book
                </a>
              </li>
              <li>
                <a
                  href="myRides"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  MyRides
                </a>
              </li>
              <li>
                <a
                  href="dashboard"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="terms"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
