'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const currentYear = new Date().getFullYear();

const Copyright = () => {
  const { theme } = useTheme();
  return (
    <>
      <footer className="bg-gray-300 rounded-lg shadow dark:bg-gray-900">
        <div className="w-full max-w-screen-xl p-4 mx-auto">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="flex items-center mb-4 space-x-3 sm:mb-0 rtl:space-x-reverse"
            >
              <Image
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-10"
                alt="Flowbite Logo"
                width={50}
                height={50}
              />
              <span className="self-center text-xl font-semibold text-blue-900 whitespace-nowrap dark:text-white">
                Carpooler™
              </span>
            </a>
            <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href="https://github.com/Oli-G33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline me-4 md:me-6"
                >
                  <FaGithub
                    size="25px"
                    color={theme === 'dark' ? 'white' : '#1e3a8c'}
                  />
                </a>
              </li>
              <li className="ml-4">
                <a
                  href="https://www.linkedin.com/in/oliver-garcia3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline me-4 md:me-6"
                >
                  <FaLinkedin
                    size="25px"
                    color={theme === 'dark' ? 'white' : '#1e3a8c'}
                  />
                </a>
              </li>
              <li className="ml-4">
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                  className="hover:underline me-4 md:me-6"
                >
                  <FaEnvelope
                    size="25px"
                    color={theme === 'dark' ? 'white' : '#1e3a8c'}
                  />
                </a>
              </li>
              <li className="ml-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}
                  className="text-gray-800 hover:underline me-4 md:me-6 dark:text-white"
                >
                  <FaWhatsapp
                    size="25px"
                    color={theme === 'dark' ? 'white' : '#1e3a8c'}
                  />
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{' '}
            <a
              href="https://oliver-garcia.onrender.com/"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Oliver Garcia
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Copyright;
