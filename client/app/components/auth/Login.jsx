'use client';
// import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { useUser } from '@/app/state/UserContext';
import { useRouter } from 'next/navigation';

const Login = ({ setIsLogin }) => {
  // const { register, handleSubmit } = useForm();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { handleLogin } = useUser();

  const router = useRouter();

  const onSubmit = async e => {
    e.preventDefault();

    try {
      await handleLogin({ email, password });
      router.push('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleSwitchToRegistration = () => {
    setIsLogin(false);
  };

  return (
    <div>
      <div className="flex items-center justify-center bg-gray-100">
        <div className="w-full p-8 bg-white shadow-lg rounded-xl min-w-fit min-h-[450px]">
          <h2 className="flex items-center justify-center mb-6 text-2xl font-semibold text-center text-blue-800">
            Login
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </h2>
          <form onSubmit={onSubmit}>
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
                onChange={e => setEmail(e.target.value)}
                required
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
                onChange={e => setPassword(e.target.value)}
                required
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
