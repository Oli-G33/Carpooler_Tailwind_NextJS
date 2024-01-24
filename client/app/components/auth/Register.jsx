'use client';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import Image from 'next/image';
import { useUser } from '@/app/state/UserContext';
import { useRouter } from 'next/navigation';

const Register = ({ setIsLogin }) => {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPass, setConfirmPass] = useState('');
  // const [picture, setPicture] = useState(
  //   'https://source.unsplash.com/C8Ta0gwPbQg'
  // );
  // const [phoneNumber, setPhoneNumber] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPass: ''
    }
  });
  console.log(errors);
  const firstName = watch('firstName');

  const handleSwitchToLogin = () => {
    setIsLogin(true);
  };

  const { handleRegister } = useUser();
  const router = useRouter();

  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   try {
  //     await handleRegister({
  //       email,
  //       password,
  //       firstName,
  //       lastName,
  //       phoneNumber,
  //       picture
  //     });
  //   } catch (error) {
  //     console.error('Registration failed:', error);
  //   }
  // };

  const totalSteps = 4;

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 rounded-xl">
        <div className="w-full max-w-md dark:bg-gray-600 p-8 bg-white shadow-lg h-2/3 rounded-xl min-h-[450px] min-w-[310px] md:min-w-0">
          <h2 className="flex items-center justify-center mb-6 text-2xl font-semibold text-center text-blue-800 dark:text-gray-200">
            Register
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
              />
            </svg>
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
                    <span className="inline-block text-xs font-semibold text-blue-600 dark:text-gray-200">
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
          <form
            onSubmit={handleSubmit(data => {
              console.log(data);
            })}
          >
            {step === 1 && (
              <div>
                <div className="mb-4">
                  <input
                    {...register('firstName', {
                      required: 'First Name Is Required',
                      minLength: { value: 4, message: 'Min 4 Characters' }
                    })}
                  />
                  <p className="mt-0.5 text-red-500 text-xs">
                    {errors.firstName?.message}
                  </p>
                  <br />
                  <br />
                  <input
                    {...register('lastName', {
                      required: 'Last Name Is Required',
                      minLength: { value: 4, message: 'Min 4 Characters' }
                    })}
                  />
                  <p className="mt-0.5 text-red-500 text-xs">
                    {errors.lastName?.message}
                  </p>
                  <br />
                  <br />
                  <input type="submit" />

                  {/* <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-bold text-blue-800 dark:text-gray-200"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
                    {...register('firstName', {
                      required: 'First Name Is Required',
                      minLength: { value: 4, message: 'Min 4 Characters' }
                    })}
                    placeholder="John"
                  />
                  <p className="text-sm text-red-500 mt-0.5">
                    {errors.firstName?.message}
                  </p>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-bold text-blue-800 dark:text-gray-200"
                  >
                    Last Name
                  </label> */}
                  {/* <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Smith"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
                    {...register('lastName', {
                      required: 'Last Name Is Required',
                      minLength: { value: 4, message: 'Min 4 Characters' }
                    })}
                  /> */}
                  {/* <p className="text-sm text-red-500 mt-0.5">
                    {errors.lastName?.message}
                  </p> */}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-bold text-blue-800 dark:text-gray-200"
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
                    className="block mb-2 text-sm font-bold text-blue-800 dark:text-gray-200"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="+49 123899755"
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
                    className="block mb-2 text-sm font-bold text-blue-800 dark:text-gray-200"
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
                    className="block mb-2 text-sm font-bold text-blue-800 dark:text-gray-200"
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
                  className="block mb-3 text-sm font-bold text-blue-800 dark:text-gray-200"
                >
                  Avatar
                </label>
                <div className="flex flex-col items-center">
                  <Image
                    className="mb-4 rounded-full w-14 h-14 ring-4 ring-gray-200 hover:ring-blue-200 dark:hover:ring-gray-800"
                    src="https://source.unsplash.com/C8Ta0gwPbQg"
                    alt="user photo"
                    sizes="(max-width: 640px) 50px, (max-width: 768px) 50px, 100px"
                    width="500"
                    height="500"
                    style={{
                      objectFit: 'cover'
                    }}
                  />
                  <input
                    type="file"
                    id="avatar"
                    name="avatar"
                    accept="image/*"
                    className="w-24 px-1 py-1 text-sm border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
                  />
                </div>
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
              {step < totalSteps ? (
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
                <input
                  type="submit"
                  className="px-2 py-1 text-white bg-blue-500 rounded-md font-xs hover:bg-blue-600 focus:outline-none focus:ring focus:ring-indigo-200"
                  value="Sign Up!"
                />
              )}
            </div>
            <div className="mt-3 text-center dark:text-gray-200">
              <small>
                Already registered?{' '}
                <a
                  className="text-blue-700 hover:cursor-pointer hover:underline dark:text-blue-500 dark:font-semibold"
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
