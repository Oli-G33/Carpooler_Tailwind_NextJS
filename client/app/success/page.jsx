import React from 'react';

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Success Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 mb-4 text-green-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>

      {/* Success Message */}
      <h1 className="mb-4 text-3xl font-semibold text-center text-green-500">
        Your Ride Has Been Requested!
      </h1>
      <p className="mb-6 text-lg text-center text-gray-700">
        Your ride request has been submitted. You will receive an email
        notification once the driver confirms the ride details.
      </p>

      {/* Back to Home Button */}
      <a
        href="/"
        className="px-6 py-3 text-lg font-semibold text-white transition duration-300 ease-in-out bg-blue-500 rounded-full hover:bg-blue-600"
      >
        Back to Home
      </a>
    </div>
  );
};

export default SuccessPage;
