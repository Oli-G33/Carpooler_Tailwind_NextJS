import Link from 'next/link';
import React from 'react';

const currentYear = new Date().getFullYear();

const Copyright = () => {
  return (
    <div className="bottom-0 flex justify-center mt-6 text-center">
      <span>
        Copyright ©
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
