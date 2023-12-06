'use client';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import React from 'react';

const currentYear = new Date().getFullYear();

const Copyright = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`bottom-0 flex justify-center p-2 text-center ${
        theme === 'dark' ? 'bg-gray-600 text-white' : 'bg-gray-100'
      }  dark:`}
    >
      <span>
        Copyright ©{' '}
        <Link
          className="hover:underline"
          href="https://oliver-garcia.onrender.com/"
          target="_blank"
        >
          Oliver Garcia
        </Link>{' '}
        {currentYear}
      </span>
    </div>
  );
};

export default Copyright;
