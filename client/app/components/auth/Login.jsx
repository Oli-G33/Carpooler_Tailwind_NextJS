'use client';
import { useForm } from 'react-hook-form';

import React from 'react';

const Login = ({ setIsLogin }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  const handleSwitchToRegistration = () => {
    setIsLogin(false);
  };

  return (
    <div>
      <div className="flex items-center justify-center bg-gray-100">
        <div className="w-full p-8 bg-white shadow-lg rounded-xl min-w-fit">
          <h2 className="mb-6 text-2xl font-semibold text-center text-blue-800">
            Login
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                placeholder="email@domain.com"
                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
              />
            </div>
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
                placeholder="•••••••••"
                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="min-w-full px-4 py-1 mb-3 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-indigo-200"
            >
              Login
            </button>
          </form>
          <div className="text-center">
            <small>
              Don&apos;t have an account?{' '}
              <a
                className="text-blue-700 hover:cursor-pointer hover:underline"
                onClick={handleSwitchToRegistration}
              >
                Sign up!
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
