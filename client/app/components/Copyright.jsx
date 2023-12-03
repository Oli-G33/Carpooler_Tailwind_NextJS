import Link from 'next/link';
import React from 'react';

const currentYear = new Date().getFullYear();

const Copyright = () => {
  return (
    <div className="bottom-0 flex justify-center p-2 text-center bg-gray-100">
      <span>
        Copyright ©{' '}
        <Link
          className="hover:underline"
          href="https://oliver-garcia.onrender.com/"
          target="_blank"
        >
          Oliver Garcia{' '}
        </Link>
        {currentYear}
      </span>
    </div>
  );
};

export default Copyright;
