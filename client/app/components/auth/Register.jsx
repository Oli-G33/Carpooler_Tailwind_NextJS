'use client';
import { useForm } from 'react-hook-form';

import React, { useState } from 'react';

const Register = ({ setIsLogin }) => {
  const handleSwitchToLogin = () => {
    setIsLogin(true);
  };

  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission (e.g., sending data to the server)
  };

  const totalSteps = 4;

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white shadow-lg h-2/3 rounded-xl min-h-[450px]">
          <h2 className="mb-6 text-2xl font-semibold text-center text-blue-800">
            Registration
          </h2>

          <div className="mb-4">
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="relative pt-1">
                <div className="flex items-center justify-end mb-2">
                  {/* <div>
                    <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-600 uppercase bg-blue-200 rounded-full">
                      Step {step}
                    </span>
                  </div> */}
                  <div className="text-right">
                    <span className="inline-block text-xs font-semibold text-blue-600">
                      {step} of {totalSteps}
                    </span>
                  </div>
                </div>
                <div className="flex h-2 mb-4 overflow-hidden bg-gray-300 rounded">
                  <div
                    style={{ width: `${(step / totalSteps) * 100}%` }}
                    className="flex flex-col justify-center text-center text-white bg-blue-500 shadow-none whitespace-nowrap"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div>
                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-bold text-blue-800"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-bold text-blue-800"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Smith"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-bold text-blue-800"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="name@domain.com"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-bold text-blue-800"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="+0049123899755"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-bold text-blue-800"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-bold text-blue-800"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
                  />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="mb-10">
                <label
                  htmlFor="avatar"
                  className="block mb-8 text-sm font-bold text-blue-800"
                >
                  Avatar Image
                </label>
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="image/*"
                  className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
                />
              </div>
            )}

            <div className="flex justify-between mt-6">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-4 py-1 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-indigo-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
              )}
              {step < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-4 py-1 ml-auto font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-indigo-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-4 py-1 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-indigo-200"
                >
                  Sign up!
                </button>
              )}
            </div>
            <div className="mt-3 text-center">
              <small>
                Already registered?{' '}
                <a
                  className="text-blue-700 hover:cursor-pointer hover:underline"
                  onClick={handleSwitchToLogin}
                >
                  Log in!
                </a>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
