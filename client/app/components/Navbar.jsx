'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Avatar } from '@nextui-org/avatar';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showTopbarMenu, setShowTopbarMenu] = useState(false);

  const userMenuButtonRef = useRef(null);
  const topbarButtonRef = useRef(null);
  const topbarMenuRef = useRef(null);

  const toggleShowUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  const toggleShowTopbarMenu = () => {
    setShowTopbarMenu(!showTopbarMenu);
  };

  const closeTopbarMenu = () => {
    setShowTopbarMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        userMenuButtonRef.current &&
        !userMenuButtonRef.current.contains(event.target)
      ) {
        setShowUserMenu(false);
      }

      if (
        topbarButtonRef.current &&
        topbarMenuRef.current &&
        !topbarButtonRef.current.contains(event.target) &&
        !topbarMenuRef.current.contains(event.target)
      ) {
        closeTopbarMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const buttonVariants = {
    active: {
      rotate: 180
    },
    inactive: {
      rotate: 0
    }
  };

  return (
    <div>
      <nav className="fixed top-0 z-20 w-full bg-white border-b border-gray-200 shadow-md dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto ">
          <a href="/" className="flex items-center">
            <Avatar
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
              width="50"
              height="50"
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
              style={{ position: 'relative', width: '40px', height: '40px' }}
            >
              <span className="sr-only">Open user menu</span>
              <Image
                className="w-10 h-10 rounded-full ring-4 ring-gray-200 hover:ring-blue-200 dark:hover:ring-gray-800"
                src="https://ik.imagekit.io/nk6wikwqs/giphy__1__HzAk8kLlm.webp?updatedAt=1691870981943';"
                alt="user photo"
                fill
                sizes="(max-width: 640px) 50px, (max-width: 768px) 100px, 200px"
                style={{
                  objectFit: 'cover'
                }}
              />
            </button>
            {/* <!-- Dropdown menu --> */}
            <AnimatePresence>
              {showUserMenu && (
                <>
                  <motion.div
                    initial={{ opacity: 0, height: 200 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 200 }}
                    transition={{ duration: 0.1 }}
                    className="absolute my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow mt-60 right-2 dark:bg-gray-700 dark:divide-gray-600"
                    id="user-dropdown"
                    style={{ zIndex: 999 }}
                  >
                    <div className="px-4 py-3">
                      <span className="block text-sm text-gray-900 dark:text-white">
                        Oliver Garcia
                      </span>
                      <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                        oliver.garcia@thomann.de
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
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={toggleShowTopbarMenu}
              ref={topbarButtonRef}
            >
              <span className="sr-only">Open main menu</span>
              <motion.svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
                variants={buttonVariants}
                animate={showTopbarMenu ? 'active' : 'inactive'}
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </motion.svg>
            </button>
          </div>
          <AnimatePresence>
            {showTopbarMenu && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                ref={topbarMenuRef}
                className={`absolute left-0 w-full text-base list-none  bg-white shadow top-full md:hidden dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul className="flex flex-col p-4 font-medium bg-white border border-gray-100 rounded-lg md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <a
                      href="/"
                      className="block py-2 pl-3 pr-4 rounded focus:text-red-600 focus:bg-blue-100 md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      aria-current="page"
                    >
                      Book
                    </a>
                  </li>
                  <li>
                    <a
                      href="myRides"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded focus:bg-blue-100 focus:text-red-600 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      MyRides
                    </a>
                  </li>
                  <li>
                    <a
                      href="dashboard"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded focus:bg-blue-100 focus:text-red-600 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="terms"
                      className="focus:bg-blue-100 focus:text-red-600 block py-2 pl-3 pr-4 text-gray-900 rounded hover.bg-gray-100 md:hover.bg-transparent md:hover.text-blue-700 md:p-0 dark.text-white md:dark:hover.text-blue-500 dark:hover.bg-gray-700 dark:hover.text-white md:dark:hover.bg-transparent dark.border-gray-700"
                    >
                      Terms
                    </a>
                  </li>
                  <li>
                    <a
                      href="contact"
                      className="focus:bg-blue-100 focus:text-red-600 block py-2 pl-3 pr-4 text-gray-900 rounded hover.bg-gray-100 md:hover.bg-transparent md:hover.text-blue-700 md:p-0 dark.text-white md:dark:hover.text-blue-500 dark:hover.bg-gray-700 dark:hover.text-white md:dark:hover.bg-transparent dark.border-gray-700"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

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
                  href="contact"
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
